import { ChevronLeftIcon } from '@heroicons/react/16/solid';
import { headers } from 'next/headers';

import { BaseHits } from '@/components/build/base-hits';
import { ButtonPersistSearchParams } from '@/components/build/btn-persist-search-params';
import { ProductDetail } from '@/components/build/product-detail';
import { BuildProvider } from '@/lib/provider/build-provider';

export default function BuildSlugPage({ searchParams, params }: BuildSlugPageProps) {
  const type = params.type?.['0'];
  const headersList = headers();
  const origin = `${headersList.get('x-forwarded-proto') || 'http'}://${headersList.get('host')}`;

  return (
    <main className="container grid grid-cols-[1fr,300px] gap-4 ">
      <ProductDetail />
      <ProductList type={type} origin={origin} searchParams={searchParams} />
    </main>
  );
}

function ProductList({ origin, type }: { origin: string; searchParams?: Record<string, string>; type?: string }) {
  if (!type)
    return (
      <ul>
        <li className="space-y-2">
          <ButtonPersistSearchParams href="/build/coat">coat</ButtonPersistSearchParams>
          <ButtonPersistSearchParams href="/build/button">button</ButtonPersistSearchParams>
          <ButtonPersistSearchParams href="/build/lining">lining</ButtonPersistSearchParams>
        </li>
      </ul>
    );

  return (
    <div>
      <ButtonPersistSearchParams href="/build">
        <ChevronLeftIcon className="w-4" />
        Back
      </ButtonPersistSearchParams>
      <BuildProvider key={`build_${type}`} origin={origin} type={type}>
        <BaseHits type={type} />
      </BuildProvider>
    </div>
  );
}

interface BuildSlugPageProps {
  params: { type: string[]; locale: string };
  searchParams?: Record<string, string>;
}
