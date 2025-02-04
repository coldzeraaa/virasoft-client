'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { PaymentMethodEnum } from '@/gql/graphql.d';
import { usePaymentCheckoutMutation } from '@/gql/mutation/checkout/payment-checkout.generated';
import { catchHelper } from '@/lib/helper/catch-helper';
import { mutationOptionHelper } from '@/lib/helper/mutation-option-helper';

export function BtnContinueReview({ number }: { number: string }) {
  const [paymentCheckout, { loading }] = usePaymentCheckoutMutation(mutationOptionHelper);
  const router = useRouter();

  return (
    <>
      <button
        onClick={async () => {
          try {
            await paymentCheckout({ variables: { input: { action: PaymentMethodEnum.VirasoftPay } } });
            router.push(`/account/orders/${number}/pay`);
          } catch (e) {
            catchHelper(e);
          }
        }}
        disabled={loading}
        type="button"
        className="btn btn-primary btn-block"
      >
        Төлбөр төлөх
        <ChevronRightIcon />
      </button>
      <Link href="/checkout/address" className="btn btn-block mt-4">
        Буцах
        <ChevronLeftIcon />
      </Link>
    </>
  );
}
