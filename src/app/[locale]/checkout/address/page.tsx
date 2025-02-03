'use client';

import { useEffect, useState } from 'react';

import { TrashIcon } from '@heroicons/react/16/solid';
import { FieldField, FormInput, FormInputProps } from 'field-form';
import { CheckCircle, ChevronRightIcon, Circle } from 'lucide-react';
import AnimateHeight from 'react-animate-height';
import { toast } from 'react-toastify';

import { MapInput } from '@/components/form/inputs/map-input';
import { ErrorResult } from '@/components/result/error-result';
import { useDestroyUserAddressMutation } from '@/gql/mutation/address/destroy-user-address.generated';
import { MeUserAddressQuery, useMeUserAddressQuery } from '@/gql/query/user/me-user-address.generated';
import { useForm } from '@/lib/context/form-context';
import { catchHelper } from '@/lib/helper/catch-helper';

export default function Page() {
  const { data, loading, error } = useMeUserAddressQuery();
  const [tab, setTab] = useState<'choose' | 'new'>('choose');
  const { form } = useForm();

  useEffect(() => {
    if (!loading) {
      if (data?.me?.userAddresses.nodes.length === 0) {
        setTab('new');
        form.setFieldValue('shipAddressTab', 'new');
      } else form.setFieldValue('shipAddressTab', 'choose');
    }
  }, [loading]);

  useEffect(() => {
    if (data?.me?.userAddresses.nodes.length === 0) {
      setTab('new');
      form.setFieldValue('shipAddressTab', 'new');
    }
  }, [data?.me?.userAddresses.nodes.length]);

  if (loading) return <div className="skeleton min-h-96 bg-base-300" />;
  if (error || !data?.me) return <ErrorResult message={error?.message || 'User is undefined'} />;

  return (
    <>
      <h1 className="sr-only">Address</h1>
      <section aria-label="items">
        <h2 className="mb-4 text-2xl font-semibold">Хүргэлтийн хаяг {tab === 'choose' ? 'сонгох' : 'оруулах'}</h2>
        {data.me.userAddresses.nodes.length > 0 && (
          <>
            <button
              type="button"
              className={`btn btn-outline btn-block mb-4 flex justify-between ${tab === 'choose' ? 'btn-primary' : ''}`}
              onClick={() => {
                setTab('choose');
                form.setFieldValue('shipAddressTab', 'choose');
              }}
            >
              <span>Миний хаягууд</span>
              <ChevronRightIcon className={tab === 'choose' ? 'rotate-90 transform' : 'rotate-0 transform'} />
            </button>
            <AnimateHeight height={tab === 'choose' ? 'auto' : 0}>
              <FieldField name="shipAddressId" rules={[{ required: tab === 'choose', message: 'Хаяг сонгоно уу' }]}>
                <MyAddresses onChange={undefined as never} userAddresses={data.me.userAddresses.nodes} />
              </FieldField>
            </AnimateHeight>
            <button
              type="button"
              className={`btn btn-outline btn-block mb-4 flex justify-between ${tab === 'new' ? 'btn-primary' : ''}`}
              onClick={() => {
                setTab('new');
                form.setFieldValue('shipAddressTab', 'new');
              }}
            >
              <span>Шинэ хаяг</span>
              <ChevronRightIcon className={tab === 'new' ? 'rotate-90 transform' : 'rotate-0 transform'} />
            </button>
          </>
        )}
        <AnimateHeight height={tab === 'new' ? 'auto' : 0}>
          {addressInputs(tab === 'new').map((input, idx) => (
            <FormInput key={idx} {...input} />
          ))}
        </AnimateHeight>
        <div className="hidden">
          <FormInput name="shipAddressTab" />
        </div>
      </section>
    </>
  );
}

function MyAddresses({ value, onChange, userAddresses }: MyAddressProps) {
  const [destroy, setDestroy] = useState<string | null>(null);
  const [destroyUserAddress, { loading }] = useDestroyUserAddressMutation({
    onCompleted(TData) {
      toast.success('Хаяг амжилттай устгагдлаа');
      setDestroy(null);
      if (TData?.destroyUserAddress && value === TData.destroyUserAddress.id) {
        if (TData.destroyUserAddress.user.userAddresses.nodes.length > 0) onChange(TData.destroyUserAddress.user.userAddresses.nodes[0].id);
        else onChange(undefined);
      }
    },
    onError: catchHelper,
  });

  return (
    <>
      <ul className="mb-4">
        {userAddresses.map((ua) => (
          <li className="flex w-full" key={ua.id}>
            <button
              onClick={() => onChange(ua.id)}
              type="button"
              className={`flex w-full flex-1 gap-2 rounded-lg border border-transparent py-2 hover:text-primary ${value === ua.id.toString() ? 'text-primary' : ''}`}
            >
              {value === ua.id.toString() ? <CheckCircle /> : <Circle />}
              <div>
                <p>{ua.address.firstName || '-'}</p>
                <p>{ua.address.mobile || '-'}</p>
                <p>{ua.address.address1}</p>
              </div>
            </button>
            <button className="btn btn-outline btn-error btn-sm" onClick={() => setDestroy(ua.id)}>
              <TrashIcon className="w-4" />
            </button>
          </li>
        ))}
      </ul>
      <div>
        <input type="checkbox" id="destroy-my-address" className="modal-toggle" checked={!!destroy} onChange={() => null} />
        <div className="modal" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Та доорх хаяг устгахдаа итгэлтэй байна уу?</h3>
            <p className="py-4">{(destroy && userAddresses.find((ua) => ua.id === destroy)?.address.address1) || '-'}</p>
            <div className="modal-action">
              <button
                disabled={loading}
                className="btn btn-error"
                onClick={() => destroy && destroyUserAddress({ variables: { input: { id: destroy } } })}
              >
                {loading ? <span className="loading" /> : <TrashIcon className="w-4" />}
                Устгах
              </button>
              <button disabled={loading} onClick={() => setDestroy(null)} className="btn">
                Хаах
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function addressInputs(verified: boolean): FormInputProps[] {
  return [
    {
      name: ['shipAddressAttributes', 'firstName'],
      label: 'Нэр',
      rules: [{ required: verified, message: 'Нэр оруулна уу' }],
      input: { placeholder: 'Жавхлан' },
    },
    {
      name: ['shipAddressAttributes', 'mobile'],
      label: 'Утаны дугаар',
      rules: [{ required: verified, message: 'Утаны дугаар оруулна уу' }],
      input: { placeholder: '9901234*', autoComplete: 'tel' },
    },
    {
      name: ['shipAddressAttributes', 'address1'],
      label: 'Дэлгэрэнгүй хаяг',
      rules: [{ required: verified, message: 'Дэлгэрэнгүй хаяг оруулна уу' }],
      input: { type: 'textarea', placeholder: 'Улаанбаатар, БЗД, 2-р хороо, 109-р байр, 1001 тоот' },
    },
    {
      name: ['shipAddressAttributes', 'location'],
      label: 'Газрын зураг',
      rules: [{ required: verified, message: 'Газрын зураг дээр байршлаа оруулна уу' }],
      input: { type: 'custom', component: MapInput },
    },
  ];
}

interface MyAddressProps {
  value?: string;
  onChange(value?: string): void;
  userAddresses: NonNullable<MeUserAddressQuery['me']>['userAddresses']['nodes'];
}
