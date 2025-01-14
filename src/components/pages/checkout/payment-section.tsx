'use client';

import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

import { useMeQuery } from '@/gql/query/user/me.generated';
import { useCurrentOrder } from '@/lib/context/current-order-context';
import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';

export function PaymentSection() {
  const { loading, order } = useCurrentOrder();
  const { data } = useMeQuery();

  if (loading || !order) return <div className="skeleton h-60 w-full" />;

  return (
    <>
      <p className="t-text-sm mb-2 flex justify-between">
        <span>Items</span>
        <span>{order.items.length}</span>
      </p>
      <p className="t-text-sm mb-1 flex justify-between">
        <span>Products</span>
        <span>{moneyFormatHelper(order.itemTotal || 0)}</span>
      </p>
      <ul className="space-y-1 py-1 pl-4">
        {order.items.map((item) => (
          <li key={item.id}>
            <p className="grid grid-cols-[1fr,auto,auto] items-center gap-2">
              <span className="t-text-xs line-clamp-2 truncate">{item.variant.product.name}</span>
              <span className="t-text-xs h-fit rounded bg-base-300 p-1">x{item.quantity}</span>
              <span className="t-text-xs min-w-20 text-right">{moneyFormatHelper(item.price)}</span>
            </p>
          </li>
        ))}
      </ul>
      <div className="h-px w-full bg-secondary" />
      <p className="mb-6 flex items-center justify-between py-3">
        <span className="t-text-base">Total</span>
        <span className="heading-4">{moneyFormatHelper(order.total || 0)}</span>
      </p>
      <Link href={data?.me ? '/checkout/address' : '/checkout/login'} className="btn btn-primary btn-block">
        <span>Continue</span>
        <ChevronRightIcon className="w-4" />
      </Link>
    </>
  );
}
