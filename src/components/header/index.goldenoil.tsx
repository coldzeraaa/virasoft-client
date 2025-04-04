'use client';

import { Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useMeQuery } from '@/gql/query/user/me.generated';
import { useCurrentOrder } from '@/lib/context/current-order-context';

export function Header() {
  const { data: userData, loading } = useMeQuery();
  const { order } = useCurrentOrder();
  const router = useRouter();

  if (loading) return <Loader />;

  return (
    <header className="sticky top-0 z-40 w-full bg-base-100 p-4 shadow-md">
      <div className="container flex items-center justify-between">
        {/* Лого */}
        <Link href="/" className="mr-3 text-xl font-bold text-[#204266]">
          GOLDEN<span className="text-[#3F94BB]">Oil</span>
        </Link>

        {/* Хайлт */}
        <div className="flex w-2/3 items-center overflow-hidden rounded-lg border md:w-1/2">
          <input
            type="text"
            placeholder="Хайлт хийх..."
            className="w-full p-3 outline-none"
            onKeyDown={(event) => {
              if (event.key === 'Enter') router.push('/s');
            }}
          />
          <button className="bg-gray-200 p-3">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Икон хэсэг */}
        <div className="flex gap-4">
          <Link href="/checkout" className="relative flex h-10 w-10 items-center justify-center rounded-full bg-white text-white">
            <ShoppingCart className="h-6 w-6 text-[#3F94BB]" />
            {order?.itemCount && (
              <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white text-xs text-white">
                {order.itemCount}
              </span>
            )}
          </Link>
          <Link
            href={userData?.me ? '/account' : '/auth/login'}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3F94BB] text-white"
          >
            <User className="h-6 w-6 text-white" />
          </Link>
        </div>
      </div>
    </header>
  );
}

function Loader() {
  return (
    <header className="z-40 w-full bg-base-100 shadow-md">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <div className="skeleton h-8 w-8 rounded-full bg-base-300" />
        <div className="flex gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="skeleton h-8 w-8 rounded bg-base-300" />
          ))}
        </div>
      </div>
    </header>
  );
}
