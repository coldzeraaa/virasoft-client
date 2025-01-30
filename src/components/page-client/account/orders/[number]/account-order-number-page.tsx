'use client';

import { OrderDetailSection } from './order-detail-section';
import { OrderInfo } from './order-info';

import { ProductPaymentSec } from '@/components/page-client/account/orders/[number]/product-sec';
import { ErrorResult } from '@/components/result/error-result';
import { LoadingResult } from '@/components/result/loading-result';
import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';

export default function AccountOrdersNumberPage({ params }: ParamsType) {
  const { data, loading, error } = useMyOrderQuery({
    variables: { number: params.number },
  });

  if (loading) return <LoadingResult />;

  if (error || !data?.myOrder) return <ErrorResult message={error?.message || 'Order is not found'} />;

  return (
    <div className="w-full  space-y-6">
      <OrderInfo myOrder={data?.myOrder} />
      <OrderDetailSection myOrder={data?.myOrder} />
      <ProductPaymentSec myOrder={data?.myOrder} />
    </div>
  );
}

export interface ParamsType {
  params: { number: string };
}
