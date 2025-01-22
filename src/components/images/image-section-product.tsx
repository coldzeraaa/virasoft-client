'use client';

import React, { useState } from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid';
import Image from 'next/image';

import { imageUrlHelper } from '@/lib/helper/img-url-helper';

export function ImageSectionProduct({ images, alt }: { images: string[]; alt: string }) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <section aria-label="images section" className="grid gap-3 md:grid-cols-[auto,1fr]">
      <ul aria-label="images" className="flex h-20 gap-2 lg:block lg:h-auto lg:w-20 lg:space-y-4">
        {images.map((img, idx) => (
          <li key={idx} className="flex aspect-square">
            <button
              type="button"
              onClick={() => setSelected(idx)}
              className={`rounded-lg border-2 transition-colors ${idx === selected ? 'border-primary' : 'border-transparent'}`}
            >
              <Image
                src={imageUrlHelper(img)}
                alt={alt}
                width={0}
                height={0}
                className="aspect-square w-full rounded-lg bg-base-200 object-contain"
              />
            </button>
          </li>
        ))}
      </ul>
      <div className="relative h-full max-h-[530px]">
        <Image
          src={imageUrlHelper(images[selected])}
          alt={alt}
          width={0}
          height={0}
          className="aspect-square h-full w-full rounded-lg bg-base-300 object-contain object-center"
        />
        {images.length > 1 && (
          <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-4">
            <button
              type="button"
              disabled={selected === 0}
              onClick={() => {
                if (selected === 0) return;
                setSelected(selected - 1);
              }}
              className="btn btn-sm"
            >
              <ChevronLeftIcon className="w-4" />
            </button>
            <button
              type="button"
              disabled={selected + 1 === images.length}
              className="btn btn-sm"
              onClick={() => {
                if (selected + 1 === images.length) return;
                setSelected(selected + 1);
              }}
            >
              <ChevronRightIcon className="w-4" />
            </button>
          </div>
        )}
      </div>
      {images.map((img, idx) => (
        <link itemProp="image" href={imageUrlHelper(img)} key={idx} />
      ))}
    </section>
  );
}
