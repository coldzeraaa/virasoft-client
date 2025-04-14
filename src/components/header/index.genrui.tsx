'use client';

import { useState } from 'react';

import { Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import logo11 from '../../../public/public/virasoft/logo 11..png';

import { type MeQuery, useMeQuery } from '@/gql/query/user/me.generated';
import { useCurrentOrder } from '@/lib/context/current-order-context';

export function Header() {
  const { data: userData, loading } = useMeQuery();
  const { order } = useCurrentOrder();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  if (loading) return <div>Түр хүлээнэ үү...</div>;

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top bar */}
      <div className="flex items-center justify-between bg-gradient-to-r from-[#77AE09] to-[#088933] px-4 py-2 text-sm text-white">
        <span className="hidden md:inline">EN/MN</span>
        <span className="mx-auto text-sm font-semibold tracking-wide md:pl-20">Жэнруй Монгол тавтай морил</span>
        <span className="hidden md:inline">Холбоо барих: +976 9904-5328</span>
      </div>

      {/* Main header */}
      <div className="flex flex-col bg-[#CBCBCB] px-4 py-2 md:flex-row md:items-center md:justify-between">
        {/* Mobile Top Row */}
        <div className="flex w-full items-center justify-between md:hidden">
          {/* Mobile: Left - search toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white"
            >
              <Search className="text-gray-600" size={18} />
            </button>
          </div>

          {/* Mobile: Centered logo */}
          <Link href="/" className="flex justify-center">
            <Image src={logo11} alt="Logo" width={40} height={40} priority />
          </Link>

          {/* Mobile: Right - icons + hamburger */}
          <div className="flex items-center gap-4">
            {menuItems(userData).map((item, i) => (
              <Link key={i} href={item.link} className="group relative">
                {item.title === 'Сагс' && order?.itemCount !== undefined && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1.5 text-xs text-white">{order.itemCount}</span>
                )}
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-t from-[#088933] to-[#77AE09] text-white group-hover:border-2 group-hover:border-[#088933] group-hover:text-green-300">
                  {item.icon}
                </div>
              </Link>
            ))}

            {/* Hamburger button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="group flex h-8 w-8 items-center justify-center space-y-1 rounded-full bg-gradient-to-t from-[#088933] to-[#77AE09] hover:bg-[#088933]"
              aria-label="Цэс нээх"
            >
              <span className="h-0.5 w-5 rounded-full bg-white transition-all group-hover:bg-green-300" />
              <span className="h-0.5 w-5 rounded-full bg-white transition-all group-hover:bg-green-300" />
              <span className="h-0.5 w-5 rounded-full bg-white transition-all group-hover:bg-green-300" />
            </button>
          </div>
        </div>

        {/* Desktop: Full row with logo, search toggle, icons */}
        <div className="hidden w-full items-center justify-between md:flex">
          {/* Left: Search icon + input */}
          <div className="relative flex items-center gap-2">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow"
            >
              <Search className="text-gray-600" size={18} />
            </button>

            {isSearchOpen && (
              <div className="relative w-[250px] transition-all duration-200">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Хайх..."
                  className="w-full rounded-full bg-white py-2 pl-10 pr-4 text-sm text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-green-300"
                />
              </div>
            )}
          </div>

          {/* Center: Logo */}
          <div className="flex flex-1 justify-center">
            <Link href="/" className="flex items-center gap-2">
              <Image src={logo11} alt="Logo" width={40} height={40} priority />
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex justify-end gap-4">
            {menuItems(userData).map((item, i) => (
              <Link
                key={i}
                href={item.link}
                className="group relative bg-gradient-to-t from-[#088933] to-[#77AE09] p-2 hover:border-[#088933] hover:bg-[#088933]"
              >
                {item.title === 'Сагс' && order?.itemCount !== undefined && (
                  <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-1.5 text-xs text-white">{order.itemCount}</span>
                )}
                <div className="h-6 w-6 text-white group-hover:border-2 group-hover:border-[#088933] group-hover:text-green-300">
                  {item.icon}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile: Search bar toggle */}
        {isSearchOpen && (
          <div className="mt-4 md:hidden">
            <div className="relative w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Хайх..."
                className="w-full rounded-full bg-white py-2 pl-10 pr-4 text-sm text-gray-700 shadow focus:outline-none focus:ring-2 focus:ring-green-300"
              />
            </div>
          </div>
        )}
      </div>

      {/* Desktop nav */}
      <nav className="hidden w-full justify-center bg-white py-2 text-sm font-medium text-gray-700 shadow-inner md:flex">
        <ul className="flex gap-4">
          {menuLinks.map((item, i) => (
            <li key={i}>
              <Link href={item.href} className="rounded-full px-4 py-1.5 transition hover:bg-green-100 hover:text-[#1C9E48]">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav */}
      {isMobileMenuOpen && (
        <div className="w-full space-y-4 border-t-4 border-white bg-[#1C9E48] px-4 py-4 text-white md:hidden">
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
      icon: <ShoppingCart size={20} className="text-white transition-all group-hover:text-green-300" />,
    },
    {
      title: 'Профайл',
      link: userData?.me ? '/account' : '/auth/login',
      icon: <User size={20} className="text-white transition-all group-hover:text-green-300" />,
    },
  ];
}
