import Image from 'next/image';
import Link from 'next/link';

import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { HitType } from '@/types/hit-type';

export function ProductSingle({ vendor, name, price, slug, images, is_sale, selling_price }: HitType) {
  return (
    <div className="w-full max-w-sm rounded-2xl shadow-lg transition-shadow duration-300 hover:shadow-xl">
      <Link href={`/product/${slug}`} className="relative block">
        <Image
          src={imageUrlHelper(images['0'])}
          alt={name}
          width={300}
          height={300}
          className="aspect-square w-full rounded-t-2xl bg-base-100 bg-contain "
        />
        {is_sale && (
          <div className="absolute left-2 top-2 rounded-lg bg-primary px-2 py-1 text-xs font-bold text-white">
            {Math.round(100 - (100 * (selling_price || price)) / price)}%
          </div>
        )}
      </Link>
      <div className="p-4">
        <p className="line-clamp-1 text-sm font-bold text-gray-800">
          {vendor?.name} {name}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <p className={`text-lg font-bold ${is_sale ? 'text-primary' : 'text-gray-900'}`}>
              {moneyFormatHelper(selling_price || price || 0)}
            </p>
            {is_sale && <p className="text-base text-gray-500 line-through">{moneyFormatHelper(price || 0)}₮</p>}
          </div>
          {is_sale && (
            <div className="text-sm font-medium text-primary">{Math.round(100 - (100 * (selling_price || price)) / price)}% off</div>
          )}
        </div>
      </div>
    </div>
  );
}
