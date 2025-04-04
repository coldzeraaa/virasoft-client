"use client";

import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";

import { useMeQuery } from "@/gql/query/user/me.generated";

export function BtnContinueCart() {
  const { data } = useMeQuery();

  if (!data?.me)
    return (
      <Link
        href="/auth/login?from=checkout"
        className="btn btn-primary btn-block"
      >
        Үргэлжлүүлэх
        <ChevronRightIcon />
      </Link>
    );

  return (
    <Link href="/checkout/address" className="btn btn-primary btn-block">
      Үргэлжлүүлэх
      <ChevronRightIcon />
    </Link>
  );
}
