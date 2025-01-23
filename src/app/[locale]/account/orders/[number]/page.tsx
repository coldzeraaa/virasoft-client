import AccountOrdersNumberPage from '@/components/page-client/account/orders/[number]/account-order-number-page';

export default function AccountOrdersDetailPage({ params }: { params: { number: string } }) {
  return <AccountOrdersNumberPage params={params} />;
}
