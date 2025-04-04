import { Suspense } from "react";

import Link from "next/link";

import PaymentPage from "@/components/page-client/account/orders/pay/payment-page";

export default function Payment({ params }: ParamsT) {
  return (
    <dialog className="modal" open>
      <div className="modal-box">
        <div className="grid h-[calc(100vh-8em)] grid-rows-[1fr,auto] overflow-hidden">
          <div className="overflow-auto">
            <Suspense
              fallback={<div className="skeleton h-40 w-full rounded-lg" />}
            >
              <PaymentPage params={params} />
            </Suspense>
          </div>
          <Link
            className="btn btn-primary btn-lg float-end mt-4"
            href={`/account/orders/${params.number}`}
          >
            Хаах
          </Link>
        </div>
      </div>
    </dialog>
  );
}

interface ParamsT {
  params: { number: string };
}
