import { type Item, SectionSwitcher } from '@/components/pages/page/section-switcher';
import { ErrorResult } from '@/components/result/error-result';
import { CurrentPageDocument, CurrentPageQuery } from '@/gql/query/page/current-page.generated';
import { getClient } from '@/lib/service/apollo-client-service';

export default async function Home({ params }: { params: { locale: string } }) {
  const { data, error } = await getClient().query<CurrentPageQuery>({
    query: CurrentPageDocument,
    variables: { slug: `/${params.locale}` },
  });

  if (error || !data?.currentPage) return <ErrorResult message={error?.message || 'Page not found'} />;

  const { items } = data.currentPage;

  return (
    Array.isArray(items) &&
    items.map((item: Item, idx) => (
      <section key={idx}>
        <SectionSwitcher {...item} />
      </section>
    ))
  );
}
