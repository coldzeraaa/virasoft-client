import Image from 'next/image';
import Link from 'next/link';

import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { HitType } from '@/types/hit-type';

export function ProductSingle({ vendor, name, price, slug, images, is_sale, selling_price }: HitType) {
  return (
    <Link href={`/product/${slug}`} className="group flex h-40 w-full flex-col md:h-96">
      <div className="relative flex h-5/6 w-full overflow-hidden">
        <Image
          src={imageUrlHelper(images['0'])}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-all duration-300 group-hover:scale-110"
        />

        {is_sale && (
          <div className="absolute left-2 top-2 rounded-lg bg-primary px-2 py-1 text-xs font-bold text-white">
            {Math.round(100 - (100 * (selling_price || price)) / price)}%
          </div>
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-sm bg-white/90 px-6 py-2 text-sm font-medium text-primary shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white">
            Дэлгэрэнгүй
          </div>
        </div>
      </div>
      <div className="mt-2 h-1/6">
        <p className="text-xs text-neutral">
          <span className="font-medium">{vendor?.name}</span> {name}
        </p>
        <div className="flex items-center space-x-2">
          <p className={`text-lg font-medium ${is_sale ? 'text-accent' : 'text-primary'}`}>
            {moneyFormatHelper(selling_price || price || 0)}
          </p>
          {is_sale && <p className="text-base text-gray-500 line-through">{moneyFormatHelper(price || 0)}</p>}
        </div>
        {is_sale && (
          <div className="text-sm font-medium text-primary">{Math.round(100 - (100 * (selling_price || price)) / price)}% off</div>
        )}
      </div>
    </Link>
  );
}
