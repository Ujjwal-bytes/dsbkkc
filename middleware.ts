import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

const locales = ["en", "mr"] as const;
const defaultLocale = "en";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix: "always",
  localeDetection: true,
});

export function middleware(request: NextRequest) {
  const response = intlMiddleware(request);

  // Persist locale selection in a cookie so reload keeps language choice
  const locale =
    request.cookies.get("NEXT_LOCALE")?.value ??
    request.headers.get("accept-language")?.split(",")[0].split("-")[0] ??
    defaultLocale;

  const validLocale = (locales as readonly string[]).includes(locale)
    ? locale
    : defaultLocale;

  const res = response ?? NextResponse.next();
  res.cookies.set("NEXT_LOCALE", validLocale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    path: "/",
    sameSite: "lax",
  });

  return res;
}

export const config = {
  // Match all pathnames except internals and static files
  matcher: [
    "/((?!_next|_vercel|api|.*\\..*).*)",
  ],
};
