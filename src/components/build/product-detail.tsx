'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { catchHelper } from 'simple-helper-fns';

import { elService } from '@/lib/service/el-service';
import { HitType } from '@/types/hit-type';

export function ProductDetail() {
  const [products, setProducts] = useState<HitType[]>([]);
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());

  useEffect(
    () => {
      elService({ ids: Object.values(params) })
        .then(setProducts)
        .catch(catchHelper);
    },
    params ? Object.values(params) : [],
  );

  return (
    <div>
      <Image
        src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80"
        width={800}
        height={800}
        alt="product"
        className="aspect-square w-full rounded-lg bg-base-300 object-contain"
      />
      <h2>Selected products /{products.length}/</h2>
      <ul>
        {products.map((p, idx) => (
          <li key={idx}>
            <h3>{p.name}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
}
