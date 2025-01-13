import { ReactElement } from 'react';

import Link from 'next/link';

const UserDetailCard = (props: CardDataType) => (
  <Link href={props.link} className="flex h-fit flex-col items-start justify-start gap-1 rounded-md px-4  py-4 shadow-lg    ">
    <div className="text-neutral">{props.icon}</div>
    <h1 className="text-neutral">{props.text}</h1>
    <p className="text-neutral">{props.value}</p>
  </Link>
);

interface CardDataType {
  icon: ReactElement;
  text: string;
  value: string;
  link: string;
}

export default UserDetailCard;
