import Image from "next/image";
import Link from "next/link";

import { ErrorResult } from "@/components/result/error-result";
import {
  AllMenusDocument,
  type AllMenusQuery,
} from "@/gql/query/menu/list.generated";
import { imageUrlHelper } from "@/lib/helper/img-url-helper";
import { getClient } from "@/lib/service/apollo-client-service";

export default async function BuildTypePage() {
  const { data, error } = await getClient().query<AllMenusQuery>({
    query: AllMenusDocument,
    variables: { filter: { parent: { title: { eq: "build" } } } },
  });

  if (error || !data?.currentWebsite?.menus)
    return <ErrorResult message={error?.message || "No menu"} />;
  if (data.currentWebsite.menus.nodes.length === 0)
    return <ErrorResult message="No data" />;

  return (
    <div className="mx-auto flex h-2/3 flex-wrap items-center justify-center gap-4">
      {data.currentWebsite.menus.nodes.map((menu, idx) => (
        <ImageCard
          key={idx}
          imageUrl={imageUrlHelper(menu.images?.[0])}
          title={menu.title}
          href={menu.link.replace("/build/", "/build-type/")}
        />
      ))}
    </div>
  );
}

function ImageCard({ imageUrl, title, href }: ImageCardProps) {
  return (
    <div>
      <Link
        href={href}
        type="button"
        className="block h-40 w-40 cursor-pointer overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 ease-in-out hover:shadow-xl sm:h-60 lg:h-72 lg:w-72"
      >
        <div className="relative h-full w-full">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>
      </Link>
      <p className="text-center font-medium text-neutral md:text-lg lg:text-2xl">
        {title}
      </p>
    </div>
  );
}

interface ImageCardProps {
  imageUrl: string;
  title: string;
  onClick?: () => void;
  href: string;
}
