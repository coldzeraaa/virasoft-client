import { DynamicComponent } from "@/components/pages/page/dynamic-component";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  return (
    <>
      {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
      {/*@ts-expect-error */}
      <DynamicComponent slug={`/${locale}`} />
    </>
  );
}
