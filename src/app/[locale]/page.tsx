import { DynamicComponent } from '@/components/pages/page/dynamic-component';

export default async function Home({ params }: { params: { locale: string } }) {
  // @ts-expect-error Server Component
  return <DynamicComponent slug={`/${params.locale}`} />;
}
