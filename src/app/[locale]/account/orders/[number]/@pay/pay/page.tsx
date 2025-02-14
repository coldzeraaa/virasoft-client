import { Suspense } from 'react';

import PaymentPage from '@/components/page-client/account/orders/pay/payment-page';

export default function Payment({ params }: ParamsT) {
  return (
    <dialog className="modal" open>
      <div className="modal-box">
        <Suspense fallback={<div className="skeleton h-40 w-full rounded-lg" />}>
          <PaymentPage params={params} />
        </Suspense>
      </div>
    </dialog>
  );
}

interface ParamsT {
  params: { number: string };
}
