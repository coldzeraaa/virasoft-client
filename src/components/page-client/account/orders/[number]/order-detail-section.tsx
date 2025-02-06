import Image from 'next/image';

import { MyOrderType } from './order-info';

import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';

export function OrderDetailSection({ myOrder }: MyOrderType) {
  return (
    <div className="mx-auto w-full rounded-xl bg-base-100 px-6 py-6 shadow-sm transition-shadow duration-300 hover:shadow-xl sm:px-8">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-base-content sm:text-2xl">Барааны мэдээлэл</h2>
      </div>

      <hr className="my-4 border-t border-dashed border-base-200" />

      <div className="space-y-4">
        {myOrder?.items?.map((element, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center justify-between rounded-xl bg-base-100 p-4 shadow-sm transition-colors duration-300 hover:bg-base-100 sm:flex-row"
          >
            {/* Product Name and Price */}
            <div className="flex w-full flex-col sm:w-2/3">
              <p className="test-base-300 text-base font-medium sm:text-lg">Барааны нэр: {element.variant.product.name}</p>
              <p className="text-sm text-base-300 ">Үнэ: {moneyFormatHelper(element.variant.price)}</p>
            </div>
            <div className="flex h-20 w-20 items-center  rounded-full border border-solid border-base-200 p-1">
              <Image width={500} height={500} className="rounded-full" src={imageUrlHelper(element?.variant?.images[0])} alt="" />
            </div>
            {/* Quantity and Total */}
            <div className="mt-2 flex w-full flex-col items-end sm:mt-0 sm:w-1/3">
              <p className="text-base font-semibold text-gray-900 sm:text-lg">
                {moneyFormatHelper(element.variant.price)} x {element.quantity}
              </p>
              <p className="text-sm font-bold text-primary sm:text-base">{moneyFormatHelper(element.total)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
