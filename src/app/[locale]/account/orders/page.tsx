import { AccountOrdersPageClient } from '@/components/page-client/account/orders/account-orders-page-client';

export default function Orders() {
  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h1 className="text-xl font-bold md:text-2xl">Миний захиалгууд</h1>
      </div>
      <AccountOrdersPageClient />
    </>
  );
}
