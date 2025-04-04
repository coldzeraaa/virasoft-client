"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { PaymentMethodEnum } from "@/gql/graphql.d";
import { usePaymentCheckoutMutation } from "@/gql/mutation/checkout/payment-checkout.generated";
import { useCurrentOrder } from "@/lib/context/current-order-context";
import { catchHelper } from "@/lib/helper/catch-helper";
import { mutationOptionHelper } from "@/lib/helper/mutation-option-helper";

export function BtnContinueReview({ number }: { number: string }) {
  const { order } = useCurrentOrder();
  const [paymentCheckout, { loading }] = usePaymentCheckoutMutation({
    ...mutationOptionHelper,
    update: (cache) =>
      cache.modify({ fields: { currentOrder: (_, { DELETE }) => DELETE } }),
  });
  const router = useRouter();

  return (
    <>
      <button
        onClick={async () => {
          try {
            const response = await paymentCheckout({
              variables: {
                input: {
                  action: PaymentMethodEnum.VirasoftPay,
                  number: order?.number || "-",
                },
              },
            });
            if (response.data?.paymentCheckout?.id)
              router.push(`/account/orders/${number}/pay`);
            else catchHelper(response.errors);
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
