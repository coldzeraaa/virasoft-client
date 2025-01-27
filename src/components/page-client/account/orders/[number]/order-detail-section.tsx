import { MyOrderType } from './order-info';

import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';

export function OrderDetailSection({ myOrder }: MyOrderType) {
  return (
    <div className="flex flex-col gap-6 rounded-2xl px-6 py-4 shadow-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-xl">Барааны мэдээлэл</h2>
      </div>
      <hr />
      <div>
        {myOrder?.items?.map((element, idx) => (
          <div className="flex justify-between" key={idx}>
            <p className="text-lg"> Барааны нэр : {element.variant.product.name}</p>
            <p className="text-lg">
              {moneyFormatHelper(element.variant.price)} x {element.quantity} = {moneyFormatHelper(element.total)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
