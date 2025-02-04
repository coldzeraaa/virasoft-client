'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { ErrorResult } from '@/components/result/error-result';
import { PaymentMethodEnum } from '@/gql/graphql.d';
import { useUpdateCheckoutAddressMutation } from '@/gql/mutation/address/update-checkout-address.generated';
import { usePaymentCheckoutMutation } from '@/gql/mutation/checkout/payment-checkout.generated';
import { useCurrentOrder } from '@/lib/context/current-order-context';
import { useForm } from '@/lib/context/form-context';
import { catchHelper } from '@/lib/helper/catch-helper';
import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';
import { mutationOptionHelper } from '@/lib/helper/mutation-option-helper';

export default function Page() {
  const { loading, order } = useCurrentOrder();
  const pathName = usePathname();

  if (loading) return <div className="skeleton h-40" />;
  if (!order) return <ErrorResult message="Order is undefined" />;

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
      {pathName === '/checkout' && <Continue />}
      {pathName === '/checkout/address' && <ContinueAddress />}
      {pathName === '/checkout/review' && <ContinueReview number={order.number} />}
    </>
  );
}

function ContinueReview({ number }: { number: string }) {
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

function Continue() {
  return (
    <Link href="/checkout/address" className="btn btn-primary btn-block">
      Үргэлжлүүлэх
      <ChevronRightIcon />
    </Link>
  );
}

function ContinueAddress() {
  const [updateCheckoutAddress, { loading }] = useUpdateCheckoutAddressMutation(mutationOptionHelper);
  const router = useRouter();
  const { form } = useForm();

  return (
    <>
      <button
        onClick={async () => {
          try {
            const values: UpdateCheckoutValues = await form.validateFields(VALIDATES);
            if (values.shipAddressTab === 'choose' && !values.shipAddressId) return catchHelper('Хаяг сонгоно уу');
            if (values.shipAddressTab === 'new' && !values.shipAddressAttributes) return catchHelper('Шинэ хаяг оруулна уу');
            if (!values.shipAddressId && !values.shipAddressAttributes) return catchHelper('Address is undefined');

            if (values.shipAddressTab === 'choose' && values.shipAddressId)
              await updateCheckoutAddress({ variables: { input: { shipAddressId: values.shipAddressId } } });
            if (values.shipAddressTab === 'new' && values.shipAddressAttributes)
              await updateCheckoutAddress({
                variables: {
                  input: {
                    shipAddressAttributes: {
                      address1: values.shipAddressAttributes.address1,
                      firstName: values.shipAddressAttributes.firstName,
                      mobile: values.shipAddressAttributes.mobile,
                      latitude: values.shipAddressAttributes.location.lat.toString(),
                      longitude: values.shipAddressAttributes.location.lng.toString(),
                    },
                  },
                },
              });
            router.push('/checkout/review');
          } catch (error) {
            catchHelper(error);
          }
        }}
        disabled={loading}
        type="button"
        className="btn btn-primary btn-block"
      >
        Үргэлжлүүлэх
        {loading ? <div className="loading" /> : <ChevronRightIcon />}
      </button>
      <Link href="/checkout" className="btn btn-block mt-4">
        Буцах
        <ChevronLeftIcon />
      </Link>
    </>
  );
}

const VALIDATES = [
  'shipAddressId',
  'shipAddressTab',
  ['shipAddressAttributes', 'address1'],
  ['shipAddressAttributes', 'location'],
  ['shipAddressAttributes', 'firstName'],
  ['shipAddressAttributes', 'mobile'],
];

interface UpdateCheckoutValues {
  shipAddressTab: 'choose' | 'new';
  shipAddressId?: string;
  shipAddressAttributes?: {
    address1: string;
    firstName: string;
    mobile: string;
    location: {
      lat: number;
      lng: number;
    };
  };
}
