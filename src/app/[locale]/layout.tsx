import HolyLoader from 'holy-loader';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { LayoutContent } from './layout-content';

import './globals.css';

import { bodyClassName } from '@/components/class-names/body-class-names';
import { APP_CONFIG } from '@/configs/APP_CONFIG';
import { BuildContextProvider } from '@/lib/context/build-context';
import { ApolloProvider } from '@/lib/provider/apollo-provider';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className={bodyClassName}>
        <ApolloProvider>
          <HolyLoader />
          <BuildContextProvider>
            <LayoutContent>{children}</LayoutContent>
          </BuildContextProvider>
          <ToastContainer />
        </ApolloProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return APP_CONFIG.metadataBase;
}
