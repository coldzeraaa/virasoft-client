'use client';

import { useState } from 'react';

import { ShoppingCartIcon } from '@heroicons/react/16/solid';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { BtnUpdateQuantity } from './btn-update-quantity';

import { useProductPage } from '@/lib/context/product-context';
import { catchHelper } from '@/lib/helper/catch-helper';
import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';
import { useAddToCart } from '@/lib/hook/use-add-to-cart';

export function BuySection() {
  const { variant } = useProductPage();
  const [addToCart, { loading }] = useAddToCart();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);

  return (
    <section className="buy section">
      <div aria-label="quantities and price" className="mb-6 flex w-full flex-wrap items-center gap-2">
        <BtnUpdateQuantity quantity={quantity} setQuantity={setQuantity} />
        {/*{variant && variant.price !== variant.sellingPrice ? (*/}
        {/*  <div className="w-full">*/}
        {/*    <p className="title-medium w-full text-right text-error">{moneyFormatHelper(variant.sellingPrice)}</p>*/}
        {/*    <p className="title-medium w-full text-right text-sm line-through">{moneyFormatHelper(variant.price)}</p>*/}
        {/*  </div>*/}
        {/*) : (*/}
        {/*  <div className="w-full">*/}
        {/*    <p className="title-medium w-full text-right">{moneyFormatHelper(variant?.sellingPrice || 0)}</p>*/}
        {/*  </div>*/}
        {/*)}*/}
        <div className="flex-1">
          <p className="title-medium w-full text-right">{moneyFormatHelper(variant?.price || 0)}</p>
        </div>
      </div>
      <div aria-label="buy actions" className="grid gap-3">
        <button
          type="button"
          className="btn btn-outline btn-block"
          onClick={() => {
            if (!variant?.id) return toast.error(`Please select a variant`);
            addToCart({ variables: { input: { items: [{ variantId: variant.id, quantity }] } } }).catch(catchHelper);
          }}
        >
          {loading ? <span className="loading w-5" /> : <ShoppingCartIcon className="w-5" />}
          Add to cart
        </button>
        <button
          type="button"
          className="btn btn-primary btn-block"
          onClick={() => {
            if (!variant?.id) return toast.error(`Please select a variant`);
            addToCart({ variables: { input: { items: [{ variantId: variant.id, quantity }] } } })
              .then(() => router.push('/checkout'))
              .catch(catchHelper);
          }}
        >
          Purchase
        </button>
      </div>
    </section>
  );
}
