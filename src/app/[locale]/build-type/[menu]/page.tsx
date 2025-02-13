import { Suspense } from 'react';

import { ImageBuildPageClient } from '@/components/page-client/build-type/image-build-page-client';
import { BuildTypeProvider } from '@/lib/context/build-type-context';

export default function BuildTypeType() {
  return (
    <Suspense fallback={<div className="skeleton aspect-square w-full" />}>
      <BuildTypeProvider>
        <ImageBuildPageClient />
      </BuildTypeProvider>
    </Suspense>
  );
}
