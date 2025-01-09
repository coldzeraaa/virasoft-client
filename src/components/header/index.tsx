'use client';
import React from 'react';

import { BellIcon, HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

import { useMeQuery } from '@/gql/query/user/me.generated';
export function Header() {
  const { data: userData, loading } = useMeQuery();

  if (loading) {
    return (
      <header className="z-40 w-full bg-white shadow-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="h-8 w-8 animate-pulse rounded-full bg-gray-200" />
            <div className="flex gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 w-8 animate-pulse rounded bg-gray-200" />
              ))}
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="z-40 w-full bg-white shadow-md">
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
            <nav className="flex items-center text-xs">
              <Link
                href="/search"
                className="flex flex-col items-center rounded-lg p-1 text-neutral transition-colors hover:text-secondary md:hidden lg:p-2"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </Link>
              {Boolean(userData?.me) && (
                <Link
                  href={userData?.me ? '/notification' : '/auth/login'}
                  className="flex flex-col items-center rounded-lg p-1 text-neutral transition-colors hover:text-secondary md:flex lg:p-2"
                >
                  <BellIcon className="h-5 w-5" />
                  <p className="hidden md:block">Мэдэгдэл</p>
                </Link>
              )}
              <Link
                href={userData?.me ? '/wishlist' : '/auth/login'}
                className="hidden flex-col items-center rounded-lg p-1 text-neutral transition-colors hover:text-secondary md:flex lg:p-2"
              >
                <HeartIcon className="h-5 w-5" />
                <p className="hidden md:block">Хадгалсан</p>
              </Link>
              <Link
                href={userData?.me ? '/checkout' : '/auth/login'}
                className="hidden flex-col items-center rounded-lg p-1 text-neutral transition-colors hover:text-secondary md:flex lg:p-2"
              >
                <ShoppingCartIcon className="h-5 w-5" />
                <p className="hidden md:block">Сагс</p>
              </Link>
              <Link
                href={userData?.me ? '/profile' : '/auth/login'}
                className="hidden flex-col items-center rounded-lg p-1 text-neutral transition-colors hover:text-secondary md:flex lg:p-2"
              >
                <UserIcon className="h-5 w-5" />
                <p className="hidden md:block">{userData?.me ? 'Профайл' : 'Нэвтрэх'}</p>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
