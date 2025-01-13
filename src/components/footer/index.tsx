'use client';

import { useState } from 'react';

import { Bars3BottomLeftIcon, HeartIcon, HomeIcon, StarIcon, TagIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

import { useHeaderFooterQuery } from '@/gql/query/menu/header-footer.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
export function Footer() {
  const [activeTab, setActiveTab] = useState('home');
  const { data, loading } = useHeaderFooterQuery({
    variables: { filter: { title: { in: ['header', 'footer'] } } },
  });
  const { data: userData } = useMeQuery();

  if (loading) {
    return (
      <>
        <footer className="hidden w-full bg-base-100 md:block">
          <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-8">
              {[...Array(3)].map((_, idx) => (
                <div key={idx}>
                  <div className="mb-4 h-6 w-1/2 bg-base-content" />
                  <div className="flex flex-col space-y-2">
                    {[...Array(4)].map((__, childIdx) => (
                      <div key={childIdx} className="h-4 w-3/4 bg-base-content" />
                    ))}
                  </div>
                </div>
              ))}
              {[...Array(3)].map((_, idx) => (
                <div key={idx}>
                  <div className="mb-4 h-6 w-1/2 bg-base-content" />
                  <div className="flex flex-col space-y-2">
                    {[...Array(4)].map((__, childIdx) => (
                      <div key={childIdx} className="h-4 w-3/4 bg-base-content" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </footer>
        {/* Mobile footer skeleton */}
        <div className="fixed bottom-0 left-0 right-0 bg-base-100 md:hidden">
          <div className="flex flex-row justify-between p-2">
            {[...Array(6)].map((_, idx) => (
              <div key={idx}>
                <div className="h-10 w-10 animate-pulse rounded-md bg-base-content"></div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <footer className="hidden w-full border-t bg-primary text-base-100 md:block">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-8">
            {data?.menus.nodes[1].children?.map((item, idx) => (
              <div key={idx}>
                <h5 className="mb-4 text-xl text-secondary">{item.title}</h5>
                <div className="flex flex-col space-y-2">
                  {item.children?.map((childMenu) => (
                    <div key={childMenu.title}>
                      {['facebook', 'instagram'].includes(childMenu.title.toLowerCase()) ? (
                        <Link href={childMenu.link} className="flex items-center gap-2 text-sm font-medium">
                          <Image src={imageUrlHelper(childMenu?.images?.[0])} alt={`${childMenu.title} logo icon`} width={16} height={16} />
                          {childMenu.title}
                        </Link>
                      ) : (
                        <Link href={childMenu.link} className="text-sm font-medium">
                          {childMenu.title}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
      {/* Mobile Footer - Hidden on desktop */}
      <div className="fixed bottom-0 left-0 right-0 border-t bg-base-100 md:hidden">
        <nav className="sm:px-4">
          <div className="grid grid-cols-6 gap-1">
            {mobileFooter.map((tab) => (
              <Link
                href={tab.link === '/profile' ? (userData?.me ? '/profile' : '/auth/login') : tab.link}
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex flex-col items-center justify-center py-2 ${activeTab === tab.key ? 'text-secondary' : 'text-gray-500'}`}
              >
                <tab.icon className="h-6 w-6" />
                <span className="dm:text-xs mt-1 text-[11px]">
                  {tab.label === 'Профайл' ? (userData?.me ? 'Профайл' : 'Нэвтрэх') : tab.label}
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}

const mobileFooter = [
  { key: 'home', label: 'Нүүр', icon: HomeIcon, link: '/' },
  { key: 'categories', label: 'Ангилал', icon: Bars3BottomLeftIcon, link: '/s' },
  { key: 'featured', label: 'Онцлох', icon: StarIcon, link: '/featured' },
  { key: 'brands', label: 'Брэндүүд', icon: TagIcon, link: '/brands' },
  { key: 'wishlist', label: 'Хадгалсан', icon: HeartIcon, link: '/wishlist' },
  { key: 'profile', label: 'Профайл', icon: UserCircleIcon, link: '/profile' },
];
