const DEFAULT_SITE_URL = "https://clistesystems.ie";

/** Canonical site origin; empty env vars fall back to production URL. */
export function getSiteUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  return fromEnv || DEFAULT_SITE_URL;
}
