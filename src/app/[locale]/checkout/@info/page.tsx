'use client';

import { usePathname } from 'next/navigation';

import { BtnContinueAddress } from '@/components/pages/checkout/btn-continue-address';
import { BtnContinueCart } from '@/components/pages/checkout/btn-continue-cart';
import { BtnContinueReview } from '@/components/pages/checkout/btn-continue-review';
import { useCurrentOrder } from '@/lib/context/current-order-context';
import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';

export default function Page() {
  const { loading, order } = useCurrentOrder();
  const pathName = usePathname();

  if (loading) return <div className="skeleton h-40" />;

  return (
    <>
      <p className="mb-2 flex justify-between font-semibold">
        <span>Бүтээгдэхүүний тоо ширхэг</span>
        <span>{order?.items.length || 0}ш</span>
      </p>
      <p className="mb-1 flex justify-between font-semibold">
        <span>Бүтээгдэхүүн</span>
        <span>{moneyFormatHelper(order?.itemTotal || 0)}</span>
      </p>
      <ul className="space-y-1 py-1 pl-4">
        {order?.items.map((item) => (
          <li key={item.id}>
            <p className="grid grid-cols-[1fr,auto,auto] items-center gap-2">
              <span className="t-text-xs line-clamp-2 truncate">{item.variant.product.name || '-'}</span>
              <span className="t-text-xs h-fit rounded bg-base-300 p-1 px-2">{item.quantity || 0}ш</span>
              <span className="t-text-xs min-w-20 text-right">{moneyFormatHelper(item.price)}</span>
            </p>
          </li>
        ))}
      </ul>
      <p className="mb-6 flex items-center justify-between border-t border-dashed py-3 font-bold">
        <span className="">Нийт</span>
        <span className="heading-4">{moneyFormatHelper(order?.total || 0)}</span>
      </p>
      {order && pathName === '/checkout' && <BtnContinueCart />}
      {order && pathName === '/checkout/address' && <BtnContinueAddress />}
      {order?.number && pathName === '/checkout/review' && <BtnContinueReview number={order.number} />}
    </>
  );
}
