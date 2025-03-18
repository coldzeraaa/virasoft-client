import { ReactNode } from 'react';

export default function Layout({ children, options }: { children: ReactNode; options: ReactNode }) {
  return (
    <main className="container grid grid-cols-12 gap-4 py-8">
      <section className="col-span-12 md:col-span-8">{children}</section>
      <section className="col-span-12 md:col-span-4">{options}</section>
    </main>
  );
}
