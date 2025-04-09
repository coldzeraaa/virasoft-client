import HolyLoader from 'holy-loader';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import './globals.css';

import { bodyClassName } from '@/components/class-names/body-class-names';
import { lightTheme } from '@/components/class-names/data-theme-name';
import { inter, montserrat } from '@/components/class-names/font-families/index.bsent';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { APP_CONFIG } from '@/configs/APP_CONFIG';
import { AuthProvider } from '@/lib/context/auth-context';
import { CurrentOrderProvider } from '@/lib/context/current-order-context';
import { ApolloProvider } from '@/lib/provider/apollo-provider';

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" data-theme={lightTheme} className={`${inter.className} ${montserrat.variable}`}>
      <body className={bodyClassName}>
        <ApolloProvider>
          <AuthProvider>
            <CurrentOrderProvider>
              <HolyLoader />
              <Header />
              <>{children}</>
              <Footer />
              <ToastContainer />
            </CurrentOrderProvider>
          </AuthProvider>
        </ApolloProvider>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return APP_CONFIG.metadataBase;
}
