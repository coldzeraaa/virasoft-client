import { headers } from 'next/headers';

import { ProductDetail } from '@/components/build/product-detail';
import { ProductList } from '@/components/build/product-list';
import { BuildPageClient } from '@/components/page-client/build/build-page-client';

export default function BuildPage({ params }: BuildPageProps) {
  const headersList = headers();
  const origin = `${headersList.get('x-forwarded-proto') || 'http'}://${headersList.get('host')}`;

  if (!params?.type) {
    return (
      <div className="h-full w-full px-4 py-12 sm:px-6 lg:px-8">
        <BuildPageClient />
      </div>
    );
  }
  return (
    <main className="grid h-[calc(100vh-44px)] grid-rows-[70fr_30fr] lg:flex lg:h-[calc(100vh-80px)] lg:flex-row">
      {/* Left Section: Image */}
      <div className="h-full lg:w-[70%] lg:flex-1">
        <div className="h-full overflow-hidden bg-[#efefef] transition-all duration-300">
          <ProductDetail />
        </div>
      </div>

      {/* Right Section: Menu */}
      <div className="h-full w-full overflow-hidden bg-white lg:h-full lg:min-h-0 lg:w-[30%]">
        <div className="h-full overflow-hidden">
          <ProductList type={params?.type} origin={origin} />
        </div>
      </div>
    </main>
  );
}

interface BuildPageProps {
  params: {
    type?: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}
