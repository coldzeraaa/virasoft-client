import { HOST_CONFIG } from '@/configs/HOST_CONFIG';

export function imageUrlHelper(image?: unknown, size?: number): string {
  if (!image || typeof image !== 'string') return `https://via.placeholder.com/${size || '80'}?text=image`;
  if (image.startsWith('/')) return `${HOST_CONFIG.host}${image}`;
  return image;
}
