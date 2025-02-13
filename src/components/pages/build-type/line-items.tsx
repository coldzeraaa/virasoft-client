'use client';

import Image from 'next/image';

import { useBuildType } from '@/lib/context/build-type-context';
import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import type { HitType } from '@/types/hit-type';

export function LineItems() {
  const { loading, hits } = useBuildType();

  if (loading) return <div>Loading</div>;
  if (hits.length === 0) return <div>No items</div>;

  return (
    <ul aria-label="line items" className="divide divide-y divide-dashed">
      {hits.map((item, idx) => (
        <li className={`flex gap-6 pb-3 ${idx === 0 ? '' : 'pt-3'}`} key={item.id}>
          <SingleItem {...item} />
        </li>
      ))}
    </ul>
  );
}

function SingleItem({ name, images, sku, price }: HitType) {
  return (
    <>
      <div className="aspect-square h-fit w-24 rounded-lg border bg-base-300">
        <Image
          src={imageUrlHelper(images[0])}
          alt={name || 'product'}
          width={96}
          height={96}
          className="h-full w-full rounded-lg object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="mb-3 flex items-start justify-between">
          <div>
            <h3 className="t-text-base mb-2">{name}</h3>
            <p className="t-text-sm">#{sku || '-'}</p>
          </div>
        </div>
        <div className="grid min-w-32 gap-2">
          <p aria-label="price" className="heading-4 text-right font-semibold">
            {moneyFormatHelper(price || 0)}
          </p>
        </div>
      </div>
    </>
  );
}
