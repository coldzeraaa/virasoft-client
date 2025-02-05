'use client';
import { ReactElement } from 'react';

import { IdCard, ListOrdered, User } from 'lucide-react';
import Link from 'next/link';

import { useAuth } from '@/lib/context/auth-context';

export function SideBar() {
  const { logout } = useAuth();

  return (
    <div className="h-screen-full ml-4 hidden w-1/5 flex-col justify-between rounded-lg bg-base-100 py-3 shadow-lg md:flex">
      <div className="flex h-full w-full flex-col gap-4 px-6 py-4">
        {sidebarItems.map((element, index) => (
          <SideBarItem key={index} link={element.link} icon={element.icon} text={element.name} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <User className="h-8 w-8" />
        <button onClick={logout} type="button" className="btn w-[70%] ">
          Гарах
        </button>
      </div>
    </div>
  );
}

const SideBarItem = (props: CardDataType) => (
  <Link href={props.link} className="flex items-center gap-2 rounded-lg p-2 text-neutral-content hover:bg-base-300 hover:text-neutral">
    {props.icon}
    <p className="text-lg">{props.text}</p>
  </Link>
);

const sidebarItems = [
  {
    name: 'Миний самбар',
    link: '/account',
    icon: <IdCard />,
  },
  {
    name: 'Захиалгууд',
    icon: <ListOrdered />,
    link: '/account/orders',
  },
];
interface CardDataType {
  icon: ReactElement;
  text: string;
  link: string;
}
