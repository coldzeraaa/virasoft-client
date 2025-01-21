import { LineItemsSection } from '@/components/pages/checkout/line-items-section';
import { PaymentSection } from '@/components/pages/checkout/payment-section';

export default function Page() {
  return (
    <div className="grid py-8">
      <div className="container grid h-full max-w-7xl grid-cols-1 grid-rows-1 gap-14 overflow-hidden md:grid-cols-2">
        <main className="col-span-1 h-full overflow-auto">
          <h1 className="sr-only">Checkout</h1>
          <section aria-label="items">
            <h1 className="mb-4 text-2xl font-semibold">Миний сагс</h1>
            <LineItemsSection />
          </section>
        </main>
        <aside aria-label="payment info and action" className="col-span-1">
          <h2 className="mb-4 text-2xl font-semibold">Төлбөрийн мэдээлэл</h2>
          <div className="rounded-xl bg-base-200 p-8">
            <PaymentSection />
          </div>
        </aside>
      </div>
    </div>
  );
}
