import { ReactElement } from 'react';

import Link from 'next/link';

const SideBarItem = (props: CardDataType) => (
  <Link href={props.link} className="flex items-center gap-2 text-gray-500  hover:text-neutral">
    <div className="">{props.icon}</div>
    <p className="text-lg ">{props.text}</p>
  </Link>
);

interface CardDataType {
  icon: ReactElement;
  text: string;
  link: string;
}

export default SideBarItem;
