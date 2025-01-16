'use client';

import { ChevronRightIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { useUpdateCheckoutAddressMutation } from '@/gql/mutation/address/update-checkout-address.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';
import { useCurrentOrder } from '@/lib/context/current-order-context';
import { catchHelper } from '@/lib/helper/catch-helper';
import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';
export function PaymentSection({ selectedAddress }: PaymentSectionProps): JSX.Element {
  const { loading, order } = useCurrentOrder();
  const { data } = useMeQuery();
  const pathName = usePathname();
  const router = useRouter();

  const [updateCheckoutAddress] = useUpdateCheckoutAddressMutation({
    onError: catchHelper,
    onCompleted: () => {
      toast.success('Хүргэлтийн хаягийг амжилттай сонголоо');
      router.push('/checkout/review');
    },
  });

  const handleContinue = (e: React.MouseEvent) => {
    if (pathName === '/checkout/address') {
      e.preventDefault();
      if (!selectedAddress) {
        toast.error('Хүргэлтийн хаягаа оруулна уу');
        return;
      }
      updateCheckoutAddress({
        variables: {
          input: {
            shipAddressId: selectedAddress.id,
          },
        },
      });
    }
  };

  if (loading || !order) <div className="skeleton h-60 w-full" />;

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
      <Link
        href={pathName === '/checkout/address' ? '/checkout/review' : data?.me ? '/checkout/address' : '/auth/login'}
        className="btn btn-primary btn-block"
        onClick={handleContinue}
      >
        <span>Continue</span>
        <ChevronRightIcon className="w-4" />
      </Link>
    </>
  );
}

interface PaymentSectionProps {
  selectedAddress?: Address | undefined;
}

interface Address {
  id: string;
  address1: string;
  address2: string;
  addressAlias?: string | null | undefined;
  latitude?: string | null | undefined;
  longitude?: string | null | undefined;
}
