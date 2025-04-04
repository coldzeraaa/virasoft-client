import type { AppConfigType } from "./APP_CONFIG_TYPE.bsent";

export const APP_CONFIG: AppConfigType = {
  locale: "mn",
  locales: ["en"],
  sourceLocale: "en",
  appIndex: "bsent",

  tokens: {
    uid: "bsent",
    secret: "oVIu6h7jMkL6NpHmJNnuTYNY4seJ1p4XtvjpO",
  },
  map: {
    defaultCenter: { lat: 47.918, lng: 106.917 },
    defaultZoom: 12,
    googleMapApiKey: "AIzaSyCA3KMFHGBwiVTo6M0FEvB4Gnk5wPoqoMM",
    googleMapId: "1f6ed92fb97c2924",
  },
  metadataBase: {
    title: "Bsent - Тав тухыг мэдрүүлнэ",
    description: "Bsent - тав тухыг мэдрүүлэх үндэсний брэнд",
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
