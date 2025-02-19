'use client';

import React, { useState } from 'react';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';

import { imageUrlHelper } from '@/lib/helper/img-url-helper';

export function ImageSectionProduct({ images, alt }: { images: string[]; alt: string }) {
  const [selected, setSelected] = useState<number>(0);

  return (
    <section aria-label="images section" className="flex items-center justify-center">
      <div className="relative h-full max-h-[530px] w-full max-w-[530px]">
        <Image src={imageUrlHelper(images[selected])} alt={alt} width={0} height={0} className="h-full w-full bg-base-300 object-contain" />
        {images.length > 1 && (
          <div className="absolute top-1/2 flex w-full -translate-y-1/2 justify-between px-4">
            <button
              type="button"
              disabled={selected === 0}
              onClick={() => {
                if (selected === 0) return;
                setSelected(selected - 1);
              }}
              className="btn btn-neutral btn-sm rounded-full p-1 opacity-50"
            >
              <ChevronLeft className="w-6 stroke-1" />
            </button>
            <button
              type="button"
              disabled={selected + 1 === images.length}
              className="btn btn-neutral btn-sm rounded-full p-1 opacity-50"
              onClick={() => {
                if (selected + 1 === images.length) return;
                setSelected(selected + 1);
              }}
            >
              <ChevronRight className="w-6 stroke-1" />
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
