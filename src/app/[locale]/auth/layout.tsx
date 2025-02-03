import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <div className=" h-4/5">{children}</div>;
}
