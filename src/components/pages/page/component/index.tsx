import type { Item } from "../dynamic-component.d";

import {
  ImageComponent,
  type ImageComponentProps,
} from "@/components/pages/page/component/image";
import {
  ProductComponent,
  type ProductComponentProps,
} from "@/components/pages/page/component/product";
import {
  TextComponent,
  type TextComponentProps,
} from "@/components/pages/page/component/text";

export async function ComponentSwitcher({ component, ...rest }: Item) {
  switch (component) {
    case "image":
      return <ImageComponent {...(rest as ImageComponentProps)} />;
    case "text":
      return <TextComponent {...(rest as TextComponentProps)} />;
    case "product":
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      return <ProductComponent {...(rest as ProductComponentProps)} />;
    default:
      return null;
  }
}
