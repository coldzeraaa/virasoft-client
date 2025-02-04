import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api', '/account', '/[a-z]{2}/accounts', '/auth', '/[a-z]{2}/auth', '/checkout', '/[a-z]{2}/checkout'],
    },
  };
}
