import { MyOrderType } from './order-info';

import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';

export function OrderDetailSection({ myOrder }: MyOrderType) {
  return (
    <div className="flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-gray-50 to-white px-8 py-6 shadow-lg transition-shadow duration-300 hover:shadow-xl">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800">Барааны мэдээлэл</h2>
      </div>

      {/* Divider */}
      <hr className="border-t border-dashed border-gray-300" />

      {/* Product Details */}
      <div className="space-y-4">
        {myOrder?.items?.map((element, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between rounded-xl bg-gray-50 p-4 shadow-sm transition-colors duration-300 hover:bg-gray-100"
          >
            <div className="flex flex-col">
              <p className="text-lg font-medium text-gray-700">Барааны нэр: {element.variant.product.name}</p>
              <p className="text-sm text-gray-500">Үнэ: {moneyFormatHelper(element.variant.price)}</p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-lg font-semibold text-gray-900">
                {moneyFormatHelper(element.variant.price)} x {element.quantity}
              </p>
              <p className="text-base font-bold text-primary">{moneyFormatHelper(element.total)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
