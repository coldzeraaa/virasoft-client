'use client';

import { ReactNode, useMemo } from 'react';

import Client from '@searchkit/instantsearch-client';
import { InstantSearchNext } from 'react-instantsearch-nextjs';

import { APP_CONFIG } from '@/configs/APP_CONFIG';

export function BuildProvider({ children, origin, type }: { children: ReactNode; origin: string; type: string }) {
  const url = useMemo(() => (typeof window === 'undefined' ? `${origin}/api/build/${type}` : `/api/build/${type}`), [type]);
  const searchClient = useMemo(() => Client({ url }), [url]);

  return (
    <InstantSearchNext
      future={{ preserveSharedStateOnUnmount: true }}
      indexName={APP_CONFIG.appIndex}
      searchClient={searchClient}
      routing={false}
      initialUiState={{ [APP_CONFIG.appIndex]: { query: '', page: 1, sortBy: undefined } }}
      key={type}
    >
      {children}
    </InstantSearchNext>
  );
}

// const options = [
//   { value: 'default', label: 'Default' },
//   { value: 'new', label: 'Newest' },
//   { value: 'earliest', label: 'Oldest' },
//   { value: 'cheap', label: 'Price: Low to High' },
//   { value: 'expensive', label: 'Price: High to Low' },
//   { value: 'sale', label: 'Sale' },
// ];
