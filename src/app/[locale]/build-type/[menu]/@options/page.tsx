import React from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Image from 'next/image';

import { ButtonPersistSearchParams } from '@/components/build/btn-persist-search-params';
import { ErrorResult } from '@/components/result/error-result';
import { AllMenusDocument, AllMenusQuery } from '@/gql/query/menu/list.generated';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { getClient } from '@/lib/service/apollo-client-service';

export default function BuildTypeOptionsPage({ params }: BuildTypeOptionsPageProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <Menu type={params.menu} />;
}

async function Menu({ type }: { type: string }) {
  const { data, error } = await getClient().query<AllMenusQuery>({
    query: AllMenusDocument,
    variables: { filter: { parent: { icon: { eq: type } } } },
  });

  if (!data?.allMenus || error) return <ErrorResult message={error?.message || 'No menu'} />;

  return (
    <>
      <div className="mb-4 mt-2 flex gap-4">
        <ButtonPersistSearchParams className="btn flex flex-nowrap gap-1" href="/build-type">
          <ChevronLeftIcon />
          Буцах
        </ButtonPersistSearchParams>
        <ButtonPersistSearchParams className="btn btn-primary flex flex-1 flex-nowrap justify-between" href="/build-type/checkout">
          Худалдан авах
          <ChevronRightIcon />
        </ButtonPersistSearchParams>
      </div>
      <ul>
        {data.allMenus.nodes.map((menu, idx) => (
          <li key={idx}>
            <ButtonPersistSearchParams
              className="flex items-center gap-4 rounded p-2 transition hover:shadow-2xl"
              href={`/build-type/${type}/${menu.icon}`}
            >
              <Image
                src={imageUrlHelper(menu.images?.[0])}
                alt={menu.title}
                width={0}
                height={0}
                className="aspect-square w-20 rounded-lg bg-base-300 object-contain md:w-28"
              />
              <p className="text-xl font-semibold">{menu.title}</p>
            </ButtonPersistSearchParams>
          </li>
        ))}
      </ul>
    </>
  );
}

export interface BuildTypeOptionsPageProps {
  params: { menu: string };
}
