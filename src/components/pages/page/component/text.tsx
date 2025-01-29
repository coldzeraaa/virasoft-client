export function TextComponent({ text = '' }: TextComponentProps) {
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}

export interface TextComponentProps {
  text: string;
}
