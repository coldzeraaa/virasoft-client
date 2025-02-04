import { NextMiddlewareClient } from 'nextjs-middleware-client';

import { APP_CONFIG } from '@/configs/APP_CONFIG';
import { HOST_CONFIG } from '@/configs/HOST_CONFIG';
import { STORE_KEY_CONFIG } from '@/configs/STORE_KEY_CONFIG';

export const middlewareClient = new NextMiddlewareClient({
  userTokenKey: STORE_KEY_CONFIG.NEXT_USER_TOKEN,
  clientTokenKey: STORE_KEY_CONFIG.NEXT_CLIENT_TOKEN,
  localeKey: STORE_KEY_CONFIG.NEXT_LOCALE,
  applicationSecret: APP_CONFIG.tokens.secret,
  applicationId: APP_CONFIG.tokens.uid,
  host: HOST_CONFIG.host,
  defaultLocale: APP_CONFIG.locale,
  locales: APP_CONFIG.locales,
  protectedPaths: [/^(\/\w{2})?\/account\/?/, /^(\/\w{2})?\/checkout\/address\/?/, /^(\/\w{2})?\/checkout\/confirm\/?/],
  redirectAuthPath: '/auth/login',
  redirectUserPath: '/',
});
