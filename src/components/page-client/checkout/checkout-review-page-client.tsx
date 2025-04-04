"use client";

import Image from "next/image";

import { ErrorResult } from "@/components/result/error-result";
import { useCurrentOrder } from "@/lib/context/current-order-context";
import { moneyFormatHelper } from "@/lib/helper/format/money-format-helper";
import { imageUrlHelper } from "@/lib/helper/img-url-helper";

export function ProductListSection() {
  const { order, loading } = useCurrentOrder();

  if (loading) return <div className="skeleton h-52 w-full" />;
  if (!order) return <ErrorResult message="Order not found" />;

  return (
    <ul className="rounded-lg bg-base-200 p-4">
      {order?.items.map((item) => (
        <li key={item.variant.id} className="flex gap-4 py-4">
          <div className="relative h-24 w-24 flex-shrink-0">
            <Image
              src={imageUrlHelper(item.variant.images[0])}
              alt={item.variant.product.name || "product"}
              fill
              className="h-full w-full rounded-lg object-cover"
            />
          </div>

          <div className="grid w-full grid-cols-2">
            <div>
              <h3 className="font-medium">{item.variant.product.name}</h3>
              <p className="text-sm text-base-content/70">
                Тоо ширхэг: {item.quantity}
              </p>
            </div>
            <p className="text-right font-semibold">
              {moneyFormatHelper(item.price)}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function ShippingSection() {
  const { order, loading } = useCurrentOrder();

  if (loading) return <div className="skeleton h-52 w-full" />;
  if (!order) return <ErrorResult message="Order not found" />;

  return (
    <div className="rounded-lg bg-base-200 p-4">
      <SingleShipAddress
        label="Нэр"
        value={order.shipAddress?.address.firstName || "-"}
      />
      <SingleShipAddress
        label="Утасны дугаар"
        value={order.shipAddress?.address.mobile || "-"}
      />
      <SingleShipAddress
        label="Дэлгэрэнгүй хаяг"
        value={order.shipAddress?.address.address1 || "-"}
      />
    </div>
  );
}

function SingleShipAddress({ value, label }: { value: string; label: string }) {
  return (
    <div className="grid grid-cols-[140px,1fr] gap-2">
      <p>{label}:</p>
      <p>{value}</p>
    </div>
  );
}
