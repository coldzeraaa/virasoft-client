'use client';
import { ReactElement } from 'react';

import cookies from 'js-cookie';
import { IdCard, ListOrdered, User } from 'lucide-react';
import Link from 'next/link';

import { STORE_KEY_CONFIG } from '@/configs/STORE_KEY_CONFIG';

export function SideBar() {
  return (
    <div className="justify-betwee ml-4 flex  h-full  w-[20%] flex-col shadow-lg">
      <div className="   flex h-full  flex-col gap-4 px-2 py-2 ">
        {sidebarItems.map((element, index) => (
          <SideBarItem key={index} link={element.link} icon={element.icon} text={element.name} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <User className="h-8 w-8" />
        <button
          onClick={() => {
            cookies.remove(STORE_KEY_CONFIG.NEXT_USER_TOKEN);
            window.location.href = '/auth/login';
          }}
          type="button"
          className="btn w-[70%] "
        >
          Гарах
        </button>
      </div>
    </div>
  );
}

const SideBarItem = (props: CardDataType) => (
  <Link href={props.link} className="flex items-center gap-2 text-gray-500  hover:text-neutral">
    {props.icon}
    <p className="text-lg ">{props.text}</p>
  </Link>
);

const sidebarItems = [
  {
    name: 'Миний самбар',
    link: '/account',
    icon: <IdCard />,
  },
  {
    name: 'Захиалгүүд',
    icon: <ListOrdered />,
    link: '/account/orders',
  },
];
interface CardDataType {
  icon: ReactElement;
  text: string;
  link: string;
}
