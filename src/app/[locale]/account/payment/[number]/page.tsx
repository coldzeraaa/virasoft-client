import PaymentPage from '@/components/user-dashboard/orders/payment/payment-page';

export default function Payment({ params }: { params: { number: string } }): JSX.Element {
  return (
    <div>
      <PaymentPage params={params}></PaymentPage>
    </div>
  );
}
