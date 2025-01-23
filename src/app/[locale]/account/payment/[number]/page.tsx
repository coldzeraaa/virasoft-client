import PaymentPage from '@/components/page-client/account/payment/payment-page';

export default function Payment({ params }: { params: { number: string } }) {
  return <PaymentPage params={params} />;
}
