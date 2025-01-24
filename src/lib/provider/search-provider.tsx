'use client';

import { ReactNode } from 'react';

import Client from '@searchkit/instantsearch-client';
import { KSRouterInstance, type TRouteState } from 'ks-instantsearch-routing';
import singletonRouter from 'next/router';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import { createInstantSearchRouterNext } from 'react-instantsearch-router-nextjs';

import { APP_CONFIG } from '@/configs/APP_CONFIG';

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
    </InstantSearchNext>
  );
}

function windowTitle({ query }: TRouteState): string {
  // const queryTitle = ;
  return query ? `Results for "${query}"` : `Search`;
}
