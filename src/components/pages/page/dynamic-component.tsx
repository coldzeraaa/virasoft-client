import { ImageComponent, type ImageComponentProps } from '@/components/pages/page/component/image';
import { ProductComponent, type ProductComponentProps } from '@/components/pages/page/component/product';
import { TextComponent, type TextComponentProps } from '@/components/pages/page/component/text';
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
    <main className="container">
      {Array.isArray(items) && resolvedItems.map((item: Item, idx) => <section key={idx}>{item.component}</section>)}
    </main>
  );
}

export async function Switcher({ component, ...rest }: Item) {
  switch (component) {
    case 'image':
      return <ImageComponent {...(rest as ImageComponentProps)} />;
    case 'text':
      return <TextComponent {...(rest as TextComponentProps)} />;
    case 'product':
      return <ProductComponent {...(rest as ProductComponentProps)} />;
    default:
      return null;
  }
}

export type Item = { component: string };
