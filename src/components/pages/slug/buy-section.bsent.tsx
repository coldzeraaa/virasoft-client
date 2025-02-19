'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { BtnUpdateQuantity } from './btn-update-quantity';

import { useProductPage } from '@/lib/context/product-context';
import { catchHelper } from '@/lib/helper/catch-helper';
import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';
import { useAddToCart } from '@/lib/hook/use-add-to-cart';

export function BuySection() {
  const { variant, product } = useProductPage();
  const [addToCart] = useAddToCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="p-6">
      <div className="mt-4 space-y-10">
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl font-medium text-primary">{product.title}</p>
          <p className="text-xl font-normal text-neutral">{moneyFormatHelper(variant?.price || 0)}</p>
        </div>
        <div>
          <div className="mt-4 flex items-center justify-between rounded-full bg-base-200 p-2">
            <BtnUpdateQuantity quantity={quantity} setQuantity={setQuantity} />
          </div>
        </div>
        <div className="text-ac flex justify-between font-semibold">
          <span>Нийт дүн</span>
          <span className="text-lg text-primary">{moneyFormatHelper((variant?.price || 0) * quantity)}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 space-y-3">
        <button
          type="button"
          className="w-full rounded border border-base-300 bg-base-100 py-2 text-primary shadow-sm hover:bg-base-100"
          onClick={() => {
            if (!variant?.id) return toast.error(`Please select a variant`);
            addToCart({
              variables: { input: { items: [{ variantId: variant.id, quantity }] } },
            }).catch(catchHelper);
          }}
        >
          Сагсанд хийх
        </button>
        <button
          type="button"
          className="hover:bg-primary-dark w-full rounded bg-primary py-2 text-white shadow-md"
          onClick={() => {
            if (!variant?.id) return toast.error(`Please select a variant`);
            addToCart({
              variables: { input: { items: [{ variantId: variant.id, quantity }] } },
            })
              .then(() => router.push('/checkout'))
              .catch(catchHelper);
          }}
        >
          Худалдан авах
        </button>
      </div>
    </section>
  );
}
