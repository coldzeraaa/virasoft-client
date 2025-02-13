'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import location from '../icons/location.png';
import mail from '../icons/mail.png';
import phone from '../icons/phone.png';

import bsent from '@/components/icons/bsent-logo-white.png';
export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full shadow-md">
      <div className="h-12 bg-primary-content">
        <div className="container flex h-full w-full max-w-7xl items-center justify-end gap-4 bg-primary-content text-xs text-primary">
          <Link href="/tel:+97680234-566" className="flex gap-2 hover:cursor-pointer">
            <Image src={phone} alt="Утсаар залгах" />
            +976 7000 0000
          </Link>
          <Link href="/mailto://info@bsent.mn" className="flex gap-2 hover:cursor-pointer">
            <Image src={mail} alt="И-мэйл хаяг" />
            info@bsent.mn
          </Link>
          <Link href="/location" className="flex gap-2 hover:cursor-pointer">
            <Image src={location} alt="Дэлгүүрийн байршил" />
            Дэлгүүрийн байршил
          </Link>
        </div>
        <div className="bg-primary">
          <div className="container grid h-16 w-full max-w-7xl grid-cols-[1fr_auto] sm:grid-cols-[0.3fr_1.4fr_0.3fr]">
            <Link href="/" className="mr-3 flex flex-shrink-0 items-center">
              <Image className="h-8 w-auto" src={bsent} alt="Company Logo" width={32} height={42} priority />
            </Link>
            <ul className="flex w-full items-center justify-center text-sm text-primary-content">
              {data?.allMenus?.nodes[0]?.children?.filter((child) => child.title != 'Дэлгэрэнгүй')}
            </ul>
            <details className="dropdown dropdown-end dropdown-bottom flex h-full w-full items-center">
              <summary className="flex w-full items-center justify-end hover:cursor-pointer">
                <Menu className="stroke-primary-content" />
              </summary>
              <ul tabIndex={0} className="menu dropdown-content z-[1] w-52 rounded-box bg-base-100 p-2 shadow">
                <li>
                  <Link href="/auth/login">Нэвтрэх</Link>
                </li>
                <li>
                  <Link href="/auth/register">Бүтгүүлэх</Link>
                </li>
              </ul>
            </details>
          </div>
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
