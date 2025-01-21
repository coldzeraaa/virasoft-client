'use client';
import { useState } from 'react';

import { PaymentSection } from '../checkout/payment-section';

import UserAddresses from '@/components/pages/address/user-addresses';

export function AddressPageClient() {
  const [selectedAddress, setSelectedAddress] = useState<string | null>(null);

  return (
    <div className="container grid h-full max-w-7xl grid-cols-1 gap-14 px-0 py-8 lg:grid-cols-2">
      <main className="col-span-1 h-full">
        <section aria-label="items">
          <UserAddresses setSelectedAddress={setSelectedAddress} />
        </section>
      </main>
      <aside aria-label="payment info and action" className="col-span-1">
        <h2 className="mb-4 text-2xl font-semibold">Payment info</h2>
        <div className="rounded-lg bg-base-200 p-8">
          <PaymentSection selectedAddress={selectedAddress} />
        </div>
      </aside>
    </div>
  );
}
