import { ReactElement } from 'react';

import Link from 'next/link';

export default function UserDetailCard(props: CardDataType) {
  return (
    <Link href={props.link} className="flex h-fit  items-center  justify-start gap-1 gap-4 rounded-md px-4  py-4 shadow-lg    ">
      <div className="text-base">{props.icon}</div>
      <div className="flex flex-col justify-center">
        <h1 className="text-base">{props.text}</h1>
        <p className="text-base">{props.value}</p>
      </div>
    </Link>
  );
}

interface CardDataType {
  icon: ReactElement;
  text: string;
  value: string;
  link: string;
}
