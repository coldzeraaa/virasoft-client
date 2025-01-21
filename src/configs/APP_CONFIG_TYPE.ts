export interface AppConfigType {
  locale: string;
  locales: string[];
  sourceLocale: string;
  appIndex: string;
  defaultTheme?: string;
  tokens: {
    uid: string;
    secret: string;
  };
  metadataBase: {
    title: string;
    description: string;
    metadataBase: URL;
    icons: { icon: { url: string } };
    openGraph: {
      images: string;
      type: string;
      locale: string;
      siteName: string;
    };
  };
  map: {
    defaultCenter: { lat: number; lng: number };
    defaultZoom: number;
    googleMapApiKey: string;
    mapId: string;
  };
}
