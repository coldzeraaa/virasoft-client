'use client';

import { Menu, ShoppingBasket, UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import location from '../icons/location.png';
import mail from '../icons/mail.png';
import phone from '../icons/phone.png';

import bsent from '@/components/icons/bsent-logo-white.png';
import { useAllMenusQuery } from '@/gql/query/menu/list.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';
import { useAuth } from '@/lib/context/auth-context';
import { useCurrentOrder } from '@/lib/context/current-order-context';
export function Header() {
  const { data } = useAllMenusQuery({ variables: { filter: { title: { in: ['header', 'footer'] } } } });
  const { order, loading: orderLoading } = useCurrentOrder();
  const { data: meData } = useMeQuery();
  const { logout } = useAuth();

  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 mb-4 w-full shadow-md md:mb-20">
      <div className="h-12 bg-base-100">
        <div className="container hidden h-full w-full items-center justify-end gap-4 text-xs text-primary md:flex">
          <Link href="/tel:+97680234-566" className="flex gap-2 hover:cursor-pointer">
            <Image src={phone} alt="Утсаар залгах" />
            +976 7000 0000
          </Link>
          <Link href="mailto://info@bsent.mn" className="flex gap-2 hover:cursor-pointer">
            <Image src={mail} alt="И-мэйл хаяг" />
            info@bsent.mn
          </Link>
          <Link href="/location" className="flex gap-2 hover:cursor-pointer">
            <Image src={location} alt="Дэлгүүрийн байршил" />
            Дэлгүүрийн байршил
          </Link>
        </div>
        <div className="bg-primary">
          <div className="container flex h-16 w-full items-center justify-between gap-4 sm:gap-8 md:gap-12 xl:gap-20">
            <Link href="/" className="mr-3 flex flex-shrink-0 items-center">
              <Image className="h-8 w-auto" src={bsent} alt="Company Logo" width={32} height={42} priority />
            </Link>
            <ul className="hidden w-full items-center justify-center text-sm text-base-100 sm:gap-4 md:flex md:gap-7 lg:gap-10 xl:gap-20">
              {data?.currentWebsite?.menus.nodes[1]?.children
                ?.filter((menu) => menu.title != 'Дэлгэрэнгүй')
                .map((menuTitle, idx) => (
                  <li key={idx}>
                    <Link href={menuTitle.link} className="group relative">
                      <span>{menuTitle.title}</span>
                      <span
                        className={`absolute -bottom-1 left-0 h-[1px] bg-base-100 transition-all ${pathname === menuTitle.link ? 'w-full' : 'w-0 group-hover:w-full'}`}
                      ></span>
                    </Link>
                  </li>
                ))}
            </ul>
            <div className="flex justify-end gap-2">
              <div className="dropdown dropdown-end dropdown-hover">
                <div tabIndex={0} role="button" className="h-fit w-fit rounded-full text-[10px] text-primary-content">
                  <Menu className="h-5 w-5 stroke-primary-content stroke-2" />
                  Цэс
                </div>
                <ul tabIndex={0} className="menu dropdown-content z-[1] w-64 rounded-box bg-primary-content p-2 shadow">
                  {data?.currentWebsite?.menus?.nodes[1]?.children
                    ?.filter((menuTitle) => menuTitle.title === 'Дэлгэрэнгүй')
                    .map((menuItem, idx) => (
                      <li key={idx}>
                        {menuItem.children
                          ?.filter((subMenu) => (meData?.me?.id ? true : !['Миний самбар', 'Гарах'].includes(subMenu.title)))
                          .map((subMenu, subMenuIdx) => (
                            <Link key={subMenuIdx} href={subMenu.link}>
                              {subMenu.title}
                            </Link>
                          ))}
                      </li>
                    ))}
                </ul>
              </div>
              {!meData?.me?.id ? (
                <Link
                  href="/auth/login"
                  className="montserrat flex h-fit w-fit flex-col items-center justify-center rounded-full text-[10px] text-primary-content"
                >
                  <UserRound className="h-5 w-5 stroke-primary-content stroke-2" />
                  Нэвтрэх
                </Link>
              ) : (
                <div className="dropdown dropdown-end dropdown-hover">
                  <div tabIndex={0} role="button" className="h-fit w-fit rounded-full text-[10px] text-primary-content">
                    <Link
                      href="/account"
                      className="montserrat flex h-fit w-fit flex-col items-center justify-center rounded-full text-[10px] text-primary-content"
                    >
                      <UserRound className="h-5 w-5 stroke-primary-content stroke-2" />
                      {meData.me.firstName}
                    </Link>
                  </div>
                  <ul tabIndex={0} className="menu dropdown-content z-[1] w-64 rounded-box bg-primary-content p-2 shadow">
                    <li>
                      <Link href="/account">Миний самбар</Link>
                      <Link href="/account/orders">Миний захиалгууд</Link>
                      <button type="button" onClick={logout}>
                        Гарах
                      </button>
                    </li>
                  </ul>
                </div>
              )}
              <Link
                href="/checkout"
                className="montserrat relative flex h-fit w-fit flex-col items-center justify-center rounded-full text-[10px] text-primary-content"
              >
                {order?.itemCount !== undefined && order?.itemCount !== 0 && (
                  <div className="badge badge-secondary badge-xs absolute right-0 top-0 py-2">
                    {order?.itemCount}
                    {orderLoading && <div className="loading loading-ring w-3"></div>}
                  </div>
                )}
                <ShoppingBasket className="h-5 w-5 stroke-primary-content stroke-2" />
                Сагс
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
