"use client";

import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function HeaderAccountMobile() {
  const pathname = usePathname();

  return (
    <header
      data-label="mobile header"
      className="col-span-12 flex items-center gap-2 md:hidden"
    >
      <Link className="btn" href={getLink(pathname)}>
        <ChevronLeftIcon className="w-4" />
        <span>Буцах</span>
      </Link>
      <h1 className="truncate text-xl font-semibold">{getTitle(pathname)}</h1>
    </header>
  );
}

function getLink(pathname: string): string {
  return pathname.replace(/\/[^/]+$/, "") || "/";
}

function getTitle(pathname: string): string {
  if (pathname === "/") return "Нүүр";
  if (pathname === "/account") return "Миний самбар";
  if (pathname === "/account/orders") return "Захиалгууд";
  if (pathname.match(/\/account\/orders\/[^\\/]+/))
    return "Захиалгын дэлгэрэнгүй";
  return "";
}
