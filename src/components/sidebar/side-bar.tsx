'use client';
import { ReactElement } from 'react';

import { IdCard, ListOrdered, User } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { STORE_KEY_CONFIG } from '@/configs/STORE_KEY_CONFIG';

export function SideBar() {
  const router = useRouter();
  return (
    <div className="ml-4 hidden h-full w-1/5 flex-col justify-between rounded-lg bg-base-100 shadow-lg md:flex">
      <div className="flex h-full w-full flex-col gap-4 px-6 py-4">
        {sidebarItems.map((element, index) => (
          <SideBarItem key={index} link={element.link} icon={element.icon} text={element.name} />
        ))}
      </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <User className="h-8 w-8" />
        <button
          onClick={() => {
            localStorage.removeItem(STORE_KEY_CONFIG.NEXT_USER_TOKEN);
            router.push('/api/auth/logout');
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
