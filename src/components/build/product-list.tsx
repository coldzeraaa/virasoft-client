'use client';

import { useState } from 'react';

import { ArrowLeft } from 'lucide-react';

import { BaseHits } from './base-hits';
import { CategoryCard } from './category-card';

import { useMenusQuery } from '@/gql/query/menu/list.generated';
import { BuildProvider } from '@/lib/provider/build-provider';

function getMenuByType(data: GraphQLResponse, menuType: string | string[] | undefined) {
  if (!data?.menus.nodes) return null;

  const menuType2 = Array.isArray(menuType) ? menuType[0] : menuType;
  switch (menuType2) {
    case 'coat':
      return data.menus.nodes.find((menu: Menu) => menu.title === 'палто');
    case 'uniform':
      return data.menus.nodes.find((menu: Menu) => menu.title === 'ажлын хувцас');
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

export function ProductList({ origin, type }: { origin: string; type?: string | string[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data } = useMenusQuery({
    variables: {
      filter: {
        parentId: { eq: '9' },
      },
    },
  });

  const selectedMenu = getMenuByType(data as GraphQLResponse, type);
  
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="h-full w-full overflow-y-auto p-4 lg:px-4">
        {!selectedCategory ? (
          <div className="flex h-full w-full flex-row gap-4 lg:flex-col">
            {selectedMenu?.children?.map((menuItem: any, index: number) => (
              <div key={`${menuItem.title}-${index}`} onClick={() => setSelectedCategory(menuItem.title)}>
                <CategoryCard href="#" text={menuItem.title} imageSrc={menuItem.images?.[0] || ''} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="sticky left-0 top-0 z-10 bg-white">
              <button onClick={() => setSelectedCategory(null)} className="flex items-center gap-2 text-sm text-neutral">
                <ArrowLeft className="h-4 w-4" />
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

interface Menu {
  __typename: string;
  id: string;
  title: string;
  link: string;
  images: string[];
  children: Menu[];
}

interface MenuConnection {
  __typename: string;
  nodes: Menu[];
}

interface GraphQLResponse {
  menus: MenuConnection;
}