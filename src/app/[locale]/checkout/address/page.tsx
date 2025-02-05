import { Suspense } from 'react';

import Loading from './loading';

import { CheckoutAddressPageClient } from '@/components/page-client/checkout/checkout-address-page-client';

export default function CheckoutAddressPage() {
  return (
    <>
      <h1 className="sr-only">Address</h1>
      <section aria-label="items">
        <h2 className="mb-4 text-2xl font-semibold">Хүргэлтийн хаяг</h2>
        <Suspense fallback={<Loading />}>
          <CheckoutAddressPageClient />
        </Suspense>
      </section>
    </>
  );
}
