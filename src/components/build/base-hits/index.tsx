'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useHits } from 'react-instantsearch-core';

import { BuildItemType } from '@/types/build-item-type';

export function BaseHits({ type }: { type: string }) {
  const { items } = useHits<BuildItemType>();
  const searchParams = useSearchParams();
  const params = Object.fromEntries(searchParams.entries());
  const selected = params?.[type];

  return (
    <div>
      <ul className="space-y-2">
        {items.map((hit, idx) => (
          <li
            key={idx}
            className={`flex gap-2 rounded-lg border p-2 ${`${hit.id}` === selected ? 'border-primary' : 'border-transparent'}`}
          >
            <Link href={`?${new URLSearchParams({ ...params, [type]: hit.id }).toString()}`}>
              <Image
                className="aspect-square w-20 rounded-lg border border-base-content bg-base-200 object-cover"
                src="https://i0.wp.com/picjumbo.com/wp-content/uploads/silhouette-of-a-guy-with-a-cap-at-red-sky-sunset-free-image.jpeg?h=800&quality=80"
                alt="placeholder"
                height={100}
                width={100}
              />
              <div>
                <h3>{hit.name}</h3>
                <p className="text-xs">{hit.options.join(', ')}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
