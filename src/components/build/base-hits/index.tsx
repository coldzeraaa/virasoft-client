'use client';

import React from 'react';

import Image from 'next/image';
import { useHits } from 'react-instantsearch-core';

import { useBuild } from '@/lib/context/build-context';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
import { BuildItemType } from '@/types/build-item-type';

interface BaseHitsProps {
  type: string;
}
export const BaseHits: React.FC<BaseHitsProps> = ({ type }) => {
  const { hits } = useHits<BuildItemType>();
  const { selectedProducts, selectProduct } = useBuild();

  return (
    <div className="h-full w-full">
      {/* Changed from flex to flex-nowrap and added overflow-x-auto for mobile */}
      <div className="flex flex-nowrap gap-2 overflow-x-auto lg:flex-col lg:space-y-2 lg:overflow-x-visible">
        {hits.map((hit) => {
          const isSelected = selectedProducts[type] === hit.id;
          return (
            <div key={hit.id} className="relative flex-shrink-0">
              <div
                onClick={() => selectProduct(type, hit.id)}
                className={`relative flex cursor-pointer
                  flex-col items-center gap-1 rounded-[4px] border transition-all duration-150
                   ease-linear hover:border-gray-300 md:gap-2  lg:flex-row lg:gap-3 lg:p-1
                  ${isSelected ? 'border-gray-400' : 'border-gray-200'}`}
              >
                <div
                  className={`relative aspect-square h-[88px]
                    w-[88px] overflow-hidden rounded-[5px] md:h-[116px] md:w-[116px]`}
                >
                  <div className="h-full w-full lg:p-0">
                    <div className="relative flex h-full w-full items-center justify-center md:h-28">
                      <Image
                        src={hit.images[1] ? imageUrlHelper(hit.images[1]) : imageUrlHelper(hit.images[0])}
                        alt={hit.name}
                        className="h-[80%] w-[80%] rounded-[5px] object-cover"
                        width={116}
                        height={116}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-center overflow-hidden lg:w-2/3">
                  <div className="max-w-[80px] truncate text-base text-gray-800 md:max-w-[116px] lg:max-w-full lg:text-start lg:text-lg lg:font-semibold">
                    {hit.title}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
