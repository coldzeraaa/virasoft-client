'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export function LayoutContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Header />
      <div>{children}</div>
      {!pathname.startsWith('/build') || (pathname.startsWith('/order') && <Footer />)}
    </>
  );
}
