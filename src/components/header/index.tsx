'use client';

import { Bell, Heart, Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { ThemeToggleButton } from './theme-toggle-button';

import { useMeQuery } from '@/gql/query/user/me.generated';
import { useCurrentOrder } from '@/lib/context/current-order-context';

export function Header() {
  const { data: userData, loading } = useMeQuery();
  const { order, loading: orderLoading } = useCurrentOrder();

  const router = useRouter();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      router.push('/s');
    }
  };

  const menuItems = [
    {
      title: 'Мэдэгдэл',
      link: '/notifications',
      hideWhenNotLoggedIn: true,
      icon: <Bell className="h-5 w-5 stroke-1 text-base-content group-hover:text-secondary" />,
    },
    {
      title: 'Хайлт',
      link: '/search',
      mobileOnly: true,
      icon: <Search className="h-5 w-5 stroke-1 text-base-content group-hover:text-secondary" />,
    },
    {
      title: 'Хадгалсан',
      link: '/saved',
      icon: <Heart className="h-5 w-5 stroke-1 text-base-content group-hover:text-secondary" />,
    },
    {
      title: 'Сагс',
      link: '/cart',
      icon: <ShoppingCart className="h-5 w-5 stroke-1 text-base-content group-hover:text-secondary" />,
    },
    {
      title: 'Профайл',
      link: userData?.me ? '/account' : '/auth/login',
      icon: <User className="h-5 w-5 stroke-1 text-base-content group-hover:text-secondary" />,
    },
  ];

  if (loading) {
    return (
      <header className="z-40 w-full bg-base-100 shadow-md">
        <div className="container mx-auto max-w-7xl">
          <div className="flex h-16 items-center justify-between">
            <div className="skeleton h-8 w-8 rounded-full bg-base-content" />
            <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="skeleton h-8 w-8 rounded bg-base-content" />
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="z-40 w-full bg-base-100 shadow-md">
      <div className="container max-w-7xl">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="mr-3 flex flex-shrink-0 items-center">
            <Image
              className="h-8 w-auto"
              src="https://upload.wikimedia.org/wikipedia/en/9/92/Chanel_logo_interlocking_cs.svg"
              alt="Company Logo"
              width={32}
              height={42}
              priority
            />
          </Link>

          <div className="flex flex-1 items-center justify-end gap-4 md:justify-between">
            <div className="relative hidden max-w-xs flex-1 md:block">
              <input
                type="text"
                className="w-full rounded-full border border-base-content px-4 py-1 text-neutral focus:outline-none"
                placeholder="Бүтээгдэхүүн хайх..."
                onKeyDown={handleKeyDown}
              />
              <Search className="absolute right-3 top-1.5 h-5 w-5 stroke-1 text-gray-400" />
            </div>

            <nav className="flex items-center gap-2 text-xs">
              <ThemeToggleButton />
              <ul className="flex">
                {menuItems
                  .filter((item) => !(item.title === 'Мэдэгдэл' && !userData?.me) && (item.title !== 'Хайлт' || item.mobileOnly))
                  .map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
                      className={`group relative flex flex-col items-center rounded-lg p-1 text-base-content transition-colors ${
                        item.title === 'Хадгалсан' || item.title === 'Профайл' ? 'hidden md:flex' : 'md:flex'
                      } lg:p-2`}
                    >
                      {item.title === 'Сагс' && order?.itemCount !== undefined && (
                        <div className="badge badge-secondary badge-xs absolute right-0 top-0 py-2">
                          {order?.itemCount}
                          {orderLoading && <div className="loading loading-ring w-3"></div>}
                        </div>
                      )}
                      {item.icon}
                      <li className="hidden group-hover:text-secondary md:block">
                        {item.title === 'Профайл' ? (userData?.me ? userData?.me.firstName : 'Нэвтрэх') : item.title}
                      </li>
                    </Link>
                  ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
