import Image from 'next/image';
import Link from 'next/link';

import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { HitType } from '@/types/hit-type';

export function ProductSingle({ name, price, slug, id, title, images, is_sale, selling_price }: HitType) {
  return (
    <div className="w-full" data-single-id={id}>
      <Link href={`/product/${slug}`} className="relative">
        <Image
          src={images['0'] ? imageUrlHelper(images['0']) : `https://via.placeholder.com/80`}
          alt={name}
          width={100}
          height={100}
          className="mb-2 aspect-square w-full rounded-lg bg-base-200 object-contain shadow-md"
        />
        {is_sale && (
          <div className="t-text-xs absolute left-2 top-2 rounded-lg bg-primary px-2 py-1">
            <p className="label-small">{Math.round(100 - (100 * (selling_price || price)) / price)}%</p>
          </div>
        )}
      </Link>
      <p className="t-text-xs mb-0.5 font-bold">{title}</p>
      <p className="t-text-sm mb-3 line-clamp-2">{name}</p>
      <div className="flex gap-2">
        <p className={`t-text-sm text-left ${is_sale ? 'text-primary' : ''}`}>{moneyFormatHelper(selling_price || price || 0)}</p>
        {is_sale && <p className="t-text-sm text-left line-through">{moneyFormatHelper(price || 0)}</p>}
      </div>
    </div>
  );
}
