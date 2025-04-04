"use client";

import {
  ImageComponent,
  type ImageComponentProps,
} from "@/components/pages/page/component/image";
import {
  TextComponent,
  type TextComponentProps,
} from "@/components/pages/page/component/text";
import { ErrorResult } from "@/components/result/error-result";
import { LoadingResult } from "@/components/result/loading-result";
import { useCurrentPageQuery } from "@/gql/query/page/current-page.generated";

export function PageClient({ slug }: { slug: string }) {
  const { data, loading, error } = useCurrentPageQuery({ variables: { slug } });

  if (loading) return <LoadingResult />;
  if (error || !data?.currentPage)
    return <ErrorResult message={error?.message || "Page not found"} />;

  const { items } = data.currentPage;

  return (
    Array.isArray(items) &&
    items.map((item: Item, idx) => (
      <section key={idx}>
        <Switcher {...item} />
      </section>
    ))
  );
}

function Switcher({ component, ...rest }: Item) {
  switch (component) {
    case "image":
      return <ImageComponent {...(rest as ImageComponentProps)} />;
    case "text":
      return <TextComponent {...(rest as TextComponentProps)} />;
    default:
      return null;
  }
}

type Item = { component: string };
