"use client";
import { useRouter } from "next/navigation";

import { useMenusQuery } from "../../../gql/query/menu/list.generated";
import { ImageCard } from "../../build/image-card";

export function BuildPageClient() {
	const router = useRouter();
	const { data } = useMenusQuery({
		variables: {
			filter: {
				parentId: { eq: "9" },
			},
		},
	});
	console.log({ data: data });

	return (
		<div className="mx-auto flex h-full flex-wrap items-center justify-center gap-4">
			{data?.menus.nodes.map((menu, idx) => (
				<ImageCard
					key={idx}
					imageUrl={`https://api.virasoft.mn${menu.images?.[0]}`}
					title={menu.title}
					onClick={() => router.push(menu.link)}
				/>
			))}
		</div>
	);
}
