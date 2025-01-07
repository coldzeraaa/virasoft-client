'use client';

import { useState } from 'react';

import { ArrowLeft } from 'lucide-react';

import { BaseHits } from './base-hits';
import CategoryCard from './category-card';

import { useMenusQuery } from '@/gql/query/menu/list.generated';
import { BuildProvider } from '@/lib/provider/build-provider';

export function ProductList({ origin, type }: { origin: string; type?: string }) {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const { data } = useMenusQuery({
    variables: {
      filter: {
        parentId: { eq: '9' },
      },
    },
  });

  const getMenuByType = (menuType: string | undefined) => {
    if (!data?.menus.nodes) return null;

    switch (menuType) {
      case 'coat':
        return data?.menus.nodes.find((menu) => menu.title === 'палто');
      case 'uniform':
        return data?.menus.nodes.find((menu) => menu.title === 'ажлын хувцас');
      default:
        return null;
    }
  };

  const selectedMenu = getMenuByType(type);

  const getProductType = (title: string) => {
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
  };

  const handleCategoryClick = (menuTitle: string) => {
    setSelectedCategory(menuTitle);
  };

  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      <div className="h-full w-full overflow-y-auto p-4 lg:px-4">
        {!selectedCategory ? (
          <div className="flex h-full w-full flex-row gap-4 lg:flex-col">
            {selectedMenu?.children?.map((menuItem, index) => (
              <div key={`${menuItem.title}-${index}`} onClick={() => handleCategoryClick(menuItem.title)}>
                <CategoryCard href="#" text={menuItem.title} imageSrc={menuItem.images?.[0] || ''} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Back button in a fixed container */}
            <div className="sticky left-0 top-0 z-10 bg-white">
              <button
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900"
              >
                <ArrowLeft className="h-4 w-4" />
                Буцах
              </button>
            </div>
            {/* Content container */}
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
