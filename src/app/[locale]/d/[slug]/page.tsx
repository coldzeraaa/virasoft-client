'use client';

import { DynamicComponent } from '@/components/pages/page/dynamic-component';

export default async function Home({ params }: { params: { slug: string } }) {
  // @ts-expect-error Server Component
  return <DynamicComponent slug={`/${params.slug}`} />;
}
