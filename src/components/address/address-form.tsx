import Form, { Field } from 'rc-field-form';
import { toast } from 'react-toastify';

import { useCreateAddressMutation } from '@/gql/mutation/address/create-address.generated';
import { useUpdateUserAddressMutation } from '@/gql/mutation/address/update-address.generated';
import { catchHelper } from '@/lib/helper/catch-helper';
export function AddressForm({ onSuccess, editAddress, coordinates }: AddressFormProps): JSX.Element {
  const [form] = Form.useForm();

  const [createAddress] = useCreateAddressMutation({
    onError: catchHelper,
    onCompleted: () => {
      toast.success('Хаяг амжилттай үүслээ');
      onSuccess();
    },
  });

  const [updateAddress] = useUpdateUserAddressMutation({
    onError: catchHelper,
    onCompleted: () => {
      toast.success('Хаяг амжилттай шинэчлэгдлээ');
      onSuccess();
    },
  });

  return (
    <Form
      form={form}
      initialValues={
        editAddress
          ? {
              alias: editAddress.addressAlias || 'Үндсэн',
              address1: editAddress.address1,
              address2: editAddress.address2,
            }
          : {
              alias: '',
              address1: '',
              address2: '',
            }
      }
      onFinish={(values) => {
        if (!coordinates) {
          toast.error('Газрын зургаас байршлаа сонгоно уу');
          return;
        }
        if (editAddress) {
          updateAddress({
            variables: {
              input: {
                id: editAddress.id,
                addressAttributes: {
                  address1: values.address1,
                  address2: values.address2,
                  addressAlias: values.alias,
                  latitude: coordinates.lat,
                  longitude: coordinates.lng,
                },
              },
            },
          });
        } else {
          createAddress({
            variables: {
              input: {
                addressAttributes: {
                  address1: values.address1,
                  address2: values.address2,
                  addressAlias: values.alias,
                  latitude: coordinates.lat,
                  longitude: coordinates.lng,
                },
              },
            },
          });
        }
      }}
      className="card bg-base-100 shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title mb-6 text-lg">{editAddress ? 'Хаяг засах' : 'Хүргэлтийн хаяг нэмэх'}</h2>

        <Field name="alias">
          {(control) => (
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">
                  Хаягийн нэр<span className="text-error">*</span>
                </span>
              </label>
              <input
                {...control}
                placeholder="Хаягийн нэр"
                className="input input-bordered w-full border-gray-200 focus:border-gray-300 focus:ring-0"
                required
              />
            </div>
          )}
        </Field>

        <Field name="address1">
          {(control) => (
            <div className="form-control mt-4 w-full">
              <label className="label">
                <span className="label-text">
                  Байршил<span className="text-error">*</span>
                </span>
              </label>
              <textarea
                {...control}
                className="textarea textarea-bordered h-20 border-gray-200 focus:border-gray-300 focus:ring-0"
                placeholder="Аймаг, хот, дүүрэг, хороо болон багаа бичнэ үү"
                required
              />
            </div>
          )}
        </Field>

        <Field name="address2">
          {(control) => (
            <div className="form-control mt-4 w-full">
              <label className="label">
                <span className="label-text">
                  Дэлгэрэнгүй хаяг<span className="text-error">*</span>
                </span>
              </label>
              <textarea
                {...control}
                className="textarea textarea-bordered h-24 border-gray-200 focus:border-gray-300 focus:ring-0"
                placeholder="Та хаягаа зөв дэлгэрэнгүй, тодорхой оруулаагүйгээс үүдэн хүргэлт удаашрах, эсвэл хүргэгдэхгүй байж болзошгүйг анхаарна уу!"
                required
              />
            </div>
          )}
        </Field>

        {!coordinates && <div className="mt-4 text-sm text-error">Газрын зургаас байршлаа заавал сонгоно уу</div>}

        <div className="card-actions mt-6 justify-end gap-2">
          <button type="button" onClick={() => onSuccess()} className="btn btn-ghost">
            Цуцлах
          </button>
          <button type="submit" className="btn btn-primary">
            {editAddress ? 'Шинэчлэх' : 'Хадгалах'}
          </button>
        </div>
      </div>
    </Form>
  );
}

interface AddressFormProps {
  onSuccess: () => void;
  editAddress?: Address;
  coordinates: { lat: string; lng: string } | null;
}

interface Address {
  id: string;
  address1: string;
  address2: string;
  addressAlias?: string | null | undefined;
  latitude?: string | null | undefined;
  longitude?: string | null | undefined;
}
