import Link from 'next/link';

import { MyOrderQuery } from '@/gql/query/user/my-order.generated';

export function OrderInfo({ myOrder }: MyOrderType) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-gray-50 to-white px-8 py-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Төлбөрийн мэдээлэл</h2>
        <div className="text-right">
          <p className="text-sm font-medium text-gray-500">Төлбөр төлөх хугацаа</p>
          <p className="text-base font-semibold text-primary">Дуусах хугацаа: 24 цаг</p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-dashed border-gray-300" />

      {/* Order Details */}
      <div className="space-y-4">
        <p className="text-lg font-medium text-gray-700">
          Захиалан барааны тоо : <span className="font-bold text-gray-900">{myOrder?.itemCount} бараа</span>
        </p>
        <p className="text-lg font-medium text-gray-700">
          Захиалгийн төлөв :{' '}
          <span
            className={`font-bold ${
              myOrder?.paymentStatus === 'paid'
                ? 'text-green-600'
                : myOrder?.paymentStatus === 'credit_owed' || myOrder?.paymentStatus === 'balance_due'
                  ? 'text-yellow-600'
                  : 'text-red-600'
            }`}
          >
            {myOrder?.paymentStatus || 'Мэдээлэл байхгүй'}
          </span>
        </p>
      </div>

      {/* Payment Button */}
      <div className="flex justify-center">
        <Link
          href={`/account/orders/${myOrder?.number}/pay`}
          className="hover:bg-primary-dark btn btn-primary rounded-full bg-primary px-6 py-3 font-medium text-base-100 shadow-md transition-all duration-300 hover:shadow-lg"
        >
          Төлбөр төлөх
        </Link>
      </div>
    </div>
  );
}

export interface MyOrderType {
  myOrder: MyOrderQuery['myOrder'];
}
