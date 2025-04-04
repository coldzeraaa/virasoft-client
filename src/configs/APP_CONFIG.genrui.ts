import type { AppConfigType } from "./APP_CONFIG_TYPE.bsent";

export const APP_CONFIG: AppConfigType = {
  locale: "mn",
  locales: ["mn"],
  sourceLocale: "mn",
  appIndex: "genrui",

  tokens: {
    uid: "genrui",
    secret: "7IC8Xg9F3NbdA1sYsU0vQ",
  },
  map: {
    defaultCenter: { lat: 47.918, lng: 106.917 },
    defaultZoom: 12,
    googleMapApiKey: "AIzaSyCA3KMFHGBwiVTo6M0FEvB4Gnk5wPoqoMM",
    googleMapId: "1f6ed92fb97c2924",
  },
  metadataBase: {
    title: "genrui - Тав тухыг мэдрүүлнэ",
    description: "genrui - тав тухыг мэдрүүлэх үндэсний брэнд",
    metadataBase: new URL("https://virasoft.mn"),
    icons: { icon: { url: `/public/virasoft/favicon.ico` } },
    openGraph: {
      images: `/public/bsent/share.webp`,
      type: "website",
      locale: "mn",
      siteName: "https://virasoft.mn",
    },
    googleFonts: {
      families: [
        "Montserrat:wght@400;500;600;700",
        "Inter:wght@400;500;600;700",
      ],
    },
  },
};
