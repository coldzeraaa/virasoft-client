import { ReactNode } from "react";

import { HeaderAccountMobile } from "@/components/header/header-account-mobile";
import { AccountSideMenu } from "@/components/pages/account/account-side-menu";

export default async function DashboardLayout({ children }: ChildrenType) {
  return (
    <div className="container grid grid-cols-12 gap-4 overflow-hidden py-4 md:h-[calc(100vh-64px)] md:gap-8 md:py-8">
      <HeaderAccountMobile />
      <aside className="col-span-4 hidden h-full flex-col overflow-auto rounded-lg bg-base-200 p-2 shadow md:flex">
        <AccountSideMenu />
      </aside>
      <main className="col-span-12 h-full overflow-auto md:col-span-8">
        {children}
      </main>
    </div>
  );
}

interface ChildrenType {
  children: ReactNode;
}
