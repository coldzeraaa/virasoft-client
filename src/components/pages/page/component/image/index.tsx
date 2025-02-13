import Image from 'next/image';

import type { ImageObject } from '@/gql/graphql';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';

export function ImageComponent({ images = [], description = '' }: ImageComponentProps) {
  const [image] = images;
  if (!image) return null;

  return <Image width={0} height={0} src={imageUrlHelper(image.url)} alt={description} className="h-fit w-full object-contain" />;
}

export interface ImageComponentProps {
  images: ImageObject[];
  description: string;
}
