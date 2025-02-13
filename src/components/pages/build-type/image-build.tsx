import Image from 'next/image';

import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { HitType } from '@/types/hit-type';

export function ImageBuild({ hits, loading }: { hits: HitType[]; loading?: boolean }) {
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
