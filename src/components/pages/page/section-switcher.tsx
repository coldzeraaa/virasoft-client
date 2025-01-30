import { ImageComponent, type ImageComponentProps } from '@/components/pages/page/component/image';
import { ProductComponent, type ProductComponentProps } from '@/components/pages/page/component/product';
import { TextComponent, type TextComponentProps } from '@/components/pages/page/component/text';

export async function SectionSwitcher({ component, ...rest }: Item) {
  switch (component) {
    case 'image':
      return <ImageComponent {...(rest as ImageComponentProps)} />;
    case 'text':
      return <TextComponent {...(rest as TextComponentProps)} />;
    case 'product':
      // @ts-expect-error Server Component
      return <ProductComponent {...(rest as ProductComponentProps)} />;
    default:
      return null;
  }
}

export type Item = { component: string };
