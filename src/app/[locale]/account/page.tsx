import Link from 'next/link';

import { LastOrders } from '@/components/pages/account/last-orders';

export default function Dashboard() {
  return (
    <div className="h-full w-full max-w-7xl">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold md:text-3xl">Миний самбар</h1>
        <Link href="/account/orders" className="btn bg-base-100 hover:border-base-300 hover:bg-base-300">
          Бүгдийг харах
        </Link>
      </div>
      <LastOrders />
    </div>
  );
}
