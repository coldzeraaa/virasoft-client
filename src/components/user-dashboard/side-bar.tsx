import { ReactElement } from 'react';

import { Eye, Heart, IdCard, ListOrdered, User } from 'lucide-react';
import Link from 'next/link';

const SideBar = () => (
  <div className=" ml-4  flex h-full w-[20%] flex-col gap-4 px-2 py-2 shadow-lg">
    {SidebarItems.map((element, index) => (
      <SideBarItem key={index} link={element.link} icon={element.icon} text={element.name} />
    ))}
  </div>
);

const SideBarItem = (props: CardDataType) => (
  <Link href={props.link} className="flex items-center gap-2 text-gray-500  hover:text-neutral">
    <div className="">{props.icon}</div>
    <p className="text-lg ">{props.text}</p>
  </Link>
);

const SidebarItems = [
  {
    name: 'Миний самбар',
    link: '/user/dashboard/user-detail',
    icon: <IdCard />,
  },
  {
    name: 'Таалагдсан',
    link: ' ',
    icon: <Heart />,
  },
  {
    name: 'Хувийн мэдээлэл',
    link: '/account/profile',
    icon: <User />,
  },
  {
    name: 'Үзсэн',
    link: ' ',
    icon: <Eye />,
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

export default SideBar;
