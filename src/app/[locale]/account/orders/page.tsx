'use client';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { EmptyResult } from '@/components/result/empty-result';
import { ErrorResult } from '@/components/result/error-result';
import { LoadingResult } from '@/components/result/loading-result';
import { useMeOrdersQuery } from '@/gql/query/user/me-orders.generated';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';

export default function Orders() {
  const { data, loading, error } = useMeOrdersQuery();

  if (loading) return <LoadingResult />;
  if (error || !data?.me) return <ErrorResult message={error?.message || 'Result empty'} />;
  if (data.me.orders.nodes.length === 0) return <EmptyResult message="Захиалга байхгүй байна." />;
  return (
    <>
      <div className="w-full max-w-7xl overflow-x-auto rounded-2xl border">
        <table className="table bg-base-100 shadow-2xl">
          <thead>
            <tr>
              <th>№</th>
              <th>Захиалгийн дугаар</th>
              <th>Захиалгууд</th>
              <th />
              <th>Он сар өдөр</th>
              <th>Үнэ</th>
            </tr>
          </thead>
          <tbody>
            {data.me.orders.nodes.map((order, idx) => (
              <tr key={order.number || order.id} className="px-2 py-4">
                <td>
                  <p>{idx + 1}</p>
                </td>
                <td>
                  <p>{order.number ?? 0}</p>
                </td>
                <td>
                  {order.items.map((item, idx2) => (
                    <div className="flex" key={idx2}>
                      <p>
                        {item.variant.product.name}-{item.quantity} ширхэг
                      </p>
                    </div>
                  ))}
                </td>
                <td>
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-md border border-solid border-gray-400 p-1">
                    <Image width={500} height={500} src={imageUrlHelper(order?.items[0]?.variant?.images[0])} alt="" />
                  </div>
                </td>
                <td>
                  <p>{order.createdAt ? new Date(order.createdAt).toLocaleString() : 'Мэдээлэл байхгүй байна.'}</p>
                </td>
                <td>
                  <p>{order.total ?? 0}₮</p>
                </td>
                <td>
                  <Link href={`orders/${order?.number}`} className="flex items-center justify-center gap-1  ">
                    <ChevronRight className="stroke-1" />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
