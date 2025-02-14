'use client';

import { times } from 'lodash';
import { useInstantSearch } from 'react-instantsearch';
import { useHits } from 'react-instantsearch-core';

import { EmptyResult } from '@/components/result/empty-result';
import { ProductSingle } from '@/components/single/product-single';
import type { HitType } from '@/types/hit-type';

export function BaseHits() {
  const { hits, results } = useHits<HitType>();

  return (
    <ul className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      <Loader hits={hits} dfl={results?.disjunctiveFacets?.length || 0} />
    </ul>
  );
}

function Loader({ hits, dfl }: { hits: Array<HitType>; dfl: number }) {
  const { status } = useInstantSearch();

  if (status === 'stalled' || (dfl === 0 && hits.length === 0))
    return times(8, (n) => (
      <li key={n} className="grid gap-2">
        <div className="skeleton aspect-square w-full" />
        <div className="skeleton h-12 w-full" />
        <div className="skeleton h-6 w-full" />
      </li>
    ));

  if (hits.length === 0)
    return (
      <li className="col-span-12">
        <EmptyResult />
      </li>
    );

  return hits.map((hit, idx) => (
    <li key={idx}>
      <ProductSingle {...hit} />
    </li>
  ));
}
