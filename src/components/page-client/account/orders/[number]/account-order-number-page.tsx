'use client';

import { OrderInfo } from './order-info';

import { ProductPaymentSec } from '@/components/page-client/account/orders/[number]/product-sec';
import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';

export default function AccountOrdersNumberPage({ params }: { params: { number: string } }) {
  const { data, loading } = useMyOrderQuery({
    variables: { number: params.number },
  });

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
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
