"use client";

import {
  createContext,
  FC,
  type PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { useSearchParams } from "next/navigation";

import { catchHelper } from "@/lib/helper/catch-helper";
import { elService } from "@/lib/service/el-service";
import type { HitType } from "@/types/hit-type";

export const BuildTypeContext = createContext<BuildTypeContextProps>({
  hits: [],
});

export const useBuildType = () =>
  useContext<BuildTypeContextProps>(BuildTypeContext);

export const BuildTypeProvider: FC<PropsWithChildren> = ({ children }) => {
  const searchParams = useSearchParams();
  const searchParamsObject = Object.fromEntries(searchParams.entries());
  const dependencies = Object.values(searchParamsObject);
  const [loading, setLoading] = useState<boolean>(true);
  const [hits, setHits] = useState<HitType[]>([]);

  useEffect(() => {
    setLoading(true);
    elService({ ids: dependencies })
      .then(setHits)
      .catch(catchHelper)
      .finally(() => setLoading(false));
  }, [JSON.stringify(dependencies)]);

  // if (!data?.me && !loading) return redirect(`/auth/login?from=${window.location.pathname}${window.location.search}`);

  return (
    <BuildTypeContext.Provider value={{ loading, hits }}>
      {children}
    </BuildTypeContext.Provider>
  );
};

export interface BuildTypeContextProps {
  loading?: boolean;
  hits: HitType[];
}
