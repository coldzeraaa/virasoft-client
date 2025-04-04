import Link from "next/link";
import { notFound } from "next/navigation";

import { GridContainer } from "./container/grid-container";
import { ComponentSwitcher } from "./component";
import type { GridContainerProps, Item } from "./dynamic-component.d";

import { ErrorResult } from "@/components/result/error-result";
import {
  CurrentPageDocument,
  CurrentPageQuery,
} from "@/gql/query/page/current-page.generated";
import { query } from "@/lib/service/apollo-client-service";

export async function DynamicComponent({ slug }: { slug: string }) {
  try {
    const { data, error } = await query<CurrentPageQuery>({
      query: CurrentPageDocument,
      variables: { slug },
    });

    if (error || !data?.currentPage)
      return <ErrorResult message={error?.message || "Page not found"} />;

    const { items } = data.currentPage;

    const resolvedItems = await Promise.all(
      items.map(async (item: Item) => {
        const component = await Switcher(item);
        return { ...item, component };
      }),
    );

    return (
      <main className="container space-y-4">
        {Array.isArray(items) &&
          resolvedItems.map((item: Item, idx) =>
            item.link ? (
              <Link key={idx} href={item.link}>
                <section key={idx}>{item.component}</section>
              </Link>
            ) : (
              <section key={idx}>{item.component}</section>
            ),
          )}
      </main>
    );
  } catch (error) {
    console.warn({ error });
    notFound();
  }
}

export async function Switcher({ component, ...rest }: Item) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  if (component.endsWith("container"))
    return <GridContainer {...(rest as GridContainerProps)} />;
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <ComponentSwitcher component={component} {...rest} />;
}
