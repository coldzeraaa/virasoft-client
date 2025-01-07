import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

interface CategoryCardProps {
  href: string;
  text: string;
  imageSrc: string;
  imageAlt?: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ href, text, imageSrc = '/api/placeholder/116/116', imageAlt = '' }) => (
  <Link href={href}>
    <div className="group relative flex h-full flex-col items-center lg:flex-row">
      <div className="aspect-square h-[88px] w-[88px] overflow-hidden rounded-md md:h-[116px] md:w-[116px] lg:h-full">
        <Image
          src={`https://api.virasoft.mn${imageSrc}`}
          alt={imageAlt}
          width={116}
          height={116}
          className="h-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="flex-grow px-4 pt-3">
        <div className="text-sm font-light text-gray-800 group-hover:text-gray-400 lg:text-lg lg:font-semibold">{text}</div>
      </div>
    </div>
  </Link>
);

export default CategoryCard;
