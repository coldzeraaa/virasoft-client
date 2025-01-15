'use client';

import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';
import { toast } from 'react-toastify';

import { ErrorResult } from '@/components/result/error-result';
import { useRemoveItemMutation } from '@/gql/mutation/checkout/remove-item.generated';
import { useUpdateItemMutation } from '@/gql/mutation/checkout/update-item.generated';
import { CurrentOrderQuery } from '@/gql/query/order/current-order.generated';
import { useCurrentOrder } from '@/lib/context/current-order-context';
import { catchHelper } from '@/lib/helper/catch-helper';
import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
export function LineItemsSection() {
  const { order, loading } = useCurrentOrder();
  if (loading) return <div>Loading...</div>;
  if (!order) return <ErrorResult message="Order not found" />;

  return (
    <ul aria-label="line items" className="divide-y divide-neutral-content">
      {order?.items.map((item) => <SingleItem {...item} key={item.id} />)}
    </ul>
  );
}

function SingleItem({ variant, price, quantity, id }: NonNullable<CurrentOrderQuery['currentOrder']>['items'][0]) {
  return (
    <li className="flex gap-6">
      <div className="aspect-square h-fit w-24 rounded-lg border bg-base-300">
        <Image
          src={variant.images[0] ? imageUrlHelper(variant.images[0]) : `https://via.placeholder.com/80?text=-`}
          alt={variant.product.name || 'product'}
          width={96}
          height={96}
          className="rounded-lg object-contain"
        />
      </div>
      <div className="flex-1">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h3 className="t-text-base mb-2">{variant.product.name}</h3>
            <p className="t-text-sm">#{variant.sku}</p>
          </div>
          <RemoveItem id={id} />
        </div>
        <div className="flex items-center justify-between">
          <UpdateQuantity quantity={quantity} id={id} />
          <div className="grid min-w-32 gap-2">
            <p aria-label="price" className="heading-4 text-right">
              {moneyFormatHelper(price)}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

function UpdateQuantity({ quantity, id }: { quantity: number; id: string }) {
  const [updateItem, { loading }] = useUpdateItemMutation({
    onError: catchHelper,
    onCompleted: () => {
      toast.success('Item updated successfully');
    },
  });

  return (
    <div aria-label="adjust quantity" className="grid grid-cols-3 items-center">
      <button
        onClick={() =>
          updateItem({
            variables: {
              input: { id, quantity: quantity - 1 },
            },
          })
        }
        className="btn btn-outline join-item btn-xs"
        type="button"
        disabled={loading || quantity <= 1}
      >
        <MinusIcon className="w-4" />
      </button>
      <p className="text-center">{quantity}</p>
      <button
        onClick={() =>
          updateItem({
            variables: {
              input: { id, quantity: quantity + 1 },
            },
          })
        }
        className="btn btn-outline join-item btn-xs"
        type="button"
        disabled={loading}
      >
        <PlusIcon className="w-4" />
      </button>
    </div>
  );
}
function RemoveItem({ id }: { id: string }) {
  const [updateItem, { loading }] = useRemoveItemMutation({
    variables: { input: { id } },
    onError: catchHelper,
    onCompleted() {
      toast.success(`Item removed from cart`);
    },
  });

  return (
    <button onClick={() => updateItem()} disabled={loading} type="button" className="btn btn-sm w-fit">
      {loading ? <div className="loading" /> : <TrashIcon className="w-4" />}
    </button>
  );
}
