'use client';

import { useState } from 'react';

import { CircleUserRound, Heart, House, Star, Tag, TextSearch } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import facebook from '@/components/icons/facebook.svg';
import instagram from '@/components/icons/instagram.svg';
import { useHeaderFooterQuery } from '@/gql/query/menu/header-footer.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';

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
          <div className="mx-auto max-w-7xl p-8">
            <div className="grid grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i}>
                  <div className="skeleton mb-4 h-6 w-1/2 rounded-sm bg-base-content" />
                  <div className="space-y-2">
                    {Array.from({ length: 4 }).map((__, j) => (
                      <div key={j} className="skeleton h-4 w-3/4 rounded-sm bg-base-content" />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </footer>
        <div className="fixed inset-x-0 bottom-0 bg-base-100 md:hidden">
          <div className="flex justify-between p-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton h-10 w-10 rounded-md bg-base-content" />
            ))}
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <footer className="hidden w-full border-t bg-primary text-accent-content md:block">
        <div className="mx-auto w-full max-w-7xl p-6 lg:py-6">
          <div className="grid grid-cols-3 gap-8">
            {data?.menus.nodes[1]?.children?.map((item, idx) => (
              <div key={idx}>
                <h5 className="mb-4 text-xl text-secondary">{item.title}</h5>
                <div className={`flex ${item.title === 'Холбоосууд' ? 'flex-row items-center gap-1' : 'flex-col space-y-2'}`}>
                  {item.children?.map((childMenu) =>
                    item.title === 'Холбоосууд' ? (
                      <div key={childMenu.title}>
                        <Link href={childMenu.link} className="text-sm font-medium">
                          {childMenu.title === 'facebook' ? (
                            <Image src={facebook} alt="facebook icon" width={20} height={20} />
                          ) : (
                            <Image src={instagram} alt="instagram icon" width={20} height={20} />
                          )}
                        </Link>
                      </div>
                    ) : (
                      <div key={childMenu.title}>
                        <Link href={childMenu.link} className="text-sm font-medium">
                          {childMenu.title}
                        </Link>
                      </div>
                    ),
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
      {/* Mobile Footer - Hidden on desktop */}
      <div className="w-full border-t bg-base-100 md:hidden">
        <nav className="sm:px-4">
          <div className="grid grid-cols-6 gap-1">
            {mobileFooter.map((tab) => (
              <Link
                href={tab.link === '/profile' ? (userData?.me ? '/profile' : '/auth/login') : tab.link}
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`flex flex-col items-center justify-center py-2 ${activeTab === tab.key ? 'text-secondary' : 'text-gray-500'}`}
              >
                <tab.icon className="h-6 w-6 stroke-1" />
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
  { key: 'home', label: 'Нүүр', icon: House, link: '/' },
  { key: 'categories', label: 'Ангилал', icon: TextSearch, link: '/s' },
  { key: 'featured', label: 'Онцлох', icon: Star, link: '/featured' },
  { key: 'brands', label: 'Брэндүүд', icon: Tag, link: '/brands' },
  { key: 'wishlist', label: 'Хадгалсан', icon: Heart, link: '/wishlist' },
  { key: 'profile', label: 'Профайл', icon: CircleUserRound, link: '/profile' },
];
