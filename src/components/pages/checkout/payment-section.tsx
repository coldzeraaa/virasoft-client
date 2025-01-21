'use client';

import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { PaymentMethodEnum } from '@/gql/graphql.d';
import { useUpdateCheckoutAddressMutation } from '@/gql/mutation/address/update-checkout-address.generated';
import { usePaymentCheckoutMutation } from '@/gql/mutation/checkout/payment-checkout.generated';
import { useCurrentOrder } from '@/lib/context/current-order-context';
import { catchHelper } from '@/lib/helper/catch-helper';
import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';

export function PaymentSection({ selectedAddress }: { selectedAddress?: string | null }): JSX.Element {
  const { loading, order } = useCurrentOrder();
  const pathName = usePathname();
  const router = useRouter();

  const [updateCheckoutAddress] = useUpdateCheckoutAddressMutation({
    onError: catchHelper,
    onCompleted: () => {
      toast.success('Хүргэлтийн хаягийг амжилттай сонголоо');
      router.push('/checkout/review');
    },
  });

  const [paymentCheckout] = usePaymentCheckoutMutation({
    onError: catchHelper,
    onCompleted: () => {
      toast.success('Захиалга амжилттай үүслээ');
      router.push('/account/payment');
    },
  });

  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();

    if (pathName === '/checkout/address') {
      if (!selectedAddress) {
        toast.error('Хүргэлтийн хаягаа оруулна уу');
        return;
      }
      updateCheckoutAddress({
        variables: {
          input: {
            shipAddressId: selectedAddress,
          },
        },
      });
    }

    if (pathName === '/checkout/review') {
      paymentCheckout({
        variables: {
          input: {
            action: PaymentMethodEnum.VirasoftPay,
          },
        },
      });
    } else {
      router.push('/checkout/address');
    }
  };

  if (loading || !order) return <div className="skeleton h-60 w-full" />;

  return (
    <>
      <p className="t-text-sm mb-2 flex justify-between">
        <span>Items</span>
        <span>{order?.items.length}</span>
      </p>
      <p className="t-text-sm mb-1 flex justify-between">
        <span>Products</span>
        <span>{moneyFormatHelper(order?.itemTotal || 0)}</span>
      </p>
      <ul className="space-y-1 py-1 pl-4">
        {order?.items.map((item) => (
          <li key={item.id}>
            <p className="grid grid-cols-[1fr,auto,auto] items-center gap-2">
              <span className="t-text-xs line-clamp-2 truncate">{item.variant.product.name}</span>
              <span className="t-text-xs h-fit rounded bg-base-300 p-1">x{item.quantity}</span>
              <span className="t-text-xs min-w-20 text-right">{moneyFormatHelper(item.price)}</span>
            </p>
          </li>
        ))}
      </ul>
      <div className="h-px w-full bg-secondary" />
      <p className="mb-6 flex items-center justify-between py-3">
        <span className="t-text-base">Total</span>
        <span className="heading-4">{moneyFormatHelper(order?.total || 0)}</span>
      </p>
      <button className="btn btn-primary btn-block" onClick={handleContinue}>
        <span>Continue</span>
        <ChevronRightIcon className="w-4" />
      </button>
    </>
  );
}
