'use client';

import { ReactNode } from 'react';

import Client from '@searchkit/instantsearch-client';
import { InstantSearchNext } from 'react-instantsearch-nextjs';

import { APP_CONFIG } from '@/configs/APP_CONFIG';

export function BuildProvider({ children, origin, type }: { children: ReactNode; origin: string; type: string }) {
  return (
    <InstantSearchNext
      future={{ preserveSharedStateOnUnmount: true }}
      indexName={APP_CONFIG.appIndex}
      searchClient={
        typeof window === 'undefined' ? Client({ url: `${origin}/api/build?type=${type}` }) : Client({ url: `/api/build?type=${type}` })
      }
      initialUiState={{ [APP_CONFIG.appIndex]: { query: '', page: 1, sortBy: undefined } }}
    >
      {children}
    </InstantSearchNext>
  );
}
