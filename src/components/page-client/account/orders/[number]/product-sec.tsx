import { MyOrderType } from './order-info';

export function ProductPaymentSec({ myOrder }: MyOrderType) {
  return (
    <div className="w-full rounded-2xl shadow-lg hover:shadow-xl">
      <div className="flex w-full justify-between px-4 py-6">
        <div>
          <h2 className="text-gray-500">Захиалгийн дугаар</h2>
          <p className="text-lg">{myOrder?.number ?? 'Мэдээлэл байхгүй'}</p>
        </div>
        <div>
          <h2 className="text-gray-500">Захиалга хийсэн огноо</h2>
          <p className="text-lg">{myOrder?.createdAt ? new Date(myOrder.createdAt).toLocaleDateString() : 'Мэдээлэл байхгүй'}</p>
        </div>
      </div>
      <hr />
      <div className="flex flex-col px-4 py-2">
        <div className="flex justify-between">
          <p className="text-lg">Барааны дүн</p>
          <p className="text-lg">{myOrder?.itemTotal?.toLocaleString() ?? 0}₮</p>
        </div>
      </div>
      <div className="flex justify-between border-t-2 border-dotted px-4 py-2">
        <p className="text-lg">Нийт төлөх дүн</p>
        <p className="text-lg">{myOrder?.total?.toLocaleString() ?? 0}₮</p>
      </div>
    </div>
  );
}
