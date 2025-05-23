import { Suspense } from "react";

import Loading from "./address/loading";

import { LineItemsSection } from "@/components/pages/checkout/line-items-section";

export default async function CheckoutPage() {
  return (
    <>
      <h1 className="sr-only">Checkout</h1>
      <section aria-label="items">
        <h2 className="mb-4 text-2xl font-semibold">Миний сагс</h2>
        <Suspense fallback={<Loading />}>
          <LineItemsSection />
        </Suspense>
      </section>
    </>
  );
}
