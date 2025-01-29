'use client';

import { useState } from 'react';

import { BaseHits } from './base-hits';
import CategoryCard from './category-card';

import { useAllMenusQuery } from '@/gql/query/menu/list.generated';
import { BuildProvider } from '@/lib/provider/build-provider';

export function ProductList({ origin, type }: { origin: string; type?: string | string[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { data, loading } = useAllMenusQuery({ variables: { filter: { parentId: { eq: '9' } } } });

  const normalizedType = Array.isArray(type) ? type[0] : type;

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="h-full w-full overflow-y-auto p-4 lg:px-4">
        {loading ? (
          <div className="flex h-full w-full flex-row gap-4 lg:flex-col">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="skeleton h-28 w-full max-w-32 rounded-lg bg-base-300 p-4 lg:max-w-xs"></div>
            ))}
          </div>
        ) : !selectedCategory ? (
          <div className="flex h-full w-full flex-row gap-4 lg:flex-col">
            {data?.allMenus.nodes
              .find((menu) => menu.icon === normalizedType)
              ?.children?.map((menuItem, index) => (
                <button type="button" key={`${menuItem.title}-${index}`} onClick={() => setSelectedCategory(menuItem.icon ?? null)}>
                  <CategoryCard href={menuItem.link} text={menuItem.title} imageSrc={menuItem.images?.[0] || ''} />
                </button>
              ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <button onClick={() => setSelectedCategory(null)} type="button" className="btn">
              Буцах
            </button>
            <div className="w-full">
              <BuildProvider origin={origin} type={selectedCategory}>
                <BaseHits type={selectedCategory} />
              </BuildProvider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
