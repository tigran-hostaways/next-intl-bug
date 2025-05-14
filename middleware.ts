import { NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

export default async function middleware(request: NextRequest) {
  const modifiedRequest = new NextRequest(request.url, {
    headers: request.headers,
    method: request.method,
    body: request.body,
  });

  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'fr'],
    defaultLocale: 'fr',
    localePrefix: 'as-needed',
  });

  const response = handleI18nRouting(modifiedRequest)

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|robots.txt|sitemap.xml).*)',
  ],
};
