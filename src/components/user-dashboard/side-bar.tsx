import { Eye, Heart, IdCard, ListOrdered, User } from 'lucide-react';

import SideBarItem from './side-bar-item';

const SideBar = () => (
  <div className=" ml-4  flex h-full w-[20%] flex-col gap-4 px-2 py-2 shadow-lg">
    {SidebarItems.map((element, index) => (
      <SideBarItem key={index} link={element.link} icon={element.icon} text={element.name} />
    ))}
  </div>
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

export default SideBar;
