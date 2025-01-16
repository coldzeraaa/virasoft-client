'use client';
import { useState } from 'react';

import { PaymentSection } from '../checkout/payment-section';

import { DeliveryOptions } from './delivery-options';

import { DeliveryProvider } from '@/lib/context/delivery-context';

export function AddressPageClient() {
  const [selectedAddress, setSelectedAddress] = useState<Address | undefined>(undefined);
  const [coordinates, setCoordinates] = useState<{ lat: string; lng: string } | null>(null);
  return (
    <DeliveryProvider>
      <div className="container grid h-full max-w-7xl grid-cols-1 gap-14 px-0 py-8 lg:grid-cols-2">
        <main className="col-span-1 h-full">
          <section aria-label="items" className="">
            <DeliveryOptions
              selectedAddress={selectedAddress}
              setSelectedAddress={setSelectedAddress}
              coordinates={coordinates}
              setCoordinates={setCoordinates}
            />
          </section>
        </main>
        <aside aria-label="payment info and action" className="col-span-1">
          <h2 className="mb-4 text-2xl font-semibold">Payment info</h2>
          <div className="rounded-lg border border-neutral-content p-4">
            <PaymentSection
              selectedAddress={selectedAddress}
            />
          </div>
        </aside>
      </div>
    </DeliveryProvider>
  );
}

interface Address {
  id: string;
  address1: string;
  address2: string;
  addressAlias?: string | null | undefined;
  latitude?: string | null | undefined;
  longitude?: string | null | undefined;
}
