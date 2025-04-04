"use client";

import { useCallback, useEffect, useState } from "react";

import { debounce } from "lodash";
import { MinusIcon, PlusIcon, TrashIcon } from "lucide-react";
import Image from "next/image";

import { EmptyResult } from "@/components/result/empty-result";
import { useRemoveItemMutation } from "@/gql/mutation/checkout/remove-item.generated";
import { useUpdateItemMutation } from "@/gql/mutation/checkout/update-item.generated";
import { CurrentOrderQuery } from "@/gql/query/order/current-order.generated";
import { useCurrentOrder } from "@/lib/context/current-order-context";
import { moneyFormatHelper } from "@/lib/helper/format/money-format-helper";
import { imageUrlHelper } from "@/lib/helper/img-url-helper";
import { mutationOptionHelper } from "@/lib/helper/mutation-option-helper";
export function LineItemsSection() {
  const { order, loading } = useCurrentOrder();

  if (loading) return <div className="skeleton h-52 w-full" />;
  if (!order || order.items.length === 0)
    return <EmptyResult message="Хоосон байна" />;

  return (
    <>
      <ul aria-label="line items" className="divide divide-y divide-dashed">
        {order?.items.map((item, idx) => (
          <li
            className={`flex gap-6 pb-3 ${idx === 0 ? "" : "pt-3"}`}
            key={item.id}
          >
            <SingleItem {...item} />
          </li>
        ))}
      </ul>
      {/*<EmptyItems number={order.number} />*/}
    </>
  );
}

function SingleItem({
  variant,
  price,
  quantity,
  id,
}: NonNullable<CurrentOrderQuery["currentOrder"]>["items"][0]) {
  return (
    <>
      <div className="aspect-square h-fit w-24 rounded-lg border bg-base-300">
        <Image
          src={imageUrlHelper(variant.images[0])}
          alt={variant.product.name || "product"}
          width={96}
          height={96}
          className="h-full w-full rounded-lg object-cover"
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
            <p
              aria-label="price"
              className="heading-4 text-right font-semibold"
            >
              {moneyFormatHelper(price)}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

function UpdateQuantity({ quantity, id }: { quantity: number; id: string }) {
  const [qty, setQty] = useState(quantity);
  const [updateItem, { loading }] = useUpdateItemMutation();

  useEffect(() => {
    if (!loading) setQty(quantity);
  }, [loading]);

  const onUpdate = useCallback(
    debounce(
      (q: number) => updateItem({ variables: { input: { id, quantity: q } } }),
      800,
    ),
    [],
  );

  return (
    <div aria-label="adjust quantity" className="grid grid-cols-3 items-center">
      <button
        onClick={() => {
          if (qty > 0) {
            setQty(qty - 1);
            onUpdate(qty - 1);
          }
        }}
        className="btn join-item btn-xs"
        type="button"
        disabled={loading || quantity <= 1}
      >
        <MinusIcon className="w-4" />
      </button>
      <p className="text-center">{qty}</p>
      <button
        onClick={() => {
          setQty(qty + 1);
          onUpdate(qty + 1);
        }}
        className="btn join-item btn-xs"
        type="button"
        disabled={loading}
      >
        <PlusIcon className="w-4" />
      </button>
    </div>
  );
}

function RemoveItem({ id }: { id: string }) {
  const [updateRemove, { loading }] = useRemoveItemMutation({
    ...mutationOptionHelper,
    variables: { input: { id } },
  });

  return (
    <button
      onClick={() => updateRemove()}
      disabled={loading}
      type="button"
      className="btn btn-sm w-fit"
    >
      {loading ? <div className="loading" /> : <TrashIcon className="w-4" />}
    </button>
  );
}

// function EmptyItems({ number }: { number: string }) {
//   const [emptyItem, { loading }] = useEmptyItemMutation({ ...mutationOptionHelper, refetchQueries: [{ query: CurrentOrderDocument }] });
//
//   return (
//     <button
//       disabled={loading}
//       type="button"
//       className="btn btn-error btn-sm float-end mt-4"
//       onClick={() => emptyItem({ variables: { input: { number } } })}
//     >
//       {loading ? <div className="loading" /> : <TrashIcon className="w-4" />}
//       Сагс хоослох
//     </button>
//   );
// }
