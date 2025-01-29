'use client';

import React from 'react';

import Image from 'next/image';
import { useHits } from 'react-instantsearch-core';

import { useBuild } from '@/lib/context/build-context';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { BuildItemType } from '@/types/build-item-type';

export const BaseHits: React.FC<BaseHitsProps> = ({ type }) => {
  const { hits } = useHits<BuildItemType>();
  const { selectedProducts, selectProduct } = useBuild();

  return (
    <div className="h-full w-full">
      <div className="flex flex-nowrap gap-2 overflow-x-auto lg:flex-col lg:space-y-2 lg:overflow-x-visible">
        {hits.map((hit) => (
          <div key={hit.id} className="relative flex-shrink-0">
            <button
              onClick={() => selectProduct(type, hit.id)}
              type="button"
              className={`relative flex w-full cursor-pointer flex-col items-center gap-1 rounded-lg border transition-all duration-150 ease-linear hover:border-primary-content md:gap-2 lg:flex-row lg:gap-3 lg:p-1 ${selectedProducts[type] === `${hit.id}` ? 'border-neutral-content' : 'border-base-300'}`}
            >
              <div
                className={`relative aspect-square h-20
                    w-20 overflow-hidden rounded-md md:h-28 md:w-28`}
              >
                <div className="h-full w-full lg:p-0">
                  <div className="relative flex h-full w-full items-center justify-center md:h-28">
                    <Image
                      src={hit.images[1] ? imageUrlHelper(hit.images[1]) : imageUrlHelper(hit.images[0])}
                      alt={hit.name}
                      className="h-4/5 w-4/5 rounded-md object-cover"
                      width={116}
                      height={116}
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center overflow-hidden lg:w-2/3">
                <div className="max-w-20 truncate text-base text-base-content md:max-w-28 lg:max-w-full lg:text-start lg:text-lg lg:font-semibold">
                  {hit.title}
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

interface BaseHitsProps {
  type: string;
}
