'use client';

import { OrderInfo } from '@/components/page-client/account/[number]/order-info';
import { ProductPaymentSec } from '@/components/page-client/account/[number]/product-sec';
import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';

export default function AccountOrdersNumberPage({ params }: { params: { number: string } }) {
  const { data, loading: loading } = useMyOrderQuery({
    variables: { number: params.number },
  });

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <OrderInfo myOrder={data?.myOrder}></OrderInfo>
      <ProductPaymentSec myOrder={data?.myOrder}></ProductPaymentSec>
    </div>
  );
}
