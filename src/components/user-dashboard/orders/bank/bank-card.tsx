import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PaymentCard = ({ data }) => (
  <Link
    href={data?.link}
    className="flex w-fit items-center  gap-6  rounded-xl border-[1px] border-solid border-gray-200 px-2 py-2 hover:shadow-lg"
  >
    <div className="flex items-center gap-1">
      <div className="flex h-10 w-10 items-center justify-center">
        <Image width={800} height={800} src={`${data.bankIcon}`} alt="" />
      </div>
      <div>
        <div className=" text-ls font-medium">{data.bankName}</div>
        <div className="text-sm text-gray-400">{data.value}</div>
      </div>
    </div>
    <div>
      <ArrowRight />
    </div>
  </Link>
);
export default PaymentCard;
