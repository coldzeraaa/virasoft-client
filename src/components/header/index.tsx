'use client';
import React, { useEffect, useState } from 'react';

import { BellIcon, HeartIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline';
import Cookies from 'js-cookie';
import Image from 'next/image';
import Link from 'next/link';
export function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      window.location.href = `/search?query=${searchQuery}`;
    }
  };
  useEffect(() => {
    const token = Cookies.get('NEXT_USER_TOKEN');
    setIsLoggedIn(!!token);
  }, []);

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
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <MagnifyingGlassIcon className="absolute right-3 top-1.5 h-5 w-5 text-gray-400" />
              </div>
            </div>

            {/* Navigation Items */}
            <nav className="flex items-center text-xs">
              <Link href="/search">
                <button className="flex flex-col items-center rounded-lg p-1 text-neutral transition-colors hover:text-secondary md:hidden lg:p-2">
                  <MagnifyingGlassIcon className="h-5 w-5" />
                </button>
              </Link>
              <Link href={isLoggedIn ? '/notification' : '/auth/login'}>
                <button className="flex flex-col items-center rounded-lg p-1 text-neutral transition-colors hover:text-secondary md:flex lg:p-2">
                  <BellIcon className="h-5 w-5" />
                  <p className="hidden md:block">Мэдэгдэл</p>
                </button>
              </Link>
              <Link href={isLoggedIn ? '/wishlist' : '/auth/login'}>
                <button className="hidden flex-col items-center rounded-lg p-1 text-neutral transition-colors hover:text-secondary md:flex lg:p-2">
                  <HeartIcon className="h-5 w-5" />
                  <p className="hidden md:block">Хадгалсан</p>
                </button>
              </Link>
              <Link href={isLoggedIn ? '/checkout' : '/auth/login'}>
                <button className="flex flex-col items-center rounded-lg p-1 text-neutral transition-colors hover:text-secondary lg:p-2">
                  <ShoppingCartIcon className="h-5 w-5" />
                  <p className="hidden md:block">Сагс</p>
                </button>
              </Link>
              <Link href={isLoggedIn ? '/profile' : '/auth/login'}>
                <button className="hidden flex-col items-center rounded-lg p-1 text-neutral transition-colors hover:text-secondary md:flex lg:p-2">
                  <UserIcon className="h-5 w-5" />
                  <p className="hidden md:block">{isLoggedIn ? 'Профайл' : 'Нэвтрэх'}</p>
                </button>
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
