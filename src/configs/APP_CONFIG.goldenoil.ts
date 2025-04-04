import type { AppConfigType } from "./APP_CONFIG_TYPE";

export const APP_CONFIG: AppConfigType = {
  locale: "mn",
  locales: ["en"],
  sourceLocale: "en",
  appIndex: "goldenoil",

  tokens: {
    uid: "goldenoil",
    secret: "6mtLdZ6izdyI6ZPni9zK",
  },
  map: {
    defaultCenter: { lat: 47.918, lng: 106.917 },
    defaultZoom: 12,
    googleMapApiKey: "AIzaSyCA3KMFHGBwiVTo6M0FEvB4Gnk5wPoqoMM",
    googleMapId: "1f6ed92fb97c2924",
  },
  metadataBase: {
    title: "Golden Oil",
    description: "Welcome to Virasoft",
    metadataBase: new URL("https://virasoft.mn"),
    icons: { icon: { url: `/public/virasoft/favicon.ico` } },
    openGraph: {
      images: `/public/goldenoil/share.webp`,
      type: "website",
      locale: "mn",
      siteName: "https://virasoft.mn",
    },
  },
};
