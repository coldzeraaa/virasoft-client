import Link from 'next/link';

import { MyOrderType } from '@/types/my-order-type';

export function OrderInfo({ myOrder }: MyOrderType) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">Төлбөрийн мэдээлэл</h1>
        <div>
          <p className=" text-gray-500 ">Төлбөр төлөх хугацаа</p>
        </div>
      </div>
      <hr />
      <p className="text-lg">Захиалан барааны тоо : {myOrder?.itemCount} бараа</p>
      <div className="flex justify-around ">
        <button type="button" className="btn">
          Захиалга цуцлах
        </button>
        <div>
          <Link href={`/account/payment/${myOrder?.number}`} className="btn  btn-primary">
            Төлбөр төлөх
          </Link>
        </div>
      </div>
    </div>
  );
}
