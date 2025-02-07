'use client';

import { LastOrderCard } from './last-order-card';

import { EmptyResult } from '@/components/result/empty-result';
import { ErrorResult } from '@/components/result/error-result';
import { LoadingResult } from '@/components/result/loading-result';
import { SortDirection } from '@/gql/graphql.d';
import { useMeOrdersQuery } from '@/gql/query/user/me-orders.generated';
export function LastOrders() {
  const { data, loading, error } = useMeOrdersQuery({ variables: { sort: { direction: SortDirection.Desc, field: 'createdAt' } } });

  if (loading) return <LoadingResult />;
  if (error || !data?.me) return <ErrorResult message={error?.message || 'Result empty'} />;
  if (data.me.orders.nodes.length === 0) return <EmptyResult message="Захиалга байхгүй байна." />;

  return (
    <div className="mt-8 flex h-48 w-full flex-col justify-between gap-4 lg:flex-row">
      {data?.me?.orders?.nodes.slice(0, 2).map((order, idx) => <LastOrderCard key={idx} order={order} />)}
    </div>
  );
}
