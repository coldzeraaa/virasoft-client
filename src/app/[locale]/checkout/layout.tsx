import { ReactNode } from 'react';

import { FormProvider } from '@/lib/context/form-context';

export default function CheckoutLayout({ children, info }: { children: ReactNode; info: ReactNode }) {
  return (
    <FormProvider>
      <div className="container grid grid-cols-12 gap-8 py-8">
        <main className="col-span-12 md:col-span-7">{children}</main>
        <aside className="sticky top-20 col-span-12 self-start md:col-span-5">
          <h2 className="mb-4 text-2xl font-semibold">Төлбөрийн мэдээлэл</h2>
          <div className="rounded-xl bg-base-200 p-4">{info}</div>
        </aside>
      </div>
    </FormProvider>
  );
}
