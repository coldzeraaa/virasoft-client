import { ReactNode } from 'react';

import { SideBar } from '@/components/sidebar/side-bar';

export default function DashboardLayout({ children }: ChildrenType) {
  return (
    <div className="flex h-full  pt-6">
      <SideBar />
      <div className="w-full px-8 pb-6 ">{children}</div>
    </div>
  );
}

interface ChildrenType {
  children: ReactNode;
}
