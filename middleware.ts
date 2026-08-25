import { NextRequest, NextResponse } from "next/server";

const LEGACY_MARKETING_HOSTS = new Set([
  "clistesystems.ie",
  "www.clistesystems.ie",
]);

const CANONICAL_MARKETING_ORIGIN = "https://hellocara.ie";

const CANONICAL_MARKETING_HOST = "hellocara.ie";

function wwwCanonicalRedirect(request: NextRequest): NextResponse | null {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (host !== `www.${CANONICAL_MARKETING_HOST}`) return null;
  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    `https://${CANONICAL_MARKETING_HOST}`,
  );
  return NextResponse.redirect(destination, 308);
}

function legacyMarketingHostRedirect(
  request: NextRequest,
): NextResponse | null {
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (!host || !LEGACY_MARKETING_HOSTS.has(host)) return null;
  const destination = new URL(
    `${request.nextUrl.pathname}${request.nextUrl.search}`,
    CANONICAL_MARKETING_ORIGIN,
  );
  return NextResponse.redirect(destination, 308);
}

export function middleware(request: NextRequest) {
  return (
    wwwCanonicalRedirect(request) ??
    legacyMarketingHostRedirect(request) ??
    NextResponse.next()
  );
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
