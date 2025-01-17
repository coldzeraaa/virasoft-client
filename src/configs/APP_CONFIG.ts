import type { AppConfigType } from './APP_CONFIG_TYPE';

export const APP_CONFIG: AppConfigType = {
  locale: 'mn',
  locales: ['en'],
  sourceLocale: 'en',
  appIndex: 'uc',

  tokens: {
    uid: 'backoffice',
    secret: '70194bbc6f42d6f07207252d56fef245a8eb24513f7637eabbda6bdd1d36ba7a',
  },
  map: {
    defaultCenter: { lat: 47.918, lng: 106.917 },
    defaultZoom: 12,
    googleMapApiKey: '',
    mapId: '',
  },
  metadataBase: {
    title: 'Default',
    description: 'Default',
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
