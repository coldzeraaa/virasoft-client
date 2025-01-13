import { ReactNode } from 'react';

import { BuildContextProvider } from '@/lib/context/build-context';

export default function BuildLayout({ children }: { children: ReactNode }) {
  return <BuildContextProvider>{children}</BuildContextProvider>;
}
