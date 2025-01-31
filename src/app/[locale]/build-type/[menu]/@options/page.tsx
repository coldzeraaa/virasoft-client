import React from 'react';

import Image from 'next/image';

import { ButtonPersistSearchParams } from '@/components/build/btn-persist-search-params';
import { ErrorResult } from '@/components/result/error-result';
import { AllMenusDocument, AllMenusQuery } from '@/gql/query/menu/list.generated';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { getClient } from '@/lib/service/apollo-client-service';

export default function BuildTypeOptionsPage({ params }: BuildTypeOptionsPageProps) {
  return <Menu type={params.menu} />;
}

async function Menu({ type }: { type: string }) {
  const { data, error } = await getClient().query<AllMenusQuery>({
    query: AllMenusDocument,
    variables: { filter: { parent: { icon: { eq: type } } } },
  });

  if (!data?.allMenus || error) return <ErrorResult message={error?.message || 'No menu'} />;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="h-full w-full overflow-y-auto p-4 lg:px-4">
        <div className="flex h-full w-full flex-row gap-4 lg:flex-col">
          {data.allMenus.nodes.map((menu, idx) => (
            <ButtonPersistSearchParams
              key={`${menu.title}-${idx}`}
              className="rounded border-2 border-transparent p-0.5 hover:border-primary"
              href={`/build-type/${type}/${menu.icon}`}
            >
              <div className="group relative flex h-full flex-col items-center lg:flex-row">
                <div className="aspect-square h-20 w-20 overflow-hidden rounded-md md:h-28 md:w-28 lg:h-full">
                  <Image
                    src={imageUrlHelper(menu.images?.[0])}
                    alt={menu.title}
                    width={116}
                    height={116}
                    className="h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-grow px-4 pt-3">
                  <div className="text-sm font-light text-base-content group-hover:text-base-content lg:text-lg lg:font-semibold">
                    {menu.title}
                  </div>
                </div>
              </div>
            </ButtonPersistSearchParams>
          ))}
        </div>
      </div>
    </div>
  );
}

export interface BuildTypeOptionsPageProps {
  params: { menu: string };
}
