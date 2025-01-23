'use client';

import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function PaymentCard({ bankList }: { bankList: BankListType }) {
  return (
    <div className="flex  w-[300px] items-center justify-between  gap-3  rounded-xl border-[1px] border-solid border-gray-200 px-2 py-2 hover:shadow-lg">
      <div className="flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center">
          <Image priority width={800} height={800} src={`${bankList.logo}`} alt="" />
        </div>
        <div>
          {bankList?.name ?? <p className=" text-ls font-medium">{bankList?.name}</p>}
          {bankList?.description ?? <p className="text-sm text-gray-400">{bankList?.description}</p>}
        </div>
      </div>
      <div>
        <Link href={`${bankList?.link}`}>
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export interface BankListType {
  description: string;
  link: string;
  logo: string;
  name: string;
}
