"use client";

import { ImageBuild } from "@/components/pages/build-type/image-build";
import { useBuildType } from "@/lib/context/build-type-context";

export function ImageBuildPageClient() {
  const { loading, hits } = useBuildType();
  return <ImageBuild hits={hits} loading={loading} />;
}
