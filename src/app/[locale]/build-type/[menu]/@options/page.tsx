import React from "react";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";

import { ButtonPersistSearchParams } from "@/components/build/btn-persist-search-params";
import { ErrorResult } from "@/components/result/error-result";
import {
  AllMenusDocument,
  AllMenusQuery,
} from "@/gql/query/menu/list.generated";
import { imageUrlHelper } from "@/lib/helper/img-url-helper";
import { getClient } from "@/lib/service/apollo-client-service";

export default function BuildTypeOptionsPage({
  params,
}: BuildTypeOptionsPageProps) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  return <Menu type={params.menu} />;
}

async function Menu({ type }: { type: string }) {
  const { data, error } = await getClient().query<AllMenusQuery>({
    query: AllMenusDocument,
    variables: { filter: { parent: { icon: { eq: type } } } },
  });

  if (!data?.currentWebsite?.menus || error)
    return <ErrorResult message={error?.message || "No menu"} />;

  return (
    <>
      <div className="mb-4 mt-2 flex gap-4">
        <ButtonPersistSearchParams
          className="btn flex flex-nowrap gap-1"
          href="/build-type"
        >
          <ChevronLeftIcon />
          Буцах
        </ButtonPersistSearchParams>
        <ButtonPersistSearchParams
          className="btn btn-primary flex flex-1 flex-nowrap justify-between"
          href="/build-type/checkout"
        >
          Худалдан авах
          <ChevronRightIcon />
        </ButtonPersistSearchParams>
      </div>
      <ul>
        {data.currentWebsite.menus.nodes.map((menu, idx) => (
          <li key={idx} className="group relative overflow-hidden rounded-lg">
            <ButtonPersistSearchParams
              className="relative flex items-center gap-4 rounded-lg border border-transparent p-2 transition-all
                       duration-300 ease-out hover:border-[#102F31]/20 hover:shadow-xl hover:shadow-[#102F31]/20"
              href={`/build-type/${type}/${menu.link}`}
            >
              <div className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="animate-glow absolute -left-[100%] -top-[200%] h-[500%] w-[150%] bg-[conic-gradient(from_90deg_at_50%_50%,#e2e8f0_0%,#102F31_25%,#e2e8f0_50%)] opacity-40 blur-2xl" />
              </div>
              <Image
                src={imageUrlHelper(menu.images?.[0])}
                alt={menu.title}
                width={0}
                height={0}
                className="aspect-square w-20 rounded-lg bg-base-300 object-contain transition-transform 
                         duration-300 ease-in-out group-hover:scale-105 md:w-28"
              />
              <p className="text-xl font-semibold transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                {menu.title}
              </p>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100">
                <div
                  className="animate-shimmer absolute -top-1/2 left-0 h-full w-full translate-x-[-100%] bg-gradient-to-r from-transparent
                            via-white/20 to-transparent"
                />
              </div>
            </ButtonPersistSearchParams>
          </li>
        ))}
      </ul>
    </>
  );
}

export interface BuildTypeOptionsPageProps {
  params: { menu: string };
}
