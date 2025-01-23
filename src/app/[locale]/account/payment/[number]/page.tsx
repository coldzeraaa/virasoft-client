import PaymentPage from '@/components/page-client/account/payment/payment-page';

export default function Payment({ params }: ParamsT) {
  return <PaymentPage params={params} />;
}

interface ParamsT {
  params: { number: string };
}
