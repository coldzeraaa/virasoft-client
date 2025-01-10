import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { imageUrlHelper } from '@/lib/helper/img-url-helper';

export default function CategoryCard({ href, text, imageSrc, imageAlt = '' }: CategoryCardProps) {
  return (
    <Link href={href}>
      <div className="group relative flex h-full flex-col items-center lg:flex-row">
        <div className="aspect-square h-20 w-20 overflow-hidden rounded-md md:h-28 md:w-28 lg:h-full">
          <Image src={imageUrlHelper(imageSrc)} alt={imageAlt} width={116} height={116} className="h-full object-cover" loading="lazy" />
        </div>
        <div className="flex-grow px-4 pt-3">
          <div className="text-sm font-light text-base-content group-hover:text-base-content lg:text-lg lg:font-semibold">{text}</div>
        </div>
      </div>
    </Link>
  );
}

interface CategoryCardProps {
  href: string;
  text: string;
  imageSrc: string;
  imageAlt?: string;
}
