import { ReactNode } from 'react';

import { SideBar } from '@/components/sidebar/side-bar';

export default function DashboardLayout({ children }: ChildrenType) {
  return (
    <div className="flex h-full bg-base-200 py-6">
      <SideBar />
      <div className="h-full w-full px-8 ">{children}</div>
    </div>
  );
}

interface ChildrenType {
  children: ReactNode;
}
