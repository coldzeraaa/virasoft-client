'use client';

import { ReactNode } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export function ButtonPersistSearchParams({ href, children, className }: { href: string; children: ReactNode; className?: string }) {
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  return (
    <Link href={{ pathname: href, query: params }} className={className}>
      {children}
    </Link>
  );
}
