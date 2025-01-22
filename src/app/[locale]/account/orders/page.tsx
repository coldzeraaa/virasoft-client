'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useMeOrdersQuery } from '@/gql/query/user/me-orders.generated';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';

export default function Orders() {
  const { data, loading: loading } = useMeOrdersQuery();
  const userOrderNodes = data?.me?.orders?.nodes;

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-[16px] border-[1px]  border-solid border-gray-200">
      <table className="table     shadow-2xl">
        {/* head */}
        <thead>
          <tr>
            <th>№</th>
            <th>Захиалгийн дугаар</th>
            <th>захиалгууд</th>
            <th></th>
            <th>Он сар өдөр</th>
            <th>үнэ</th>
          </tr>
        </thead>
        <tbody>
          {userOrderNodes?.map((order, idx: number) => (
            <tr key={order.number || order.id} className="px-2 py-4">
              <td>{idx + 1}</td>
              <td>{order.number}</td>
              <td className=" ">
                {order.items.map((item, i: number) => (
                  <div className="flex gap-4" key={i}>
                    <div>
                      {item.variant.product.name}-{item.quantity} ширхэг
                    </div>
                  </div>
                ))}
              </td>
              <td>
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-[1px] border-solid border-gray-400 px-1 py-1">
                  <Image width={500} height={500} src={imageUrlHelper(order.items[0].variant.images[1])} alt="" />
                </div>
              </td>
              <td>{new Date(order.createdAt).toLocaleString()}</td>
              <td>{order.total}₮</td>
              <td>
                <Link href={`orders/${order?.number}`} className="flex items-center justify-center gap-1  ">
                  <ArrowRight />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
