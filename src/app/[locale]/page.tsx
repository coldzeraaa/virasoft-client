import { DynamicComponent } from '@/components/pages/page/dynamic-component';

export default async function Home({ params }: { params: { locale: string } }) {
  return <DynamicComponent slug={`/${params.locale}`} />;
}
