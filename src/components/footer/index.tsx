'use client';

import { usePathname } from 'next/navigation';

export function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith('/build')) {
    return null;
  }

  return <footer className="z-40 grid h-11 place-items-center border-t bg-base-300 lg:h-20">Footer</footer>;
}
