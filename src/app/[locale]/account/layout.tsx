import { ReactNode } from 'react';

import { SideBar } from '@/components/sidebar/side-bar';

export default function DashboardLayout({ children }: ChildrenType) {
  return (
    <div className="flex h-full bg-base-200 pt-6">
      <SideBar />
      <div className="w-full h-full px-8 pb-6">{children}</div>
    </div>
  );
}

interface ChildrenType {
  children: ReactNode;
}
