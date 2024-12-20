import type { AppConfigType } from './APP_CONFIG_TYPE';

export const APP_CONFIG: AppConfigType = {
  locale: 'mn',
  locales: ['en'],
  sourceLocale: 'en',
  appIndex: 'virasoft',

  tokens: {
    uid: 'virasoft',
    secret: 'Jt18B9M6m0UKpF94T8RKjMVI4dqgjfmBskKv1E462R0rS1FWWS',
  },
  map: {
    defaultCenter: { lat: 47.918, lng: 106.917 },
    defaultZoom: 12,
    googleMapApiKey: 'AIzaSyDxcyOYg35wY-BI9qrsctD6LoOCcJkN5xY',
  },
  metadataBase: {
    title: 'Virasoft',
    description: 'Welcome to Virasoft',
    metadataBase: new URL('https://virasoft.mn'),
    icons: { icon: { url: `/public/virasoft/favicon.ico` } },
    openGraph: {
      images: `/public/virasoft/share.webp`,
      type: 'website',
      locale: 'mn',
      siteName: 'https://virasoft.mn',
    },
  },
};
