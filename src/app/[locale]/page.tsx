import { DynamicComponent } from '@/components/pages/page/dynamic-component';

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  return <DynamicComponent slug={`/${locale}`} />;
}
