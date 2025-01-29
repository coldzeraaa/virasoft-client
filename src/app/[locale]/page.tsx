import { PageClient } from '@/components/page-client/page-client';

export default function Home({ params }: { params: { locale: string } }) {
  return <PageClient slug={`/${params.locale}`} />;
}
