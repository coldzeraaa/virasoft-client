import { Suspense } from 'react';

import { ImageBuildPageClient } from '@/components/page-client/build-type/image-build-page-client';
import { PaymentInfo } from '@/components/page-client/build-type/payment-info';
import { CheckoutAddressPageClient } from '@/components/page-client/checkout/checkout-address-page-client';
import { LineItems } from '@/components/pages/build-type/line-items';
import { BuildTypeProvider } from '@/lib/context/build-type-context';
import { FormProvider } from '@/lib/context/form-context';

export default function Page() {
  return (
    <FormProvider>
      <BuildTypeProvider>
        <div className="container grid grid-cols-12 gap-8 py-8">
          <main className="col-span-12 md:col-span-7">
            <section aria-label="items">
              <h2 className="mb-4 text-2xl font-semibold">Барааны жагсаалт</h2>
              <Suspense fallback={<div className="skeleton h-96" />}>
                <LineItems />
              </Suspense>
            </section>
            <section aria-label="items" className="mt-8">
              <h2 className="mb-4 text-2xl font-semibold">Хүргэлтийн хаяг</h2>
              <Suspense fallback={<div className="skeleton h-96" />}>
                <CheckoutAddressPageClient />
              </Suspense>
            </section>
          </main>
          <aside className="sticky top-20 col-span-12 self-start md:col-span-5">
            <h2 className="mb-4 text-2xl font-semibold">Төлбөрийн мэдээлэл</h2>
            <Suspense fallback={<div className="skeleton h-20 w-full rounded-lg" />}>
              <PaymentInfo />
            </Suspense>
            <h2 className="mb-4 mt-8 text-2xl font-semibold">Зураг</h2>
            <Suspense fallback={<div className="skeleton aspect-square w-full rounded-lg" />}>
              <ImageBuildPageClient />
            </Suspense>
          </aside>
        </div>
      </BuildTypeProvider>
    </FormProvider>
  );
}
