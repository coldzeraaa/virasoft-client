// Replace with the actual import
'use client';

import OrderInfo from '@/components/user-dashboard/orders/order-info';
import ProductPaymentSec from '@/components/user-dashboard/orders/product-sec';
import UserAddressDetail from '@/components/user-dashboard/orders/user-address-detail';
import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';

export default function AccountOrdersNumberPage({ params }: { params: { number: string } }) {
  const {
    data,
    loading: meLoading,
    error,
  } = useMyOrderQuery({
    variables: { number: params.number },
  });

  if (meLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full">
      <OrderInfo data={data}></OrderInfo>
      <ProductPaymentSec data={data}></ProductPaymentSec>
      <UserAddressDetail data={data}></UserAddressDetail>
    </div>
  );
}
