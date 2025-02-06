import { Footer } from '@/components/footer';
import { DynamicComponent } from '@/components/pages/page/dynamic-component';

export default async function SlugPage({ params: { slug, locale } }: SlugPageProps) {
  return (
    <>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-expect-error */}
      <DynamicComponent slug={`/${locale}/${slug}`} />
      <Footer />
    </>
  );
}

export interface SlugPageProps {
  params: {
    locale: string;
    slug: string;
  };
}
