'use client';

import { useState } from 'react';

import { Search, ShoppingCart, User } from 'lucide-react';
import Link from 'next/link';

import { type MeQuery, useMeQuery } from '@/gql/query/user/me.generated';
import { useCurrentOrder } from '@/lib/context/current-order-context';

export function Header() {
  const { data: userData, loading } = useMeQuery();
  const { order } = useCurrentOrder();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  if (loading) return <div>Түр хүлээнэ үү...</div>;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="mx-auto flex flex-col bg-[#209F48] px-4 py-2 md:flex-row md:items-center md:justify-between">
        {/* Лого + мобайл icon-ууд */}
        <div className="flex w-full items-center justify-between md:w-auto md:gap-8">
          {/* Лого */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white">GM</span>
            </Link>
          </div>

          {/* Мобайл дээрх icon-ууд */}
          <div className="flex items-center gap-4 md:hidden">
            {menuItems(userData).map((item, i) => (
              <Link key={i} href={item.link} className="relative">
                {item.title === 'Сагс' && order?.itemCount !== undefined && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1.5 text-xs text-white">{order.itemCount}</span>
                )}
                {item.icon}
              </Link>
            ))}

            {/* Hamburger */}
            <button aria-label="Toggle menu" className="ml-2" onClick={() => setIsMobileMenuOpen((prev) => !prev)}>
              <div className="flex flex-col gap-1">
                <span className="h-1 w-6 rounded bg-white" />
                <span className="h-1 w-6 rounded bg-white" />
                <span className="h-1 w-6 rounded bg-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Хайлтын хэсэг (зөвхөн md ба түүнээс дээш) */}
        <div className="relative hidden md:ml-6 md:block">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Хайх..."
            className="rounded-full bg-white py-2 pl-10 pr-4 text-sm text-gray-700 shadow-inner focus:outline-none"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>

        {/* Navigation цэс (md ба түүнээс дээш) */}
        <nav className="mt-4 hidden w-full justify-center text-white md:mt-0 md:flex md:items-center">
          <ul className="flex gap-8 text-sm font-medium">
            {menuLinks.map((item, i) => (
              <li key={i}>
                <Link href={item.href} className="transition-colors duration-150 hover:text-green-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Icon-ууд (md ба түүнээс дээш) */}
        <div className="hidden items-center gap-4 md:flex">
          {menuItems(userData).map((item, i) => (
            <Link key={i} href={item.link} className="group relative">
              {item.title === 'Сагс' && order?.itemCount !== undefined && (
                <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1.5 text-xs text-white">{order.itemCount}</span>
              )}
              {item.icon}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="mt-4 w-full space-y-4 bg-[#1C9E48] px-4 py-4 text-white md:hidden">
          {menuLinks.map((item, i) => (
            <Link key={i} href={item.href} className="block text-center text-sm hover:text-green-300">
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

const menuLinks = [
  { label: 'Нүүр хуудас', href: '/' },
  { label: 'Бидний Тухай', href: '/about' },
  { label: 'Тоног төхөөрөмж', href: '/devices' },
  { label: 'Урвалж', href: '/testimonials' },
  { label: 'Оношлуур', href: '/diagnostics' },
  { label: 'Эмнэлэгийн хэрэгсэл', href: '/medical-equipment' },
];

function menuItems(userData: MeQuery | undefined) {
  return [
    {
      title: 'Сагс',
      link: '/checkout',
      icon: <ShoppingCart className="h-6 w-6 text-white transition group-hover:text-green-300" />,
    },
    {
      title: 'Профайл',
      link: userData?.me ? '/account' : '/auth/login',
      icon: <User className="h-6 w-6 text-white transition group-hover:text-green-300" />,
    },
  ];
}
