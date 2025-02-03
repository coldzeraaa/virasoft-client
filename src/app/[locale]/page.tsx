import { DynamicComponent } from '@/components/pages/page/dynamic-component';

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <DynamicComponent slug={`/${locale}`} />;
}
