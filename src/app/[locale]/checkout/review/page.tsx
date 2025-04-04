import { Suspense } from "react";

import Loading from "./loading";

import {
  ProductListSection,
  ShippingSection,
} from "@/components/page-client/checkout/checkout-review-page-client";

export default function Page() {
  return (
    <>
      <section className="mb-4">
        <h2 className="mb-4 text-2xl font-semibold">Бүтээгдэхүүний жагсаалт</h2>
        <Suspense fallback={<Loading />}>
          <ProductListSection />
        </Suspense>
      </section>
      <section>
        <h2 className="mb-4 text-2xl font-semibold">Хүргэлтийн хаяг</h2>
        <Suspense fallback={<Loading />}>
          <ShippingSection />
        </Suspense>
      </section>
    </>
  );
}
