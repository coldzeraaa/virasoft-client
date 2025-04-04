import { NextRequest } from 'next/server';

import { middlewareClient } from '@/configs/middleware-config';

export async function middleware(request: NextRequest) {
  try {
    console.warn(`\u26a0 request: ${request.nextUrl.pathname}`);
    return middlewareClient.generateResponse(request);
  } catch (e) {
    return middlewareClient.catchResponse(e);
  }
}

export const config = {
  matcher: ['/((?!api|public|_next/static|_next/image|.*\\.png$|.*\\.ico$|.*\\.xlsx$).*)'],
};
//favicon.ico
