'use client';
import React from 'react';

import { Bell, Heart, Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { ThemeToggleButton } from './theme-toggle-button';

import { useHeaderFooterQuery } from '@/gql/query/menu/header-footer.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';

export function Header() {
  const { data: userData, loading } = useMeQuery();
  const { data: menuData } = useHeaderFooterQuery({
    variables: { filter: { title: { in: ['header', 'footer'] } } },
  });

  if (loading) {
    return (
      <header className="z-40 w-full bg-base-100 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="h-8 w-8 animate-pulse rounded-full bg-base-content" />
            <div className="flex gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-8 w-8 animate-pulse rounded bg-base-content" />
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="z-40 w-full bg-base-100 shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
              />
              <Search className="absolute right-3 top-1.5 h-5 w-5 stroke-1 text-gray-400" />
            </div>

            <nav className="flex items-center gap-2 text-xs">
              <ThemeToggleButton />
              <ul className="flex">
                {menuData?.menus?.nodes[0]?.children
                  ?.filter((item) => !(item.title === 'Мэдэгдэл' && !userData?.me))
                  .map((item, index) => (
                    <Link
                      key={index}
                      href={userData?.me ? item.link : '/auth/login'}
                      className={`flex flex-col items-center rounded-lg p-1 text-base-content transition-colors hover:text-secondary ${['Профайл', 'Хадгалсан'].includes(item.title) ? 'hidden md:flex' : ['Хайлт'].includes(item.title) ? 'md:hidden' : 'md:flex'} lg:p-2`}
                    >
                      {iconMapping[item.title as MenuTitle]}
                      <li className="hidden md:block">{item.title === 'Профайл' ? (userData?.me ? 'Профайл' : 'Нэвтрэх') : item.title}</li>
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

type MenuTitle = 'Профайл' | 'Сагс' | 'Хадгалсан' | 'Мэдэгдэл' | 'Хайлт';
const iconMapping: Record<MenuTitle, JSX.Element> = {
  Профайл: <User className="h-5 w-5 stroke-1 text-base-content" />,
  Сагс: <ShoppingCart className="h-5 w-5 stroke-1 text-base-content" />,
  Хадгалсан: <Heart className="h-5 w-5 stroke-1 text-base-content" />,
  Мэдэгдэл: <Bell className="h-5 w-5 stroke-1 text-base-content" />,
  Хайлт: <Search className="h-5 w-5 stroke-1 text-base-content" />,
};
