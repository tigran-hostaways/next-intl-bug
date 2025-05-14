import { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    localePrefix: 'as-needed',
  });

  const response = handleI18nRouting(request)

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|robots.txt|sitemap.xml).*)',
  ],
};
