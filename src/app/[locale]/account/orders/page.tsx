'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useMeOrdersQuery } from '@/gql/query/user/me-orders.generated';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';

const Orders = () => {
  const { data, loading: userDataLoading } = useMeOrdersQuery();
  const userOrderNodes = data?.me?.orders?.nodes;

  const mockData = [
    {
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
    },
  ];
  console.log(userOrderNodes);

  if (userDataLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-full overflow-x-auto rounded-[16px] border-[1px]  border-solid border-gray-200">
      <table className="table     shadow-2xl">
        {/* head */}
        <thead>
          <tr>
            <th>№</th>
            <th>Захиалгийн дугаар</th>
            <th>захиалгууд</th>
            <th></th>
            <th>Он сар өдөр</th>
            <th>үнэ</th>
          </tr>
        </thead>
        <tbody>
          {userOrderNodes?.map((data, idx) => (
            <tr key={data.number || data.id} className="px-2 py-4">
              <td>{idx + 1}</td>
              <td>{data.number}</td>
              <td className="flex   gap-4">
                {data.items.map((item, i) => (
                  <div className="" key={i}>
                    {item.variant.product.name}-{item.quantity} ширхэг
                  </div>
                ))}
              </td>
              <td>
                <div className="flex h-[50px] w-[50px] items-center justify-center rounded-full border-[1px] border-solid border-gray-400 px-1 py-1">
                  <Image width={500} height={500} src={imageUrlHelper(data.items[0].variant.images[1])} alt="" />
                </div>
              </td>
              <td>{new Date(data.createdAt).toLocaleString()}</td>
              <td>{data.total}₮</td>
              <td>
                <Link href={`orders/${data?.number}`} className="flex items-center justify-center gap-1  ">
                  <ArrowRight />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Orders;
