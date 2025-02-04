'use client';

import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useUpdateCheckoutAddressMutation } from '@/gql/mutation/address/update-checkout-address.generated';
import { useForm } from '@/lib/context/form-context';
import { catchHelper } from '@/lib/helper/catch-helper';
import { mutationOptionHelper } from '@/lib/helper/mutation-option-helper';

export function BtnContinueAddress() {
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
