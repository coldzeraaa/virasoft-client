'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import bsent from '@/components/icons/bsent-logo-white.png';
import { useHeaderFooterQuery } from '@/gql/query/menu/header-footer.generated';
export function Header() {
  const { loading } = useHeaderFooterQuery({ variables: { filter: { title: { in: ['header', 'footer'] } } } });
  if (loading) return <Loader />;

  return (
    <header className="sticky top-0 z-40 w-full bg-primary shadow-md">
      <div className="container max-w-7xl">
        <div className="grid h-16 grid-cols-[1fr_auto] sm:grid-cols-[0.3fr_1.4fr_0.3fr]">
          <Link href="/" className="mr-3 flex flex-shrink-0 items-center">
            <Image className="h-8 w-auto" src={bsent} alt="Company Logo" width={32} height={42} priority />
          </Link>
          <ul className="hidden w-full grid-cols-3 place-items-center text-base uppercase text-primary-content sm:grid md:text-xl">
            <Link href="/shirt">
              <li>цамц</li>
            </Link>
            <Link href="/uniform">
              <li>дүрэмт хувцас</li>
            </Link>
            <Link href="/work uniform">
              <li>ажлын хувцас</li>
            </Link>
          </ul>
          <details className="dropdown dropdown-end dropdown-bottom flex h-full w-full items-center">
            <summary className="flex w-full items-center justify-end hover:cursor-pointer">
              <Menu className="stroke-primary-content" />
            </summary>
            <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
              <li>
                <a>Нэвтрэх</a>
              </li>
              <li>
                <a>Бүтгүүлэх</a>
              </li>
              <li>
                <a>Хүссэн хувцсаа угсрах</a>
              </li>
              <li>
                <a>Бүх бараа үзэх</a>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </header>
  );
}
function Loader() {
  return (
    <header className="sticky z-40 w-full bg-primary shadow-md">
      <div className="container mx-auto max-w-7xl">
        <div className="grid h-16 grid-cols-[1fr_auto] items-center sm:grid-cols-[0.3fr_1.4fr_0.3fr]">
          <div className="skeleton h-1/2 w-1/5 sm:w-3/5"></div>
          <div className="hidden h-full w-full grid-cols-3 place-items-center sm:grid">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="skeleton h-1/2 w-3/5"></div>
            ))}
          </div>
          <div className="flex w-full justify-end">
            <div className="skeleton h-8 w-8" />
          </div>
        </div>
      </div>
    </header>
  );
}
