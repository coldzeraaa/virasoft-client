import { LineItemsSection } from '@/components/pages/checkout/line-items-section';
import { PaymentSection } from '@/components/pages/checkout/payment-section';

export default function Page() {
  return (
    <div className="grid h-full grid-rows-[auto,1fr] gap-4 overflow-hidden py-8">
      <div className="container grid h-full grid-cols-12 gap-14 overflow-hidden">
        <main className="col-span-6 h-full overflow-auto md:col-span-7 xl:col-span-8">
          <h1 className="sr-only">Checkout</h1>
          <section aria-label="items" className="grid grid-rows-[auto,1fr] gap-4">
            <div className="flex justify-between">
              <h1 className="text-2xl font-semibold">My cart</h1>
            </div>
            <LineItemsSection />
          </section>
        </main>
        <aside aria-label="payment info and action" className="col-span-4 h-fit rounded-lg border border-neutral-content p-4">
          <PaymentSection />
        </aside>
      </div>
    </div>
  );
}
