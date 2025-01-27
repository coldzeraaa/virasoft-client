import Link from 'next/link';

import { LastOrders } from '@/components/pages/account/last-orders';

export default function Dashboard() {
  return (
    <div className="max-w-7xl h-full w-full">
      <div className="flex justify-between">
        <h1 className="text-xl font-bold md:text-3xl">Миний захиалгууд</h1>
        <Link href="/account/orders" className="btn bg-base-100 hover:border-base-300 hover:bg-base-300">
          Бүгдийг харах
        </Link>
      </div>
        <LastOrders />
    </div>
  );
}
