import { GridContainer } from './container/grid-container';
import { ComponentSwitcher } from './component';
import type { GridContainerProps, Item } from './dynamic-component.d';

import { ErrorResult } from '@/components/result/error-result';
import { CurrentPageDocument, CurrentPageQuery } from '@/gql/query/page/current-page.generated';
import { getClient } from '@/lib/service/apollo-client-service';

export async function DynamicComponent({ slug }: { slug: string }) {
  const { data, error } = await getClient().query<CurrentPageQuery>({ query: CurrentPageDocument, variables: { slug } });

  if (error || !data?.currentPage) return <ErrorResult message={error?.message || 'Page not found'} />;

  const { items } = data.currentPage;

  const resolvedItems = await Promise.all(
    items.map(async (item: Item) => {
      const component = await Switcher(item);
      return { ...item, component };
    }),
  );

  return (
    <main className="container space-y-4">
      {Array.isArray(items) && resolvedItems.map((item: Item, idx) => <section key={idx}>{item.component}</section>)}
    </main>
  );
}

export async function Switcher({ component, ...rest }: Item) {
  if (component.endsWith('container')) return <GridContainer {...(rest as GridContainerProps)} />;
  return <ComponentSwitcher component={component} {...rest} />;
}
