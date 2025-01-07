'use client';

import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { catchHelper } from 'simple-helper-fns';

import { useBuild } from '@/lib/context/build-context';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { elService } from '@/lib/service/el-service';
import { HitType } from '@/types/hit-type';

export function ProductDetail() {
  const [products, setProducts] = useState<HitType[]>([]);
  const { selectedProducts, selectProduct } = useBuild();
  const searchparams = useSearchParams();
  const coatId = searchparams.get('coat');
  const buttonId = searchparams.get('button');
  const liningId = searchparams.get('lining');

  useEffect(() => {
    if (coatId) {
      selectProduct('coat', coatId);
    }
    if (buttonId) {
      selectProduct('button', buttonId);
    }
    if (liningId) {
      selectProduct('lining', liningId);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(selectedProducts).length > 0) {
      elService({ ids: Object.values(selectedProducts) })
        .then(setProducts)
        .catch(catchHelper);
    }
  }, [selectedProducts]);

  return (
    <div className="relative h-full w-full bg-[#efefef]">
      <Link href="/order">
        <div className="absolute right-4 top-4 z-30 cursor-pointer">
          <button className="rounded-3xl bg-white px-4 py-3 text-black">Дуусгах</button>
        </div>
      </Link>
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        {products.map((product, index) => {
          const firstImage = product.images[0];

          return (
            firstImage && (
              <div
                key={product.id}
                className="absolute h-full w-full lg:h-[500px]"
                style={{
                  zIndex: index + 1,
                }}
              >
                <img src={imageUrlHelper(firstImage)} alt={product.name} className="h-full w-full object-contain" />
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}
