import { ChevronLeftIcon } from 'lucide-react';
import { headers } from 'next/headers';

import { ButtonPersistSearchParams } from '@/components/build/btn-persist-search-params';
import { BuildBaseHits } from '@/components/build/build-base-hits';
import { BuildProvider } from '@/lib/provider/build-provider';

export default function BuildTypeMenuOptionTypePage({ params }: PageProps) {
  const headersList = headers();
  const origin = `${headersList.get('x-forwarded-proto') || 'http'}://${headersList.get('host')}`;

  return (
    <>
      <ButtonPersistSearchParams className="btn mb-4 mt-2" href={`/build-type/${params.menu}`}>
        <ChevronLeftIcon />
        Буцах
      </ButtonPersistSearchParams>
      <BuildProvider origin={origin} type={params.type} key={params.type}>
        <BuildBaseHits type={params.type} key={params.type} />
      </BuildProvider>
    </>
  );
}

interface PageProps {
  params: { locale: string; menu: string; type: string };
  searchParams: { coat: string; button: string; lining: string };
}
