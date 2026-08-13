#!/usr/bin/env python3
"""Point marketing-site DNS at the current Vercel project.

Supports clistesystems.ie (legacy) and hellocara.ie (current).

Requires a Cloudflare API token with:
  - Zone / DNS / Edit
  - Zone / Zone / Read

Env:
  CLOUDFLARE_API_TOKEN
  CF_ZONE_ID (zone id for the target domain)
  SITE_DOMAIN (defaults to clistesystems.ie)

Optional overrides:
  VERCEL_WWW_CNAME   default: 9d50a7f5d9de6e3d.vercel-dns-017.com
  VERCEL_TXT_VERIFY  copy from Vercel → Domains → www.<SITE_DOMAIN>
  VERCEL_APEX_A      default: 76.76.21.21

Usage:
  python3 scripts/cloudflare-vercel-dns.py
  SITE_DOMAIN=hellocara.ie VERCEL_TXT_VERIFY='vc-domain-verify=www...' python3 scripts/cloudflare-vercel-dns.py
  SITE_DOMAIN=clistesystems.ie CF_ZONE_ID=<legacy-zone-id> python3 scripts/cloudflare-vercel-dns.py
"""
from __future__ import annotations

import json
import os
import sys
import urllib.error
import urllib.request

TOKEN = os.environ.get("CLOUDFLARE_API_TOKEN", "")
SITE_DOMAIN = os.environ.get("SITE_DOMAIN", "clistesystems.ie").strip().lower()
ZONE = os.environ.get("CF_ZONE_ID", "").strip()
WWW_CNAME = os.environ.get(
    "VERCEL_WWW_CNAME", "9d50a7f5d9de6e3d.vercel-dns-017.com"
).rstrip(".")
TXT_VERIFY = os.environ.get("VERCEL_TXT_VERIFY", "").strip()
APEX_A = os.environ.get("VERCEL_APEX_A", "76.76.21.21")
BASE = "https://api.cloudflare.com/client/v4"

# Default zone ids when CF_ZONE_ID is unset.
DEFAULT_ZONE_IDS = {
    "hellocara.ie": "",  # set CF_ZONE_ID after hellocara.ie is on Cloudflare
    "clistesystems.ie": "e9ea0e6e4429f528631bb2a1ae4628d0",
}


def api(method: str, path: str, body: dict | None = None) -> dict:
    data = None if body is None else json.dumps(body).encode()
    req = urllib.request.Request(BASE + path, data=data, method=method)
    req.add_header("Authorization", f"Bearer {TOKEN}")
    req.add_header("Content-Type", "application/json")
    try:
        with urllib.request.urlopen(req, timeout=30) as resp:
            return json.loads(resp.read())
    except urllib.error.HTTPError as exc:
        try:
            return json.loads(exc.read())
        except Exception:
            return {"success": False, "errors": [{"message": str(exc)}]}


def must(label: str, resp: dict) -> dict:
    if resp.get("success"):
        print(f"OK   {label}")
        return resp
    print(f"FAIL {label}: {resp.get('errors') or resp}")
    sys.exit(1)


def list_records(zone: str, name: str, rtype: str | None = None) -> list[dict]:
    q = f"name={name}"
    if rtype:
        q += f"&type={rtype}"
    resp = must(f"list {name}", api("GET", f"/zones/{zone}/dns_records?{q}&per_page=100"))
    return resp["result"]


def upsert(zone: str, name: str, rtype: str, content: str, proxied: bool = False) -> None:
    existing = list_records(zone, name, rtype)
    payload = {
        "type": rtype,
        "name": name,
        "content": content,
        "proxied": proxied,
        "ttl": 1,
    }
    if existing:
        rid = existing[0]["id"]
        must(f"update {rtype} {name}", api("PUT", f"/zones/{zone}/dns_records/{rid}", payload))
        return
    must(f"create {rtype} {name}", api("POST", f"/zones/{zone}/dns_records", payload))


def ensure_txt(zone: str, name: str, content: str) -> None:
    records = list_records(zone, name, "TXT")
    quoted = f'"{content}"'
    for record in records:
        if record["content"].strip('"') == content:
            print(f"OK   txt {name} already set")
            return
    payload = {
        "type": "TXT",
        "name": name,
        "content": quoted,
        "ttl": 1,
    }
    must(f"create txt {name}", api("POST", f"/zones/{zone}/dns_records", payload))


def configure_domain(zone: str, domain: str) -> None:
    www = f"www.{domain}"
    vercel_txt_host = f"_vercel.{domain}"
    print(f"\n--- {domain} (zone {zone}) ---")
    upsert(zone, www, "CNAME", WWW_CNAME, proxied=False)
    upsert(zone, domain, "A", APEX_A, proxied=False)
    ensure_txt(zone, vercel_txt_host, TXT_VERIFY)


def main() -> None:
    if not TOKEN:
        print("Set CLOUDFLARE_API_TOKEN (needs Zone DNS Edit).")
        sys.exit(1)
    if not TXT_VERIFY:
        print(
            f"Set VERCEL_TXT_VERIFY from Vercel → Domains → www.{SITE_DOMAIN} "
            "(TXT _vercel value)."
        )
        sys.exit(1)

    zone = ZONE or DEFAULT_ZONE_IDS.get(SITE_DOMAIN, "")
    if not zone:
        print(
            f"Set CF_ZONE_ID for {SITE_DOMAIN} "
            "(Cloudflare zone id — not in DEFAULT_ZONE_IDS)."
        )
        sys.exit(1)

    configure_domain(zone, SITE_DOMAIN)
    print("Done. In Vercel, click Refresh on both domains (may take a few minutes).")


if __name__ == "__main__":
    main()
