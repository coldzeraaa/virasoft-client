import Link from 'next/link';

import { AccountPageClient } from '@/components/page-client/account/account-page-client';

export default async function Dashboard() {
  return (
    <>
      <div className="mb-4 flex w-full items-center justify-between">
        <h1 className="text-xl font-bold md:text-2xl">Миний самбар</h1>
        <Link href="/account/orders" className="btn btn-link btn-sm hover:bg-base-300">
          Бүгдийг харах
        </Link>
      </div>
      <AccountPageClient />
    </>
  );
}
