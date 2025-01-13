import { ReactElement } from 'react';

import Link from 'next/link';

const SideBarItem = (props: CardDataType) => (
  <Link href={props.link} className="flex items-center gap-1">
    <p className="text-neutral">{props.icon}</p>
    <p className="text-neutral">{props.text}</p>
    <p>{props.value}</p>
  </Link>
);

interface CardDataType {
  icon: ReactElement;
  text: string;
  value: string;
  link: string;
}

export default SideBarItem;
