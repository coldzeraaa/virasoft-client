import { MyOrderQuery } from '@/gql/query/user/my-order.generated';

export function ProductPaymentSec({ myOrder }: { myOrder: MyOrderQuery['myOrder'] }) {
  return (
    <div className="w-full rounded-2xl shadow-lg hover:shadow-xl">
      <div className="flex w-full justify-between px-4 py-6">
        <div>
          <div className="text-gray-500">Захиалгийн дугаар</div>
          <div className="text-lg">{myOrder?.number ?? 'Мэдээлэл байхгүй'}</div>
        </div>
        <div>
          <div className="text-gray-500">Захиалга хийсэн огноо</div>
          <div className="text-lg">{myOrder?.createdAt ? new Date(myOrder.createdAt).toLocaleDateString() : 'Мэдээлэл байхгүй'}</div>
        </div>
      </div>
      <hr />
      <div className="flex flex-col px-4 py-2">
        <div className="flex justify-between">
          <div className="text-lg">Барааны дүн</div>
          <div className="text-lg">{myOrder?.itemTotal?.toLocaleString() ?? 0}₮</div>
        </div>
      </div>
      <div className="flex justify-between border-t-2 border-dotted px-4 py-2">
        <div className="text-lg">Нийт төлөх дүн</div>
        <div className="text-lg">{myOrder?.total?.toLocaleString() ?? 0}₮</div>
      </div>
    </div>
  );
}
