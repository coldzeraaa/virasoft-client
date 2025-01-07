import React from 'react';

import Image from 'next/image';

interface ImageCardProps {
  imageUrl: string;
  title: string;
  onClick?: () => void;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, title, onClick }) => (
  <div>
    <div
      onClick={onClick}
      className="h-40 w-40 cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl sm:h-60 lg:h-72 lg:w-72"
    >
      <div className="relative h-full w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover transition-transform duration-300 ease-in-out hover:scale-105" />
      </div>
    </div>
    <p className="text-center text-base font-medium md:text-lg lg:text-2xl">{title}</p>
  </div>
);
