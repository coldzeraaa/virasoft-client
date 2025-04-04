import { Suspense } from "react";

import AccountOrdersNumberPage, {
  ParamsType,
} from "@/components/page-client/account/orders/[number]/account-order-number-page";

export default function AccountOrdersDetailPage({ params }: ParamsType) {
  return (
    <Suspense fallback={<div className="skeleton h-96 w-full" />}>
      <AccountOrdersNumberPage params={params} />
    </Suspense>
  );
}
