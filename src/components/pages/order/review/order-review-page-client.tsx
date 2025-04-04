"use client";
import { MapPin, Package, Truck } from "lucide-react";
import Image from "next/image";

import { PaymentSection } from "../../checkout/payment-section";

import { useCurrentOrder } from "@/lib/context/current-order-context";
import { moneyFormatHelper } from "@/lib/helper/format/money-format-helper";
import { imageUrlHelper } from "@/lib/helper/img-url-helper";
export default function OrderReviewPageClient() {
  const { order, loading } = useCurrentOrder();

  if (loading) return <div className="skeleton h-96 w-full" />;

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-8 text-3xl font-bold">
        Захиалгын дэлгэрэнгүй мэдээлэл
      </h1>

      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Order Items Section */}
          <div className="rounded-lg border border-base-300 bg-base-100 p-6">
            <div className="mb-4 flex items-center gap-2">
              <Package className="text-primary" />
              <h2 className="text-xl font-semibold">
                Бүтээгдэхүүний дэлгэрэнгүй
              </h2>
            </div>

            <div className="divide-y divide-base-300">
              {order?.items.map((item) => (
                <div key={item.variant.id} className="flex gap-4 py-4">
                  <div className="relative h-24 w-24 flex-shrink-0">
                    <Image
                      src={
                        item.variant.images[0]
                          ? imageUrlHelper(item.variant.images[0])
                          : `/api/placeholder/96/96`
                      }
                      alt={item.variant.product.name || "product"}
                      fill
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>

                  <div className="grid w-full grid-cols-2">
                    <div>
                      <h3 className="font-medium">
                        {item.variant.product.name}
                      </h3>
                      <p className="text-sm text-base-content/70">
                        Тоо ширхэг: {item.quantity}
                      </p>
                    </div>
                    <p className="text-right font-semibold">
                      {moneyFormatHelper(item.price)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Address Section */}
          <div className="rounded-lg border border-base-300 bg-base-100 p-6">
            <div className="mb-4 flex items-center gap-2">
              <MapPin className="text-primary" />
              <h2 className="text-xl font-semibold">Хүргэлтийн хаяг</h2>
            </div>

            <div className="rounded-lg bg-base-200 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Truck className="h-4 w-4" />
                <span className="font-medium">
                  {order?.shipAddress?.address.addressAlias}
                </span>
              </div>
              <p className="text-base-content/70">
                {order?.shipAddress?.address.address1}
              </p>
              {order?.shipAddress?.address.address2 && (
                <p className="text-base-content/70">
                  {order?.shipAddress?.address.address2}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Payment Section Sidebar */}
        <div className="rounded-lg border border-base-300 bg-base-100 p-6">
          <h2 className="mb-4 text-xl font-semibold">Төлбөрийн дэлгэрэнгүй</h2>
          <PaymentSection />
        </div>
      </div>
    </div>
  );
}
