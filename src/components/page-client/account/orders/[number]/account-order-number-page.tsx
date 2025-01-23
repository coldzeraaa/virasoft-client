'use client';

import { OrderInfo } from './order-info';

import { ProductPaymentSec } from '@/components/page-client/account/orders/[number]/product-sec';
import { ErrorResult } from '@/components/result/error-result';
import { LoadingResult } from '@/components/result/loading-result';
import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';

export default function AccountOrdersNumberPage({ params }: { params: { number: string } }) {
  const { data, loading, error } = useMyOrderQuery({
    variables: { number: params.number },
  });

  if (loading) {
    return <LoadingResult />;
  }
  if (error) {
    return <ErrorResult message={error?.message || 'Product not found'} />;
  }
  if (!data?.myOrder) {
    return (
      <div className="flex h-full items-center justify-center">
        <p>Order not found</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <OrderInfo myOrder={data?.myOrder} />
      <ProductPaymentSec myOrder={data?.myOrder} />
    </div>
  );
}
