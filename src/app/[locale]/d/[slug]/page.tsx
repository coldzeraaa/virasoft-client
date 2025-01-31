'use client';

import { DynamicComponent } from '@/components/pages/page/dynamic-component';

export default async function Home({ params }: { params: { slug: string } }) {
  return <DynamicComponent slug={`/${params.slug}`} />;
}
