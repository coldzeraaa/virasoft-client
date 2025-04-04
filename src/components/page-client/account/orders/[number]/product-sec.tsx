import { MyOrderType } from "./order-info";

import { moneyFormatHelper } from "@/lib/helper/format/money-format-helper";

export function ProductPaymentSec({ myOrder }: MyOrderType) {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-base-100 shadow-sm transition-shadow duration-300 hover:shadow-2xl">
      {/* Header Section */}
      <div className="flex flex-col justify-between gap-4 border-b border-dashed border-base-200 px-6 py-8 sm:flex-row sm:gap-0">
        <div className="flex flex-col space-y-1">
          <h2 className="text-sm font-medium tracking-wide text-base-300">
            Захиалгийн дугаар
          </h2>
          <p className="text-lg font-bold text-primary">
            {myOrder?.number ?? "Мэдээлэл байхгүй"}
          </p>
        </div>
        <div className="mt-4 flex flex-col space-y-1 sm:mt-0">
          <h2 className="text-sm font-medium tracking-wide text-base-300">
            Захиалга хийсэн огноо
          </h2>
          <p className="text-end text-lg font-bold text-primary">
            {myOrder?.createdAt
              ? new Date(myOrder.createdAt).toLocaleDateString("ko-KR")
              : "Мэдээлэл байхгүй"}
          </p>
        </div>
      </div>

      {/* Item Total Section */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium tracking-wide text-gray-700">
            Барааны дүн
          </p>
          <p className="text-lg font-semibold text-gray-900">
            {moneyFormatHelper(myOrder?.itemTotal ?? 0)}
          </p>
        </div>
      </div>

      {/* Total Amount Section */}
      <div className="flex items-center justify-between border-t-2 border-dotted border-base-200 px-6 py-6">
        <p className="text-lg font-bold tracking-wide text-gray-800">
          Нийт төлөх дүн
        </p>
        <div className="relative inline-flex">
          <p className="text-2xl font-extrabold text-primary">
            {moneyFormatHelper(myOrder?.total ?? 0)}
          </p>
        </div>
      </div>
    </div>
  );
}
