import AccountOrdersNumberPage, { ParamsType } from '@/components/page-client/account/orders/[number]/account-order-number-page';

export default function AccountOrdersDetailPage({ params }: ParamsType) {
  return <AccountOrdersNumberPage params={params} />;
}
