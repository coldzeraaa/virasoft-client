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
    <ul className="">
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
      className={`flex items-center gap-4 rounded-md border p-2 transition hover:shadow-xl ${isSelected ? 'border-primary' : 'border-transparent'}`}
    >
      <Image
        src={imageUrlHelper(images[0])}
        alt={name}
        className="aspect-square w-20 min-w-20 rounded-md bg-base-300 object-contain"
        width={0}
        height={0}
      />
      <p className="text-xl font-semibold">{title}</p>
    </Link>
  );
}
