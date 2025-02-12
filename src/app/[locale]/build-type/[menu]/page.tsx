'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

import { catchHelper } from '@/lib/helper/catch-helper';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { elService } from '@/lib/service/el-service';
import type { HitType } from '@/types/hit-type';

export default function BuildTypeType() {
  const searchParams = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const dependencies = Object.values(searchParamsObject);
  const [loading, setLoading] = useState<boolean>(false);
  const [hits, setHits] = useState<HitType[]>([]);

  useEffect(() => {
    setLoading(true);
    elService({ ids: dependencies })
      .then(setHits)
      .catch(catchHelper)
      .finally(() => setLoading(false));
  }, [JSON.stringify(dependencies)]);

  return (
    <div className={`relative aspect-square w-full p-2 ${loading ? 'skeleton bg-base-300' : ''}`}>
      {hits.map((product) => (
        <Image
          key={product.id}
          src={imageUrlHelper(product.images[0])}
          style={{ zIndex: typeof product.position === 'number' ? product.position : 1 }}
          alt={product.name}
          height={500}
          width={400}
          className="pointer-events-none absolute h-full w-full bg-transparent object-contain"
        />
      ))}
    </div>
  );
}
