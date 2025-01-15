// import { useState } from 'react';

// import { toast } from 'react-toastify';

// import { useCreateAddressMutation } from '@/gql/mutation/address/create-address.generated';
// import mongoliaRegions from '@/lib/data/mongolian-regions';
// import { catchHelper } from '@/lib/helper/catch-helper';
// export const AddressForm: React.FC<AddressFormProps> = ({ onSuccess }) => {
//   const [formData, setFormData] = useState({
//     alias: '',
//     city: '',
//     district: '',
//     neighborhood: '',
//     address: '',
//   });

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
//     const { name, value, type, checked } = event.target;
  
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' || type === 'radio' ? checked : value,
//       ...(name === 'city' && { district: '', neighborhood: '' }),
//       ...(name === 'district' && { neighborhood: '' }),
//     }));
//   };
  
//   const [createAddress] = useCreateAddressMutation({
//     onError: catchHelper,
//     onCompleted: () => {
//       toast.success('Хаяг амжилттай үүслээ');
//       onSuccess();
//     },
//   });

//   const cityData = mongoliaRegions.find((region) => region.name === formData.city);
//   const districts = cityData?.soums || [];
//   const neighborhoods = districts.find((d) => d.name === formData.district)?.bags || [];

//   return (
//     <form
//       onSubmit={(e) => {
//         e.preventDefault();
//         createAddress({
//           variables: {
//             input: {
//               addressAttributes: {
//                 address1: [formData.city, formData.district, formData.neighborhood].filter(Boolean).join(' '),
//                 address2: formData.address,
//                 addressAlias: formData.alias,
//               },
//             },
//           },
//         });
//       }}
//       className="card bg-base-100 shadow-xl"
//     >
//       <div className="card-body">
//         <h2 className="card-title mb-6 text-lg">Хүргэлтийн хаяг нэмэх</h2>

//         <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
//           {/* Address Name */}
//           <div className="form-control w-full">
//             <label className="label">
//               <span className="label-text">
//                 Хаягийн нэр<span className="text-error">*</span>
//               </span>
//             </label>
//             <input
//               type="text"
//               name="alias"
//               value={formData.alias}
//               onChange={handleChange}
//               placeholder="Хаягийн нэр"
//               className="input input-bordered w-full border-gray-200 focus:border-gray-300 focus:ring-0"
//               required
//             />
//           </div>

//           {/* Combined Location Selector */}
//           <div className="form-control w-full lg:col-span-3">
//             <label className="label">
//               <span className="label-text">
//                 Байршил<span className="text-error">*</span>
//               </span>
//             </label>
//             <div className="join w-full">
//               <select
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 className="join-item select select-bordered flex-1 border-gray-200 focus:border-gray-300 focus:ring-0"
//                 required
//               >
//                 <option value="">Хот, аймаг</option>
//                 {mongoliaRegions.map((province) => (
//                   <option key={province.name} value={province.name}>
//                     {province.name}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 name="district"
//                 value={formData.district}
//                 onChange={handleChange}
//                 className="join-item select select-bordered flex-1 border-gray-200 focus:border-gray-300 focus:ring-0"
//                 disabled={!formData.city}
//                 required
//               >
//                 <option value="">Дүүрэг</option>
//                 {districts.map((district) => (
//                   <option key={district.name} value={district.name}>
//                     {district.name}
//                   </option>
//                 ))}
//               </select>

//               <select
//                 name="neighborhood"
//                 value={formData.neighborhood}
//                 onChange={handleChange}
//                 className="join-item select select-bordered flex-1 border-gray-200 focus:border-gray-300 focus:ring-0"
//                 disabled={!formData.district}
//                 required
//               >
//                 <option value="">Хороо</option>
//                 {neighborhoods.map((neighborhood, idx) => (
//                   <option key={idx} value={neighborhood}>
//                     {neighborhood}
//                   </option>
//                 ))}
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Detailed Address */}
//         <div className="form-control mt-4 w-full">
//           <label className="label">
//             <span className="label-text">
//               Дэлгэрэнгүй хаяг<span className="text-error">*</span>
//             </span>
//           </label>
//           <textarea
//             name="address"
//             value={formData.address}
//             onChange={handleChange}
//             className="textarea textarea-bordered h-24 border-gray-200 focus:border-gray-300 focus:ring-0"
//             placeholder="Та хаягаа зөв дэлгэрэнгүй, тодорхой оруулаагүйгээс үүдэн хүргэлт удаашрах, эсвэл хүргэгдэхгүй байж болзошгүйг анхаарна уу!"
//             required
//           />
//         </div>

//         {/* Action Buttons */}
//         <div className="card-actions mt-6 justify-end gap-2">
//           <button type="submit" className="btn btn-primary">
//             Хадгалах
//           </button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default AddressForm;

// interface AddressFormProps {
//   onSuccess: () => void;
// }

import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

import { useCreateAddressMutation } from '@/gql/mutation/address/create-address.generated';
import { useUpdateUserAddressMutation } from '@/gql/mutation/address/update-address.generated';
import mongoliaRegions from '@/lib/data/mongolian-regions';
import { catchHelper } from '@/lib/helper/catch-helper';

interface AddressFormProps {
  onSuccess: () => void;
  editAddress?: {
    id: string;
    addressAlias: string;
    address1: string;
    address2: string;
  };
}

export const AddressForm: React.FC<AddressFormProps> = ({ onSuccess, editAddress }) => {
  const [formData, setFormData] = useState({
    alias: '',
    city: '',
    district: '',
    neighborhood: '',
    address: '',
  });

  useEffect(() => {
    if (editAddress) {
      const [city = '', district = '', neighborhood = ''] = editAddress.address1.split(' ');
      setFormData({
        alias: editAddress.addressAlias,
        city,
        district,
        neighborhood,
        address: editAddress.address2,
      });
    }
  }, [editAddress]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = event.target;
  
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' || type === 'radio' ? checked : value,
      ...(name === 'city' && { district: '', neighborhood: '' }),
      ...(name === 'district' && { neighborhood: '' }),
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

  const cityData = mongoliaRegions.find((region) => region.name === formData.city);
  const districts = cityData?.soums || [];
  const neighborhoods = districts.find((d) => d.name === formData.district)?.bags || [];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const addressData = {
      addressAttributes: {
        address1: [formData.city, formData.district, formData.neighborhood].filter(Boolean).join(' '),
        address2: formData.address,
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
  };

  return (
    <form onSubmit={handleSubmit} className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title mb-6 text-lg">
          {editAddress ? 'Хаяг засах' : 'Хүргэлтийн хаяг нэмэх'}
        </h2>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">
                Хаягийн нэр<span className="text-error">*</span>
              </span>
            </label>
            <input
              type="text"
              name="alias"
              value={formData.alias}
              onChange={handleChange}
              placeholder="Хаягийн нэр"
              className="input input-bordered w-full border-gray-200 focus:border-gray-300 focus:ring-0"
              required
            />
          </div>

          <div className="form-control w-full lg:col-span-3">
            <label className="label">
              <span className="label-text">
                Байршил<span className="text-error">*</span>
              </span>
            </label>
            <div className="join w-full">
              <select
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="join-item select select-bordered flex-1 border-gray-200 focus:border-gray-300 focus:ring-0"
                required
              >
                <option value="">Хот, аймаг</option>
                {mongoliaRegions.map((province) => (
                  <option key={province.name} value={province.name}>
                    {province.name}
                  </option>
                ))}
              </select>

              <select
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="join-item select select-bordered flex-1 border-gray-200 focus:border-gray-300 focus:ring-0"
                disabled={!formData.city}
                required
              >
                <option value="">Дүүрэг</option>
                {districts.map((district) => (
                  <option key={district.name} value={district.name}>
                    {district.name}
                  </option>
                ))}
              </select>

              <select
                name="neighborhood"
                value={formData.neighborhood}
                onChange={handleChange}
                className="join-item select select-bordered flex-1 border-gray-200 focus:border-gray-300 focus:ring-0"
                disabled={!formData.district}
                required
              >
                <option value="">Хороо</option>
                {neighborhoods.map((neighborhood, idx) => (
                  <option key={idx} value={neighborhood}>
                    {neighborhood}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-control mt-4 w-full">
          <label className="label">
            <span className="label-text">
              Дэлгэрэнгүй хаяг<span className="text-error">*</span>
            </span>
          </label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="textarea textarea-bordered h-24 border-gray-200 focus:border-gray-300 focus:ring-0"
            placeholder="Та хаягаа зөв дэлгэрэнгүй, тодорхой оруулаагүйгээс үүдэн хүргэлт удаашрах, эсвэл хүргэгдэхгүй байж болзошгүйг анхаарна уу!"
            required
          />
        </div>

        <div className="card-actions mt-6 justify-end gap-2">
          {editAddress && (
            <button 
              type="button" 
              onClick={() => onSuccess()} 
              className="btn btn-ghost"
            >
              Цуцлах
            </button>
          )}
          <button type="submit" className="btn btn-primary">
            {editAddress ? 'Шинэчлэх' : 'Хадгалах'}
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddressForm;