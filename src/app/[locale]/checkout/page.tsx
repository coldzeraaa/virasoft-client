import { LineItemsSection } from '@/components/pages/checkout/line-items-section';

export default async function CheckoutPage() {
  return (
    <>
      <h1 className="sr-only">Checkout</h1>
      <section aria-label="items">
        <h1 className="mb-4 text-2xl font-semibold">Миний сагс</h1>
        <LineItemsSection />
      </section>
    </>
  );
}
