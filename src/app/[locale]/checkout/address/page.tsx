'use client';

import { FormInput, FormInputProps } from 'field-form';
import AnimateHeight from 'react-animate-height';

import { MapInput } from '@/components/form/inputs/map-input';
import { ErrorResult } from '@/components/result/error-result';
import { useMeUserAddressQuery } from '@/gql/query/user/me-user-address.generated';

export default function Page() {
  const { data, loading, error } = useMeUserAddressQuery();

  if (loading) return <div className="skeleton min-h-96 bg-base-300" />;
  if (error || !data?.me) return <ErrorResult message={error?.message || 'User is undefined'} />;

  return (
    <>
      <h1 className="sr-only">Address</h1>
      <section aria-label="items">
        <h2 className="mb-4 text-2xl font-semibold">Миний хаягууд</h2>
        <AnimateHeight height={data.me.userAddresses.nodes.length === 0 ? 'auto' : 0}>
          {addressInputs.map((input, idx) => (
            <FormInput key={idx} {...input} />
          ))}
        </AnimateHeight>
      </section>
    </>
  );
}

const addressInputs: FormInputProps[] = [
  {
    name: ['addressAttributes', 'addressAlias'],
    label: 'Хаягын нэр',
    rules: [{ required: true, message: 'Хаягын нэр оруулна уу' }],
    input: { placeholder: 'Гэр' },
  },
  {
    name: ['addressAttributes', 'address1'],
    label: 'Дэлгэрэнгүй хаяг',
    rules: [{ required: true, message: 'Дэлгэрэнгүй хаяг оруулна уу' }],
    input: { placeholder: 'Улаанбаата, БЗД, 2-р хороо, 109-р байр, 1001 тоот' },
  },
  {
    name: ['addressAttributes', 'location'],
    label: 'Газрын зураг',
    rules: [{ required: true, message: 'Дэлгэрэнгүй хаяг оруулна уу' }],
    input: { type: 'custom', component: MapInput },
  },
];
