import { DynamicComponent } from '@/components/pages/page/dynamic-component';

export default async function SlugPage({ params: { slug, locale } }: SlugPageProps) {
  return <DynamicComponent slug={`/${locale}/${slug}`} />;
}

export interface SlugPageProps {
  params: {
    locale: string;
    slug: string;
  };
}
