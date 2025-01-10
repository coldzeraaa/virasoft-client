import { ReactNode } from 'react';

import SideBar from '@/components/user-dashboard/side-bar';

const DashboardLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <div className="flex h-full gap-8 pt-6">
    <SideBar></SideBar>
    <div>{children}</div>
  </div>
);
export default DashboardLayout;
