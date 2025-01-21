import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const PaymentCard = ({ data }) => (
  <div className="flex w-fit items-center  gap-3  rounded-xl border-[1px] border-solid border-gray-200 px-2 py-2 hover:shadow-lg">
    <div className="flex items-center gap-1">
      <div className="flex h-10 w-10 items-center justify-center">
        <Image priority width={800} height={800} src={`${data.logo}`} alt="" />
      </div>
      <div>
        <div className=" text-ls font-medium">{data?.name}</div>
        <div className="text-sm text-gray-400">{data?.description}</div>
      </div>
    </div>
    <div>
      <Link href={`${data?.link}`}>
        <ArrowRight />
      </Link>
    </div>
  </div>
);
interface TData {
  description: string;
  link: string;
  logo: string;
  name: string;
}
export default PaymentCard;
