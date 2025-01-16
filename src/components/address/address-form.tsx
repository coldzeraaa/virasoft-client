import { useEffect, useState } from 'react';

import { toast } from 'react-toastify';

import { useCreateAddressMutation } from '@/gql/mutation/address/create-address.generated';
import { useUpdateUserAddressMutation } from '@/gql/mutation/address/update-address.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

export function AddressForm({ onSuccess, editAddress }: AddressFormProps): JSX.Element {
  const [formData, setFormData] = useState<{ alias: string | null | undefined; address1: string; address2: string }>({
    alias: '',
    address1: '',
    address2: '',
  });

  useEffect(() => {
    if (editAddress) {
      setFormData({
        alias: editAddress.addressAlias,
        address1: editAddress.address1,
        address2: editAddress.address2,
      });
    }
  }, [editAddress]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

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
    <form
      onSubmit={(event) => {
        event.preventDefault();

        const addressData = {
          addressAttributes: {
            address1: formData.address1,
            address2: formData.address2,
            addressAlias: formData.alias,
          },
        };

        if (editAddress) {
          updateAddress({
            variables: {
              input: {
                id: editAddress.id,
                ...addressData,
              },
            },
          });
        } else {
          createAddress({
            variables: {
              input: addressData,
            },
          });
        }
      }}
      className="card bg-base-100 shadow-xl"
    >
      <div className="card-body">
        <h2 className="card-title mb-6 text-lg">{editAddress ? 'Хаяг засах' : 'Хүргэлтийн хаяг нэмэх'}</h2>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">
              Хаягийн нэр<span className="text-error">*</span>
            </span>
          </label>
          <input
            name="alias"
            value={formData.alias ?? 'Үндсэн'}
            onChange={handleChange}
            placeholder="Хаягийн нэр"
            className="input input-bordered w-full border-gray-200 focus:border-gray-300 focus:ring-0"
            required
          />
        </div>

        <div className="form-control mt-4 w-full">
          <label className="label">
            <span className="label-text">
              Байршил<span className="text-error">*</span>
            </span>
          </label>
          <textarea
            name="address1"
            value={formData.address1}
            onChange={handleChange}
            className="textarea textarea-bordered h-20 border-gray-200 focus:border-gray-300 focus:ring-0"
            placeholder="Аймаг, хот, дүүрэг, хороо болон багаа бичнэ үү"
            required
          />
        </div>

        <div className="form-control mt-4 w-full">
          <label className="label">
            <span className="label-text">
              Дэлгэрэнгүй хаяг<span className="text-error">*</span>
            </span>
          </label>
          <textarea
            name="address2"
            value={formData.address2}
            onChange={handleChange}
            className="textarea textarea-bordered h-24 border-gray-200 focus:border-gray-300 focus:ring-0"
            placeholder="Та хаягаа зөв дэлгэрэнгүй, тодорхой оруулаагүйгээс үүдэн хүргэлт удаашрах, эсвэл хүргэгдэхгүй байж болзошгүйг анхаарна уу!"
            required
          />
        </div>

        <div className="card-actions mt-6 justify-end gap-2">
          <button type="button" onClick={() => onSuccess()} className="btn btn-ghost">
            Цуцлах
          </button>
          <button type="submit" className="btn btn-primary">
            {editAddress ? 'Шинэчлэх' : 'Хадгалах'}
          </button>
        </div>
      </div>
    </form>
  );
}

interface AddressFormProps {
  onSuccess: () => void;
  editAddress?: Address;
}

interface Address {
  id: string;
  address1: string;
  address2: string;
  addressAlias?: string | null | undefined;
  latitude?: string | null | undefined;
  longitude?: string | null | undefined;
}
