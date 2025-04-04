"use client";

import { House, LogOutIcon, PackageIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useAuth } from "@/lib/context/auth-context";

export function AccountSideMenu() {
  const pathname = usePathname();

  return (
    <>
      <nav className="flex-1 overflow-auto">
        <Link
          href="/account"
          className={`btn btn-ghost btn-block justify-start ${pathname === "/account" ? "btn-active" : ""}`}
        >
          <House />
          Миний самбар
        </Link>
        <Link
          href="/account/orders"
          className={`btn btn-ghost btn-block justify-start ${pathname.startsWith("/account/orders") ? "btn-active" : ""}`}
        >
          <PackageIcon />
          Захиалгууд
        </Link>
      </nav>
      <Logout />
    </>
  );
}

function Logout() {
  const { logout } = useAuth();
  return (
    <button
      onClick={logout}
      type="button"
      className="btn btn-block justify-start"
    >
      <LogOutIcon />
      Гарах
    </button>
  );
}
