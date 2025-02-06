import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="mx-auto max-w-md">
      <div className="relative top-20">
        <>{children}</>
      </div>
    </main>
  );
}
