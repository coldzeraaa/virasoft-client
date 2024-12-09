'use client';

import { ReactNode, Suspense } from 'react';

import { i18n } from '@lingui/core';
import { t as trans } from '@lingui/macro';
import Client from '@searchkit/instantsearch-client';
import { KSRouterInstance, type TRouteState } from 'ks-instantsearch-routing';
import singletonRouter from 'next/router';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';

import { SearchBoxDefine } from '@/components/algolia/search-box-define';
import { APP_CONFIG } from '@/configs/app-config';
import { TAXONOMY } from '@/lib/constant/taxonomy-constant';

export const searchClient = Client({ url: '/api/search' });

const router = new KSRouterInstance({
  indexKey: APP_CONFIG.appIndex,
  createInstantSearchRouter: createInstantSearchRouterNext,
  singletonRouter,
  windowTitle,
});

export function SearchProvider({ children, origin, referer }: { children: ReactNode; origin: string; slug?: string[]; referer: string }) {
  return (
    <InstantSearchNext
      future={{ preserveSharedStateOnUnmount: true }}
      indexName={APP_CONFIG.appIndex}
      searchClient={typeof window === 'undefined' ? Client({ url: `${origin}/api/search` }) : searchClient}
      initialUiState={{ [APP_CONFIG.appIndex]: { query: '', page: 1, sortBy: undefined } }}
      routing={router.routing(referer)}
    >
      {children}
      <Suspense>
        <SearchBoxDefine />
      </Suspense>
    </InstantSearchNext>
  );
}

function windowTitle({ t, query }: TRouteState): string {
  const queryTitle = query ? trans`Results for "${query}"` : trans`Search`;
  if (t) return TAXONOMY[i18n.locale][t[t.length - 1]] || t[t.length - 1];
  return queryTitle;
}
