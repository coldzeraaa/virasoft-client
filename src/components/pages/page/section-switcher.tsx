import { ImageComponent, type ImageComponentProps } from '@/components/pages/page/component/image';
import { TextComponent, type TextComponentProps } from '@/components/pages/page/component/text';

export function SectionSwitcher({ component, ...rest }: Item) {
  switch (component) {
    case 'image':
      return <ImageComponent {...(rest as ImageComponentProps)} />;
    case 'text':
      return <TextComponent {...(rest as TextComponentProps)} />;
    default:
      return null;
  }
}

export type Item = { component: string };
