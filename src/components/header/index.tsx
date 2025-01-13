'use client';
import React from 'react';

import { BellIcon, HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

import { ThemeToggleButton } from './theme-toggle-button';

import { useMeQuery } from '@/gql/query/user/me.generated';
export function Header() {
  const { data: userData, loading } = useMeQuery();

  if (loading) {
    return (
      <header className="z-40 w-full bg-base-100 shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="h-8 w-8 animate-pulse rounded-full bg-base-content" />
            <div className="flex gap-4">
              {[1, 2, 3].map((i) => (
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
          {/* Logo */}
          <div className="mr-3 flex flex-shrink-0 items-center">
            <Link href="/">
              <Image
                className="h-8 w-auto"
                src="https://upload.wikimedia.org/wikipedia/en/9/92/Chanel_logo_interlocking_cs.svg"
                alt="Company Logo"
                width={32}
                height={32}
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="flex flex-1 items-center justify-end gap-4 md:justify-between">
            {/* Search Bar */}
            <div className="hidden max-w-xs flex-1 md:block">
              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-full border border-base-content px-4 py-1 text-neutral focus:outline-none"
                  placeholder="Бүтээгдэхүүн хайх..."
                />
                <MagnifyingGlassIcon className="absolute right-3 top-1.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex items-center gap-2 text-xs">
              <ThemeToggleButton />
              <ul className="flex">
                {links
                  .filter((item) => !(item.text === 'Мэдэгдэл' && !userData?.me))
                  .map((item, index) => (
                    <Link
                      key={index}
                      href={userData?.me ? item.href : '/auth/login'}
                      className={`flex flex-col items-center rounded-lg p-1 text-base-content transition-colors hover:text-secondary ${item.linkClassName} lg:p-2`}
                    >
                      <item.icon className="h-5 w-5 text-base-content" />
                      <li className={item.elementClassName}>
                        {item.text === 'Профайл' ? (userData?.me ? item.text : 'Нэвтрэх') : item.text}
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

const links = [
  { href: '/search', text: 'Хайлт', icon: MagnifyingGlassIcon, linkClassName: 'md:hidden', elementClassName: 'hidden md:block' },
  { href: '/notification', text: 'Мэдэгдэл', icon: BellIcon, linkClassName: 'md:flex', elementClassName: 'hidden md:block' },
  { href: '/wishlist', text: 'Хадгалсан', icon: HeartIcon, linkClassName: 'hidden md:flex', elementClassName: 'hidden md:block' },
  { href: '/checkout', text: 'Сагс', icon: ShoppingCartIcon, linkClassName: 'md:flex', elementClassName: 'hidden md:block' },
  { href: '/profile', text: 'Профайл', icon: UserIcon, linkClassName: 'hidden md:flex', elementClassName: 'hidden md:block' },
];
