import { headers } from 'next/headers';

import { ButtonPersistSearchParams } from '@/components/build/btn-persist-search-params';
import { BuildBaseHits } from '@/components/build/build-base-hits';
import { BuildProvider } from '@/lib/provider/build-provider';

export default function Page({ params }: PageProps) {
  const headersList = headers();
  const origin = `${headersList.get('x-forwarded-proto') || 'http'}://${headersList.get('host')}`;

  return (
    <>
      <ButtonPersistSearchParams className="btn btn-primary btn-block mb-4" href={`/build-type/${params.menu}`}>
        Back
      </ButtonPersistSearchParams>
      <BuildProvider origin={origin} type={params.type}>
        <BuildBaseHits />
      </BuildProvider>
    </>
  );
}

interface PageProps {
  params: { locale: string; menu: string; type: string };
  searchParams: { coat: string; button: string; lining: string };
}
