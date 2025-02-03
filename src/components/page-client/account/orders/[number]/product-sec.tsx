import { MyOrderType } from './order-info';

export function ProductPaymentSec({ myOrder }: MyOrderType) {
  return (
    <div className="w-full overflow-hidden rounded-3xl bg-gradient-to-br from-gray-50 to-white shadow-xl transition-shadow duration-300 hover:shadow-2xl">
      {/* Header Section */}
      <div className="flex flex-col justify-between gap-4 border-b border-dashed border-gray-200 px-6 py-8 sm:flex-row sm:gap-0">
        <div className="flex flex-col space-y-1">
          <h2 className="text-sm font-medium tracking-wide text-gray-500">Захиалгийн дугаар</h2>
          <p className="text-lg font-bold text-primary">{myOrder?.number ?? 'Мэдээлэл байхгүй'}</p>
        </div>
        <div className="mt-4 flex flex-col space-y-1 sm:mt-0">
          <h2 className="text-sm font-medium tracking-wide text-gray-500">Захиалга хийсэн огноо</h2>
          <p className="text-lg font-bold text-primary">
            {myOrder?.createdAt ? new Date(myOrder.createdAt).toLocaleDateString() : 'Мэдээлэл байхгүй'}
          </p>
        </div>
      </div>

      {/* Item Total Section */}
      <div className="px-6 py-6">
        <div className="flex items-center justify-between">
          <p className="text-base font-medium tracking-wide text-gray-700">Барааны дүн</p>
          <p className="text-lg font-semibold text-gray-900">{myOrder?.itemTotal?.toLocaleString() ?? 0}₮</p>
        </div>
      </div>

      {/* Total Amount Section */}
      <div className="flex items-center justify-between border-t-2 border-dotted border-gray-200 px-6 py-6">
        <p className="text-lg font-bold tracking-wide text-gray-800">Нийт төлөх дүн</p>
        <div className="relative inline-flex">
          <p className="text-2xl font-extrabold text-primary">{myOrder?.total?.toLocaleString() ?? 0}₮</p>
        </div>
      </div>
    </div>
  );
}
