import Image from 'next/image';

import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { elService } from '@/lib/service/el-service';

export default async function BuildTypeType({ searchParams }: PageType) {
  const hits = await elService({ ids: Object.values(searchParams) });
  return (
    <div className="relative h-full w-full">
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        {hits.map((product) => (
          <div
            key={product.id}
            className="absolute h-full w-full lg:h-4/6"
            style={{ zIndex: typeof product.position === 'number' ? product.position : 1 }}
          >
            <Image
              src={imageUrlHelper(product.images[0])}
              alt={product.name}
              height={500}
              width={400}
              className="pointer-events-none h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

interface PageType {
  params: { type: string };
  searchParams: Record<string, string>;
}
