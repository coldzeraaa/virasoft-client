import { MyOrderType } from './order-info';

import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';

export function OrderDetailSection({ myOrder }: MyOrderType) {
  return (
    <div className="mx-auto w-full max-w-7xl rounded-3xl bg-gradient-to-br from-gray-50 to-white px-6 py-6 shadow-lg transition-shadow duration-300 hover:shadow-xl sm:px-8">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">Барааны мэдээлэл</h2>
      </div>

      {/* Divider */}
      <hr className="my-4 border-t border-dashed border-gray-300" />

      {/* Product Details */}
      <div className="space-y-4">
        {myOrder?.items?.map((element, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-between rounded-xl bg-gray-50 p-4 shadow-sm transition-colors duration-300 hover:bg-gray-100 sm:flex-row"
          >
            {/* Product Name and Price */}
            <div className="flex w-full flex-col sm:w-2/3">
              <p className="text-base font-medium text-gray-700 sm:text-lg">Барааны нэр: {element.variant.product.name}</p>
              <p className="text-sm text-gray-500 sm:text-base">Үнэ: {moneyFormatHelper(element.variant.price)}₮</p>
            </div>

            {/* Quantity and Total */}
            <div className="mt-2 flex w-full flex-col items-end sm:mt-0 sm:w-1/3">
              <p className="text-base font-semibold text-gray-900 sm:text-lg">
                {moneyFormatHelper(element.variant.price)} x {element.quantity}
              </p>
              <p className="text-sm font-bold text-primary sm:text-base">{moneyFormatHelper(element.total)}₮</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
