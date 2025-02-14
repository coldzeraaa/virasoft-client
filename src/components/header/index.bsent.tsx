'use client';

import { Menu, ShoppingBasket, UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import location from '../icons/location.png';
import mail from '../icons/mail.png';
import phone from '../icons/phone.png';

import bsent from '@/components/icons/bsent-logo-white.png';
import { useAllMenusQuery } from '@/gql/query/menu/list.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';
export function Header() {
  const { data } = useAllMenusQuery({ variables: { filter: { title: { in: ['header', 'footer'] } } } });
  const { data: meData } = useMeQuery();

  return (
    <header className="mb-20 w-full shadow-md">
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
          <div className="container flex h-16 w-full max-w-7xl items-center justify-between gap-24">
            <Link href="/" className="mr-3 flex flex-shrink-0 items-center">
              <Image className="h-8 w-auto" src={bsent} alt="Company Logo" width={32} height={42} priority />
            </Link>
            <ul className="flex w-full items-center justify-between text-sm text-primary-content">
              {data?.currentWebsite?.menus.nodes[1].children
                ?.filter((menu) => menu.title != 'Дэлгэрэнгүй')
                .map((menuTitle, idx) => (
                  <li key={idx}>
                    <Link href={menuTitle.link}>{menuTitle.title}</Link>
                  </li>
                ))}
            </ul>
            <div className="flex justify-end gap-2">
              <div className="h-fit w-fit rounded-full bg-primary-content p-2">
                <ShoppingBasket className="h-5 w-5 stroke-primary stroke-2" />
              </div>
              <div className="dropdown dropdown-end dropdown-hover">
                <div tabIndex={0} role="button" className="h-fit w-fit rounded-full bg-primary-content p-2">
                  {meData?.me?.id ? (
                    <UserRound className="h-5 w-5 stroke-primary stroke-2" />
                  ) : (
                    <Menu className="h-5 w-5 stroke-primary stroke-2" />
                  )}
                </div>
                <ul tabIndex={0} className="menu dropdown-content z-[1] w-64 rounded-box bg-primary-content p-2 shadow">
                  {data?.currentWebsite?.menus?.nodes[1].children
                    ?.filter((menuTitle) => menuTitle.title === 'Дэлгэрэнгүй')
                    .map((menuItem, idx) => (
                      <li key={idx}>
                        {menuItem.children
                          ?.filter((subMenu) => (meData?.me?.id ? true : !['Миний самбар', 'Гарах'].includes(subMenu.title)))
                          .map((subMenu, subMenuIdx) => (
                            <Link
                              key={subMenuIdx}
                              href={subMenu.title === 'Нэвтрэх' ? (meData?.me?.id ? '/account' : 'auth/login') : subMenu.link}
                            >
                              {subMenu.title === 'Нэвтрэх' ? (meData?.me?.id ? 'Миний самбар' : 'Нэвтрэх') : subMenu.title}
                            </Link>
                          ))}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
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
