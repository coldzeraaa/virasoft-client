import Image from 'next/image';

import { imageUrlHelper } from '@/lib/helper/img-url-helper';

export function ImageComponent({ images = [], description = '' }: ImageComponentProps) {
  const [image] = images;
  if (!image) return null;
  return <Image width={0} height={0} src={imageUrlHelper(image.url)} alt={description} className="w-full" />;
}

export interface ImageComponentProps {
  images: { id: string; url: string }[];
  description: string;
}
