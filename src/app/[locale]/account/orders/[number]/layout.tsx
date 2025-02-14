import { ReactNode } from 'react';

export default function Layout({ children, pay }: { children: ReactNode; pay: ReactNode }) {
  return (
    <>
      {children}
      {pay}
    </>
  );
}
