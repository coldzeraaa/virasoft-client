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

  const resolvedItems = await Promise.all(
    items.map(async (item: Item) => {
      const component = await SectionSwitcher(item);
      return { ...item, component };
    }),
  );

  return Array.isArray(items) && resolvedItems.map((item: Item, idx) => <section key={idx}>{item.component}</section>);
}
