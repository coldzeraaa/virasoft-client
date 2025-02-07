import { ReactNode } from 'react';

import { AccountSideMenu } from '@/components/pages/account/account-side-menu';

export default async function DashboardLayout({ children }: ChildrenType) {
  return (
    <div className="container grid h-[calc(100vh-64px)] grid-cols-12 gap-4 overflow-hidden py-4 md:gap-8 md:py-8">
      <aside className="col-span-4 flex h-full flex-col overflow-auto rounded-lg bg-base-200 p-2 shadow">
        <AccountSideMenu />
      </aside>
      <main className="col-span-8 h-full overflow-auto">{children}</main>
    </div>
  );
}

interface ChildrenType {
  children: ReactNode;
}
