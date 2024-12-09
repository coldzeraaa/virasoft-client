import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import './globals.css';

import { APP_CONFIG } from '@/configs/APP_CONFIG';

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return APP_CONFIG.metadataBase;
}
