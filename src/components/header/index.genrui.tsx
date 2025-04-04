'use client';

import { Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import logo from '@/components/icons/logo.svg';
import { type MeQuery, useMeQuery } from '@/gql/query/user/me.generated';
import { useCurrentOrder } from '@/lib/context/current-order-context';

// 📌 Бүтээгдэхүүний карт (ProductCard) компонент
export function ProductCard({ product }: { product: { name: string; phone: string } }) {
  return (
    <div className="w-full rounded-lg bg-green-500 p-4 text-white shadow-lg">
      <div className="flex justify-between">
        <span>MN</span>
        <span>EN</span>
      </div>
      <div className="mt-4 text-center">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm">Утас: {product.phone}</p>
      </div>
    </div>
  );
}

export function Header() {
  const { data: userData, loading } = useMeQuery();
  const { order, loading: orderLoading } = useCurrentOrder();
  const router = useRouter();

  if (loading) return <Loader />;

  return (
    <header className="sticky top-0 z-40 w-full bg-base-100 shadow-md">
      <div className="container flex flex-col items-center bg-[#209F48]">
        <div className="mt-4 flex h-full w-full items-center justify-between">
          <Link href="/" className="mr-3 flex flex-shrink-0 items-center">
            <Image className="h-8 w-auto" src={logo} alt="Company Logo" width={32} height={42} priority />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-4 md:justify-between">
          <div className="relative hidden max-w-xs flex-1 md:block">
            <input
              type="text"
              className="w-full rounded-lg border bg-white px-4 text-neutral placeholder-gray-400 focus:outline-none"
              placeholder="Бүтээгдэхүүн хайх..."
              onKeyDown={(event) => {
                if (event.key === 'Enter') router.push('/s');
              }}
            />
            <Search className="strokeblack-400 absolute right-3 top-1.5 h-5 w-5" />
          </div>

          <nav className="flex items-center gap-2 text-xs">
            <ul className="flex">
              {menuItems(userData).map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className={`group relative flex flex-col items-center rounded-lg p-1 text-base-content transition-colors 
                      ${item.title === 'Хадгалсан' || item.title === 'Профайл' ? 'hidden md:flex' : 'md:flex'} 
                      lg:p-2`}
                >
                  {item.title === 'Сагс' && order?.itemCount !== undefined && (
                    <div className="badge badge-secondary badge-xs absolute right-0 top-0 py-2">
                      {order?.itemCount}
                      {orderLoading && <div className="loading loading-ring w-3"></div>}
                    </div>
                  )}
                  {item.icon}
                  <li className="group hidden hover:shadow-lg group-hover:scale-110 group-hover:text-green-500 md:block">
                    {item.title === 'Профайл' ? (userData?.me ? userData?.me.firstName : 'Нэвтрэх') : item.title}
                  </li>
                </Link>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="container mt-4 flex justify-around border-t py-4">
        {/* Холбоосууд */}
        <Link href="/" className="text-black-600 text-sm transition-colors duration-200 hover:text-green-500">
          Нүүр хуудас
        </Link>
        <Link href="/about" className="text-black-600 text-sm hover:text-green-500">
          Бидний Тухай
        </Link>
        <Link href="/devices" className="text-black-600 text-sm hover:text-green-500">
          Тоног төхөөрөмж
        </Link>
        <Link href="/testimonials" className="text-black-600 text-sm hover:text-green-500">
          Урвалж
        </Link>
        <Link href="/diagnostics" className="text-black-600 text-sm hover:text-green-500">
          Оношлуур
        </Link>
        <Link href="/medical-equipment" className="text-black-600 text-sm hover:text-green-500">
          Эмнэлэгийн хэрэгсэл
        </Link>
      </div>
    </header>
  );
}

function Loader() {
  return (
    <header className="z-40 w-full bg-base-100 shadow-md">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="skeleton h-8 w-8 rounded-full bg-base-300" />
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="skeleton h-8 w-8 rounded bg-base-300" />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function menuItems(userData: MeQuery | undefined) {
  return [
    {
      title: 'Сагс',
      link: '/checkout',
      icon: (
        <ShoppingCart className="h-5 w-5 stroke-1 text-base-content group-hover:scale-110 group-hover:text-green-500 group-hover:shadow-lg" />
      ),
    },
    {
      title: 'Профайл',
      link: userData?.me ? '/account' : '/auth/login',
      icon: <User className="h-5 w-5 stroke-1 text-base-content group-hover:scale-110 group-hover:text-green-500 group-hover:shadow-lg" />,
    },
  ];
}
