'use client';

import { ChevronRightIcon } from '@heroicons/react/16/solid';
import cookies from 'js-cookie';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { STORE_KEY_CONFIG } from '@/configs/STORE_KEY_CONFIG';
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
  const [updateCheckoutAddress, { loading: checkoutAddressLoading }] = useUpdateCheckoutAddressMutation({
    onError: catchHelper,
    onCompleted() {
      toast.success('Хүргэлтийн хаягийг амжилттай сонголоо');
      router.push('/checkout/review');
    },
  });

  const [paymentCheckout, { loading: paymentCheckoutLoading }] = usePaymentCheckoutMutation({
    onError: catchHelper,
    update: (cache) => cache.evict({ fieldName: 'currentOrder' }),
    onCompleted() {
      toast.success('Захиалга амжилттай үүслээ');
      router.push(`/account/orders/${order?.number}/pay`);
    },
  });

  if (loading || paymentCheckoutLoading || checkoutAddressLoading) return <div className="skeleton h-60 w-full" />;
  if (!order) return <div className="h-60 w-full">Танд захиалга байхгүй байна</div>;

  return (
    <>
      <p className="mb-2 flex justify-between font-semibold">
        <span>Бүтээгдэхүүний тоо ширхэг</span>
        <span>{order?.items.length}ш</span>
      </p>
      <p className="mb-1 flex justify-between font-semibold">
        <span>Бүтээгдэхүүн</span>
        <span>{moneyFormatHelper(order?.itemTotal || 0)}</span>
      </p>
      <ul className="space-y-1 py-1 pl-4">
        {order?.items.map((item) => (
          <li key={item.id}>
            <p className="grid grid-cols-[1fr,auto,auto] items-center gap-2">
              <span className="t-text-xs line-clamp-2 truncate">{item.variant.product.name}</span>
              <span className="t-text-xs h-fit rounded bg-base-300 p-1 px-2">{item.quantity}ш</span>
              <span className="t-text-xs min-w-20 text-right">{moneyFormatHelper(item.price)}</span>
            </p>
          </li>
        ))}
      </ul>
      <p className="mb-6 flex items-center justify-between border-t border-dashed py-3 font-bold">
        <span className="">Нийт</span>
        <span className="heading-4">{moneyFormatHelper(order?.total || 0)}</span>
      </p>
      <button
        className="btn btn-secondary btn-block"
        type="button"
        onClick={() => {
          if (pathName === '/checkout/address') {
            if (!selectedAddress) return toast.error('Хүргэлтийн хаягаа оруулна уу');
            return updateCheckoutAddress({ variables: { input: { shipAddressId: selectedAddress } } });
          }
          if (pathName === '/checkout/review') return paymentCheckout({ variables: { input: { action: PaymentMethodEnum.VirasoftPay } } });
          cookies.set(STORE_KEY_CONFIG.NEXT_FROM, '/checkout/address');
          router.push('/checkout/address');
        }}
      >
        <span>Үргэлжлүүлэх</span>
        <ChevronRightIcon className="w-4" />
      </button>
    </>
  );
}
