import { Suspense } from 'react';

import Link from 'next/link';

import PaymentPage from '@/components/page-client/account/orders/pay/payment-page';

export default function Payment({ params }: ParamsT) {
  return (
    <dialog className="modal" open>
      <div className="modal-box">
        <Suspense fallback={<div className="skeleton h-40 w-full rounded-lg" />}>
          <PaymentPage params={params} />
        </Suspense>
        <Link className="btn btn-primary btn-lg float-end mt-4" href={`/account/orders/${params.number}`}>
          Хаах
        </Link>
      </div>
    </dialog>
  );
}

interface ParamsT {
  params: { number: string };
}
