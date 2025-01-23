import { SideBar } from '@/components/user-dashboard/side-bar';
import { ReactNode } from 'react';


export default function DashboardLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="flex h-full  pt-6">
      <SideBar></SideBar>
      <div className="w-full px-8 pb-6 ">{children}</div>
    </div>
  );
}
