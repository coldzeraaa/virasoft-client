'use client';

import { useState } from 'react';

import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { LastOrderCard } from '@/components/pages/account/last-order-card';
import { EmptyResult } from '@/components/result/empty-result';
import { ErrorResult } from '@/components/result/error-result';
import { LoadingResult } from '@/components/result/loading-result';
import { SortDirection } from '@/gql/graphql.d';
import { useMeOrdersQuery } from '@/gql/query/user/me-orders.generated';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
export default function Orders() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(0);
  const { data, loading, error, fetchMore } = useMeOrdersQuery({
    variables: { first: 10, after: null, sort: { direction: SortDirection.Desc, field: 'createdAt' } },
  });
  const pageInfo = data?.me?.orders.pageInfo;
  if (loading) return <LoadingResult />;
  if (error || !data?.me) return <ErrorResult message={error?.message || 'Result empty'} />;
  if (data.me.orders.nodes.length === 0) return <EmptyResult message="Захиалга байхгүй байна." />;

  const handlePreviousPage = async () => {
    if (!(pageInfo?.hasPreviousPage ?? false)) return null;
    setCurrentPage(currentPage - 1);
    await fetchMore({
      variables: { last: 10, before: pageInfo?.startCursor, first: null, after: null },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

  const handleNextPage = async () => {
    if (!(pageInfo?.hasNextPage ?? false)) return null;
    setCurrentPage(currentPage + 1);
    await fetchMore({
      variables: { first: 10, after: pageInfo?.endCursor, last: null, before: null },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return fetchMoreResult;
      },
    });
  };

  return (
    <>
      <div className="hidden w-full max-w-7xl overflow-x-auto rounded-2xl border md:block">
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
              <tr
                onClick={() => {
                  router.push(`orders/${order?.number}`);
                }}
                key={order.number || order.id}
                className="px-2 py-4"
              >
                <td>
                  <p>{currentPage * 10 + (idx + 1)}</p>
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
                  <div className="flex items-center justify-center gap-1  ">
                    <ChevronRight className="stroke-1" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-col gap-4 md:hidden">
        {data?.me?.orders?.nodes.map((order, idx) => <LastOrderCard key={idx} order={order} />)}
      </div>
      <div className="join mt-1 flex w-full justify-center">
        <button className="btn join-item btn-sm" disabled={!(pageInfo?.hasPreviousPage ?? false)} onClick={handlePreviousPage}>
          Previous
        </button>
        <button className="btn join-item btn-sm" disabled={!(pageInfo?.hasNextPage ?? false)} onClick={handleNextPage}>
          Next
        </button>
      </div>
    </>
  );
}
