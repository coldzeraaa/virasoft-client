import { ReactNode } from 'react';

import SideBar from '@/components/user-dashboard/side-bar';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <div className="flex h-full  pt-6">
    <SideBar></SideBar>
    <div className="w-full px-8 pb-6 ">{children}</div>
  </div>
);
export default DashboardLayout;
