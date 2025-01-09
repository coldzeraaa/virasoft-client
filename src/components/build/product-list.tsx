'use client';

import { useState } from 'react';

import { BaseHits } from './base-hits';
import CategoryCard from './category-card';

import { type MenusQuery, useMenusQuery } from '@/gql/query/menu/list.generated';
import { BuildProvider } from '@/lib/provider/build-provider';

export function ProductList({ origin, type }: { origin: string; type?: string | string[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data, loading } = useMenusQuery({
    variables: {
      filter: {
        parentId: { eq: '9' },
      },
    },
  });

  const selectedMenu = getMenuByType(data, type);

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="h-full w-full overflow-y-auto p-4 lg:px-4">
        {loading ? (
          <div className="flex h-full w-full flex-row gap-4 lg:flex-col">
            {Array.from({ length: 3 }).map((_, idx) => (
              <div key={idx} className="h-28 w-full max-w-32 animate-pulse rounded-lg bg-base-300 p-4 lg:max-w-xs"></div>
            ))}
          </div>
        ) : !selectedCategory ? (
          <div className="flex h-full w-full flex-row gap-4 lg:flex-col">
            {selectedMenu?.children?.map((menuItem, index) => (
              <button type="button" key={`${menuItem.title}-${index}`} onClick={() => setSelectedCategory(menuItem.title)}>
                <CategoryCard href="#" text={menuItem.title} imageSrc={menuItem.images?.[0] || ''} />
              </button>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="sticky left-0 top-0 z-10 bg-white">
              <button onClick={() => setSelectedCategory(null)} type="button" className="flex items-center gap-2 text-sm text-neutral">
                Буцах
              </button>
            </div>
            <div className="w-full">
              <BuildProvider origin={origin} type={getProductType(selectedCategory)}>
                <BaseHits type={getProductType(selectedCategory)} />
              </BuildProvider>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function getMenuByType(data: MenusQuery | undefined, menuType: string | string[] | undefined) {
  if (!data?.menus.nodes) return null;

  const type = Array.isArray(menuType) ? menuType[0] : menuType;
  switch (type) {
    case 'coat':
      return data.menus.nodes.find((menu) => menu.title === 'палто');
    case 'uniform':
      return data.menus.nodes.find((menu) => menu.title === 'ажлын хувцас');
    default:
      return null;
  }
}

function getProductType(title: string): string {
  switch (title) {
    case 'доторлогоо':
      return 'lining';
    case 'товч':
      return 'button';
    case 'хүрэм':
      return 'coat';
    default:
      return '';
  }
}
