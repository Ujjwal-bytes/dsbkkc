import { getRequestConfig } from "next-intl/server";
import { cookies, headers } from "next/headers";

const locales = ["en", "mr"] as const;
type Locale = (typeof locales)[number];

function isValidLocale(locale: string): locale is Locale {
  return (locales as readonly string[]).includes(locale);
}

export default getRequestConfig(async ({ requestLocale }) => {
  // Use the locale from the [locale] segment
  let locale = await requestLocale;

  // Fall back to cookie → accept-language → default
  if (!locale || !isValidLocale(locale)) {
    const cookieStore = await cookies();
    const cookieLocale = cookieStore.get("NEXT_LOCALE")?.value;
    if (cookieLocale && isValidLocale(cookieLocale)) {
      locale = cookieLocale;
    } else {
      const headersList = await headers();
      const acceptLanguage = headersList.get("accept-language");
      const browserLocale = acceptLanguage?.split(",")[0].split("-")[0];
      locale = browserLocale && isValidLocale(browserLocale) ? browserLocale : "en";
    }
  }

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
