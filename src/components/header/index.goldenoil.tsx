'use client';

import { Menu, ShoppingBasket, UserRound } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import location from '../icons/location.png';
import mail from '../icons/mail.png';
import phone from '../icons/phone.png';

import logo from '@/components/icons/logo.svg';
import { useAllMenusQuery } from '@/gql/query/menu/list.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';
import { useAuth } from '@/lib/context/auth-context';
import { useCurrentOrder } from '@/lib/context/current-order-context';
export function Header() {
  const { data } = useAllMenusQuery({ variables: { filter: { title: { in: ['header', 'footer'] } } } });
  const { order, loading: orderLoading } = useCurrentOrder();
  const { data: meData } = useMeQuery();
  const { logout } = useAuth();

  return (
    <header className="mb-20 w-full shadow-md">
      <div className="h-12 bg-primary-content">
        <div className="container flex h-full w-full items-center justify-end gap-4 bg-primary-content text-xs text-primary">
          <Link href="/tel:+97680234-566" className="flex gap-2 hover:cursor-pointer">
            <Image src={phone} alt="Утсаар залгах" />
            +976 7000 0000
          </Link>
          <Link href="mailto://info@bsent.mn" className="flex gap-2 hover:cursor-pointer">
            <Image src={mail} alt="И-мэйл хаяг" />
            email@gmail.com
          </Link>
          <Link href="/location" className="flex gap-2 hover:cursor-pointer">
            <Image src={location} alt="Дэлгүүрийн байршил" />
            Дэлгүүрийн байршил
          </Link>
        </div>
        <div className="bg-primary  ">
          <div className="container flex h-16 w-full items-center justify-end gap-24">
            <Link href="/" className="mr-3 flex flex-shrink-0 items-center">
              <Image className="h-8 w-auto" src={logo} alt="Company Logo" width={32} height={42} priority />
            </Link>
            <ul className="flex w-full items-center justify-end gap-10 text-sm text-primary-content">
              {data?.currentWebsite?.menus.nodes[1]?.children
                ?.filter((menu) => menu.title != 'Дэлгэрэнгүй')
                .map((menuTitle, idx) => (
                  <li key={idx}>
                    <Link href={menuTitle.link}>{menuTitle.title}</Link>
                  </li>
                ))}
            </ul>
            <div className="flex justify-end gap-2">
              <Link href="/checkout" className="relative h-fit w-fit rounded-full bg-primary-content p-2">
                {order?.itemCount !== undefined && order?.itemCount !== 0 && (
                  <div className="badge badge-secondary badge-xs absolute right-0 top-0 py-2">
                    {order?.itemCount}
                    {orderLoading && <div className="loading loading-ring w-3"></div>}
                  </div>
                )}
                <ShoppingBasket className="h-5 w-5 stroke-primary stroke-2" />
              </Link>
              <div className="dropdown dropdown-end dropdown-hover">
                <div tabIndex={0} role="button" className="h-fit w-fit rounded-full bg-primary-content p-2">
                  {meData?.me?.id ? (
                    <UserRound className="h-5 w-5 stroke-primary stroke-2" />
                  ) : (
                    <Menu className="h-5 w-5 stroke-primary stroke-2" />
                  )}
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
                        {!meData?.me?.id ? (
                          <Link key="login" href="/auth/login">
                            Нэвтрэх
                          </Link>
                        ) : (
                          <>
                            <Link key="dashboard" href="/account">
                              Миний самбар
                            </Link>
                            <button key="logout" type="button" onClick={logout}>
                              Гарах
                            </button>
                          </>
                        )}
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
