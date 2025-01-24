import { ReactElement } from 'react';

import { IdCard, ListOrdered } from 'lucide-react';
import Link from 'next/link';

export function SideBar() {
  return (
    <div className=" ml-4  flex h-full w-[20%] flex-col gap-4 px-2 py-2 shadow-lg">
      {sidebarItems.map((element, index) => (
        <SideBarItem key={index} link={element.link} icon={element.icon} text={element.name} />
      ))}
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
