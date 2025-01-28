import { headers } from 'next/headers';

import { BaseHits } from '@/components/algolia/base-hits';
import { SearchProvider } from '@/lib/provider/search-provider';

export default async function Page({
  params,
  searchParams,
}: {
  params: { slug: string[]; locale: string };
  searchParams?: Record<string, string>;
}) {
  const headersList = headers();
  const origin = `${headersList.get('x-forwarded-proto') || 'http'}://${headersList.get('host')}`;

  return (
    <>
      <SearchProvider
        origin={origin}
        slug={params.slug}
        referer={`${origin}/s${params.slug ? `/${params.slug.join('/')}` : ''}${searchParams ? `?${new URLSearchParams(searchParams)}` : ''}`}
      >
        <div className="container max-w-7xl py-3">
          <div className="grid md:grid-cols-12 md:gap-8">
            <aside className="broder-base-concent hidden h-fit divide-y overflow-hidden rounded-lg border md:col-span-3 md:block">
              Filters
            </aside>
            <div className="space-y-6 md:col-span-9">
              <div className="flex flex-col items-center justify-between lg:flex-row">
                <div className="flex flex-1 gap-2">Title</div>
                <div className="hidden md:block">Sort</div>
              </div>
              <BaseHits />
            </div>
          </div>
        </div>
      </SearchProvider>
    </>
  );
}

export const dynamic = 'force-dynamic';
