import type { AppConfigType } from "./APP_CONFIG_TYPE";

export const APP_CONFIG: AppConfigType = {
  locale: "mn",
  locales: ["mn"],
  sourceLocale: "mn",
  appIndex: "Default",

  tokens: {
    uid: "Default",
    secret: "Default",
  },
  map: {
    defaultCenter: { lat: 47.918, lng: 106.917 },
    defaultZoom: 12,
    googleMapApiKey: "",
    googleMapId: "",
  },
  metadataBase: {
    title: "Default",
    description: "Default",
    metadataBase: new URL("https://virasoft.mn"),
    icons: { icon: { url: `/public/virasoft/favicon.ico` } },
    openGraph: {
      images: `/public/virasoft/share.webp`,
      type: "website",
      locale: "mn",
      siteName: "https://virasoft.mn",
    },
  },
};
