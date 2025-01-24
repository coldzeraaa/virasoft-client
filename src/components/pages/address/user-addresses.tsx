import { useRef, useState } from 'react';

import { FieldForm, FormInput, type FormInputProps } from 'field-form';
import { toast } from 'react-toastify';

import { MapInput } from '@/components/form/inputs/map-input';
import { useCreateAddressMutation } from '@/gql/mutation/address/create-user-address.generated';
import { useDestroyUserAddressMutation } from '@/gql/mutation/address/destroy-user-address.generated';
import { useUpdateUserAddressMutation } from '@/gql/mutation/address/update-user-address.generated';
import { type MeUserAddressQuery, useMeUserAddressQuery } from '@/gql/query/user/me-user-address.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

export default function UserAddresses({ setSelectedAddress }: { setSelectedAddress: (address: string | null) => void }) {
  const { data, loading } = useMeUserAddressQuery();

  if (loading) return <div className="skeleton h-60 w-full" />;
  if (!data?.me) return <div className="h-60 w-full">Хэрэглэгч олдсонгүй</div>;

  return (
    <div className="px-4">
      <p className="mb-4 text-2xl font-semibold">Хүргэлтийн хаяг</p>
      {data.me.userAddresses.nodes.length === 0 && <p>Танд хүргэлтийн хаяг байхгүй байна</p>}
      {data.me && data.me.userAddresses.nodes.length > 0 && (
        <ul className="grid grid-cols-1 gap-3">
          {data.me.userAddresses.nodes.map((node) => (
            <SingleAddress node={node} key={node.id} user={data.me!} setSelectedAddress={setSelectedAddress} />
          ))}
        </ul>
      )}
      <AddAddress />
    </div>
  );
}

function SingleAddress({ node, setSelectedAddress }: SingleAddressProps) {
  const [show, setShow] = useState<boolean>(false);
  const modalRef = useRef<HTMLDialogElement>(null);
  const [destroyAddress, { loading: deleteLoading }] = useDestroyUserAddressMutation({
    onError: catchHelper,
    onCompleted() {
      toast.success('Хаяг амжилттай устлаа');
      modalRef.current?.close();
    },
  });

  if (deleteLoading) return <div className="skeleton h-60 w-full" />;
  if (show) return <UpdateAddress setShow={setShow} node={node} />;

  return (
    <li className="flex gap-2">
      <label className="flex w-full items-center gap-2">
        <input
          type="radio"
          name="address"
          className="radio"
          value={node.address.id}
          onChange={() => {
            setSelectedAddress(node.address.id);
          }}
        />

        <div className="flex-1">
          <p>{node?.address?.addressAlias}</p>
          <p>{node?.address?.address1}</p>
        </div>
      </label>
      <button onClick={() => setShow(true)} type="button" className="btn btn-info">
        Засварлах
      </button>
      <button className="btn" type="button" onClick={() => modalRef.current?.showModal()}>
        Устгах
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <p className="py-4">Та хаяг устгахдаа итгэлтэй байна уу?</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn" type="button">
                Болих
              </button>
              <button type="button" className="btn btn-error" onClick={() => destroyAddress({ variables: { input: { id: node.id } } })}>
                Устгах
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </li>
  );
}

function UpdateAddress({ setShow, node }: UpdateAddressProps) {
  const [updateAddress, { loading }] = useUpdateUserAddressMutation({
    onError: catchHelper,
    onCompleted: () => {
      toast.success('Хаяг амжилттай шинэчлэгдлээ');
      setShow(false);
    },
  });
  if (loading) return <div className="skeleton h-60 w-full" />;
  return (
    <div>
      <FieldForm<AddressAttributes>
        initialValues={{
          addressAttributes: {
            ...node.address,
            location: {
              lat: parseFloat(node.address.latitude || '0'),
              lng: parseFloat(node.address.longitude || '0'),
            },
          },
        }}
        onFinishFailed={catchHelper}
        onFinish={(values) =>
          updateAddress({
            variables: {
              input: {
                id: node.id,
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
          Хадгалах
        </button>
        <button onClick={() => setShow(false)} type="button" className="btn">
          Буцах
        </button>
      </FieldForm>
    </div>
  );
}

function AddAddress() {
  const [show, setShow] = useState<boolean>(false);
  const [createAddress, { loading }] = useCreateAddressMutation({
    onError: catchHelper,
    onCompleted: () => {
      toast.success('Хаяг амжилттай үүслээ');
      setShow(false);
    },
  });
  if (loading) return <div className="skeleton h-60 w-full" />;
  if (show)
    return (
      <div>
        <button type="button" onClick={() => setShow(false)}>
          Back
        </button>
        <FieldForm<AddressAttributes>
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
            Хадгалах
          </button>
        </FieldForm>
      </div>
    );

  return (
    <button className="btn btn-primary mt-8 w-full" type="button" onClick={() => setShow(true)}>
      Хаяг нэмэх
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

interface SingleAddressProps {
  node: UserAddressNode;
  user: NonNullable<MeUserAddressQuery['me']>;
  setSelectedAddress: (address: string | null) => void;
}
interface UpdateAddressProps {
  setShow(val: boolean): void;
  node: SingleAddressProps['node'];
}
type UserAddressNode = NonNullable<MeUserAddressQuery['me']>['userAddresses']['nodes'][0];
type AddressAttributes = {
  addressAttributes: {
    address1: string;
    addressAlias: string;
    location: {
      lat: number;
      lng: number;
    };
  };
};
