import { DynamicComponent } from '@/components/pages/page/dynamic-component';

export default async function SlugPage({ params: { slug, locale } }: SlugPageProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <DynamicComponent slug={`/${locale}/${slug}`} />;
}

export interface SlugPageProps {
  params: {
    locale: string;
    slug: string;
  };
}
