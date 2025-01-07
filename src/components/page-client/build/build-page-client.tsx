'use client';
import { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { useMenusQuery } from '../../../gql/query/menu/list.generated';
import { ImageCard } from '../../build/image-card';

export const BuildPageClient = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const { data } = useMenusQuery({
    variables: {
      filter: {
        parentId: { eq: '9' },
      },
    },
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleCardClick = (url: string) => {
    if (isMounted) {
      router.push(url);
    }
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="mx-auto flex h-full flex-wrap items-center justify-center gap-4">
      {data?.menus.nodes.map((menu, idx) => (
        <ImageCard
          key={idx}
          imageUrl={`https://api.virasoft.mn${menu.images?.[0]}`}
          title={menu.title}
          onClick={() => handleCardClick(menu.link)}
        />
      ))}
    </div>
  );
};
