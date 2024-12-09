import HolyLoader from 'holy-loader';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import './globals.css';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { APP_CONFIG } from '@/configs/APP_CONFIG';
import { ApolloProvider } from '@/lib/provider/apollo-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="grid h-screen grid-rows-[auto,1fr,auto]">
        <ApolloProvider>
          <HolyLoader />
          <Header />
          <div className="py-4">{children}</div>
          <Footer />
          <ToastContainer />
        </ApolloProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return APP_CONFIG.metadataBase;
}
