import { ReactElement } from 'react';

import Link from 'next/link';

const SideBarItem = (props: CardDataType) => (
  <Link href={props.link} className="flex items-center gap-1">
    <div>{props.icon}</div>
    <div>{props.text}</div>
    <div>{props.value}</div>
  </Link>
);

interface CardDataType {
  icon: ReactElement;
  text: string;
  value: string;
  link: string;
}

export default SideBarItem;
