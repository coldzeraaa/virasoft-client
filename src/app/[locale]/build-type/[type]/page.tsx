import Image from 'next/image';

import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { elService } from '@/lib/service/el-service';

export default async function BuildTypePage(props: PageType) {
  return (
    <main className="grid h-[calc(100vh-44px)] grid-rows-[70fr_30fr] lg:flex lg:h-[calc(100vh-80px)] lg:flex-row">
      {/* Left Section: Image */}
      <div className="h-full lg:w-[70%] lg:flex-1">
        <div className="h-full overflow-hidden bg-[#efefef] transition-all duration-300">
          {/* // @ts-expect-error Server Component */}
          <ProductDetail {...props} />
        </div>
      </div>
    </main>
  );
}

async function ProductDetail({ searchParams }: PageType) {
  const hits = await elService({ ids: Object.values(searchParams) });
  return (
    <div className="relative h-full w-full">
      <div className="relative flex h-full w-full flex-col items-center justify-center">
        {hits.map((product, idx) => (
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
              className="h-full w-full object-contain"
            />
            <p style={{ marginLeft: 100 * (idx + 1) }}>position: {product.position || '-'}</p>
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
