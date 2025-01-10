import HolyLoader from 'holy-loader';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import './globals.css';

import { bodyClassName } from '@/components/class-names/body-class-names';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { APP_CONFIG } from '@/configs/APP_CONFIG';
import { BuildContextProvider } from '@/lib/context/build-context';
import { ApolloProvider } from '@/lib/provider/apollo-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={bodyClassName}>
        <ApolloProvider>
          <BuildContextProvider>
            <HolyLoader />
            <Header />
            <div>{children}</div>
            <Footer />
            <ToastContainer />
          </BuildContextProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return APP_CONFIG.metadataBase;
}
