import Link from 'next/link';

import { MyOrderQuery } from '@/gql/query/user/my-order.generated';

export function OrderInfo({ myOrder }: MyOrderType) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Төлбөрийн мэдээлэл</h2>
        <div>
          <p className=" text-gray-500 ">Төлбөр төлөх хугацаа</p>
        </div>
      </div>
      <hr />
      <p className="text-lg">Захиалан барааны тоо : {myOrder?.itemCount} бараа</p>
      <div className="flex justify-around ">
        <div>
          <Link href={`/account/orders/${myOrder?.number}/pay`} className="btn  btn-primary text-base-100">
            Төлбөр төлөх
          </Link>
        </div>
      </div>
    </div>
  );
}

export interface MyOrderType {
  myOrder: MyOrderQuery['myOrder'];
}
