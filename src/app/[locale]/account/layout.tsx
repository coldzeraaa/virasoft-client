import { ReactNode } from 'react';

import { SideBar } from '@/components/sidebar/side-bar';

export default function DashboardLayout({ children }: ChildrenType) {
  return (
    <div className="h-[calc(100%-64px)] w-full bg-base-200">
      <div className="container grid h-full max-w-7xl grid-cols-12 py-6">
        <SideBar />
        <div className="col-span-12 h-full w-full px-8 md:col-span-8 lg:col-span-9">{children}</div>
      </div>
    </div>
  );
}

interface ChildrenType {
  children: ReactNode;
}
