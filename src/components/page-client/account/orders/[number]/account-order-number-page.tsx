'use client';

import { OrderInfo } from './order-info';

import { ProductPaymentSec } from '@/components/page-client/account/orders/[number]/product-sec';
import { ErrorResult } from '@/components/result/error-result';
import { LoadingResult } from '@/components/result/loading-result';
import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';

export default function AccountOrdersNumberPage({ params }: ParamsType) {
  const { data, loading, error } = useMyOrderQuery({
    variables: { number: params.number },
  });

  if (loading) {
    return <LoadingResult />;
  }
  if (error || !data?.myOrder) {
    return <ErrorResult message={error?.message || 'Product not found'} />;
  }

  return (
    <div className="w-full">
      <OrderInfo myOrder={data?.myOrder} />
      <ProductPaymentSec myOrder={data?.myOrder} />
    </div>
  );
}

interface ParamsType {
  params: { number: string };
}
