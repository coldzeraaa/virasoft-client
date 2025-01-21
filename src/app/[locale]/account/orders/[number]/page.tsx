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
  console.log({ params });
  console.log(error);
  console.log(data);

  const mockData = {
    createdAt: '2025-01-13T12:00:00Z',
    currency: 'USD',
    id: '12345',
    itemCount: 3,
    itemTotal: 4500,
    items: [
      {
        id: 'item1',
        name: 'Laptop',
        price: 1500,
        quantity: 1,
      },
      {
        id: 'item2',
        name: 'Mouse',
        price: 500,
        quantity: 2,
      },
    ],
    number: 'INV-2025-0001',
    token: 'abcde12345',
    total: 5000,
    updatedAt: '2025-01-13T12:30:00Z',
    user: {
      id: 'user123',
      name: 'John Doe',
      email: 'johndoe@example.com',
    },
    userId: 'user123',
    website: {
      id: 'website567',
      name: 'MyShop',
      url: 'https://www.myshop.com',
    },
    websiteId: 'website567',
  };
  console.log(data);

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
