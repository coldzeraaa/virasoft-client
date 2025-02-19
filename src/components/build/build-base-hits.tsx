'use client';

import { times } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useInstantSearch } from 'react-instantsearch';
import { useHits } from 'react-instantsearch-core';

import { EmptyResult } from '@/components/result/empty-result';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { BuildItemType } from '@/types/build-item-type';

// export function BuildBaseHits(props: BaseHitsProps) {
export function BuildBaseHits({ type }: { type: string }) {
  const { hits, results } = useHits<BuildItemType>();
  // const { selectedProducts, selectProduct } = useBuild();

  return (
    <ul className="space-y-2">
      <Loader hits={hits} dfl={results?.disjunctiveFacets?.length || 0} type={type} />
    </ul>
  );
}

function Loader({ hits, dfl, type }: { hits: Array<BuildItemType>; dfl: number; type: string }) {
  const { status } = useInstantSearch();

  if (status === 'stalled' || (dfl === 0 && hits.length === 0))
    return times(4, (n) => (
      <li key={n}>
        <div className="flex items-center gap-4 rounded-md border border-transparent p-2 transition hover:shadow-xl">
          <div className="skeleton aspect-square h-20 min-h-20" />
          <div className="skeleton h-10 w-full" />
        </div>
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
      <SingleProduct type={type} {...hit} />
    </li>
  ));
}

function SingleProduct({ images, name, title, id, type }: BuildItemType & { type: string }) {
  const searchParams = useSearchParams();
  const searchParamsAsObj = Object.fromEntries(searchParams.entries());
  const isSelected = searchParamsAsObj[type] === `${id}`;

  return (
    <Link
      href={{ query: { ...searchParamsAsObj, [type]: id } }}
      className={`group relative flex items-center gap-4 overflow-hidden rounded-md border p-2 transition-all ${isSelected ? 'border-[#102F31]/50' : 'hover:border-[#102F31]/20 hover:shadow-[#102F31]/20'}`}
    >
      <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="animate-shine absolute -left-[100%] -top-[200%] h-[500%] w-[150%] bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f0_0%,#102F31_25%,#e2e8f0_50%)] opacity-60 blur-xl" />
      </div>
      <Image
        src={imageUrlHelper(images[0])}
        alt={name}
        className="aspect-square w-20 min-w-20 rounded-md bg-base-300 object-contain transition-transform duration-300 group-hover:scale-105"
        width={80}
        height={80}
      />
      <p className="text-xl font-semibold transition-transform duration-300 group-hover:translate-x-2">{title}</p>
      <div className="absolute inset-0 -z-10 bg-white/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Link>
  );
}
