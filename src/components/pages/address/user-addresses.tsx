import { useState } from 'react';

import { FieldForm, FormInput, type FormInputProps } from 'field-form';
import { toast } from 'react-toastify';

import { MapInput } from '@/components/form/inputs/map-input';
import { useCreateAddressMutation } from '@/gql/mutation/address/create-address.generated';
import { useUpdateUserAddressMutation } from '@/gql/mutation/address/update-address.generated';
import { type MeUserAddressQuery, useMeUserAddressQuery } from '@/gql/query/user/me-user-address.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

export default function UserAddresses() {
  const { data, loading } = useMeUserAddressQuery();

  if (loading) return <div>Loading...</div>;
  if (!data?.me) return <div>Failed to fetch</div>;

  return (
    <div className="px-4">
      {data?.me?.userAddresses.edges.length === 0 && <p>Empty</p>}
      {data?.me && data.me.userAddresses.edges.length > 0 && (
        <ul className="divide-y">
          {data.me.userAddresses.edges.map(({ node }) => (
            <SingleAddress {...node} key={node.id} />
          ))}
        </ul>
      )}
      <AddAddress user={data?.me} />
    </div>
  );
}

function SingleAddress({ id, address }: NonNullable<MeUserAddressQuery['me']>['userAddresses']['edges']['0']['node']) {
  const [show, setShow] = useState<boolean>(false);
  const [updateAddress, { loading }] = useUpdateUserAddressMutation();

  if (show)
    return (
      <div>
        <button onClick={() => setShow(false)} type="button">
          Back
        </button>
        <FieldForm
          initialValues={{
            addressAttributes: {
              ...address,
              location: { lat: parseFloat(address.latitude || '0'), lng: parseFloat(address.longitude || '0') },
            },
          }}
          onFinishFailed={catchHelper}
          onFinish={(values) =>
            updateAddress({
              variables: {
                input: {
                  id,
                  addressAttributes: {
                    address1: values.addressAttributes.address1,
                    addressAlias: values.addressAttributes.addressAlias,
                    longitude: `${values.addressAttributes.location.lng}`,
                    latitude: `${values.addressAttributes.location.lat}`,
                  },
                },
              },
            })
          }
        >
          {addressInputs.map((input, idx) => (
            <FormInput key={idx} {...input} />
          ))}
          <button disabled={loading} className="btn btn-primary" type="submit">
            {loading && <div className="loading" />}
            Save
          </button>
        </FieldForm>
      </div>
    );

  return (
    <li key={id} className="flex">
      <div className="flex-1">
        <p>{address.addressAlias}</p>
        <p>{address.address1}</p>
      </div>
      <button onClick={() => setShow(true)} type="button">
        Edit
      </button>
    </li>
  );
}

function AddAddress({ user }: { user: NonNullable<MeUserAddressQuery['me']> }) {
  const [show, setShow] = useState<boolean>(false);
  const [createAddress, { loading }] = useCreateAddressMutation({
    onError: catchHelper,
    onCompleted: () => toast.success('Хаяг амжилттай үүслээ'),
    update: (cache, { data: TData }) => {
      cache.modify({
        id: cache.identify(user),
        fields: {
          userAddresses(existingRefs = []) {
            if (existingRefs?.edges?.length > 0) return { edges: [TData?.createUserAddress, ...existingRefs.edges] };
            return { edges: [TData?.createUserAddress] };
          },
        },
      });
    },
  });

  if (show)
    return (
      <div>
        <button type="button" onClick={() => setShow(false)}>
          Back
        </button>
        <FieldForm
          onFinishFailed={catchHelper}
          onFinish={(values) =>
            createAddress({
              variables: {
                input: {
                  addressAttributes: {
                    address1: values.addressAttributes.address1,
                    addressAlias: values.addressAttributes.addressAlias,
                    longitude: `${values.addressAttributes.location.lng}`,
                    latitude: `${values.addressAttributes.location.lat}`,
                  },
                },
              },
            })
          }
        >
          {addressInputs.map((input, idx) => (
            <FormInput key={idx} {...input} />
          ))}
          <button disabled={loading} className="btn btn-primary" type="submit">
            {loading && <div className="loading" />}
            Save
          </button>
        </FieldForm>
      </div>
    );

  return (
    <button className="btn btn-primary" type="button" onClick={() => setShow(true)}>
      Add address
    </button>
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
