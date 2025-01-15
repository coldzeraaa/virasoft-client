// 'use client';
// import { useState } from 'react';

// import { Trash } from 'lucide-react';
// import { toast } from 'react-toastify';

// import { AddressForm } from '@/components/address/address-form';
// import { useDestroyUserAddressAddressMutation } from '@/gql/mutation/address/destroy-address.generated';
// import { useMeQuery } from '@/gql/query/user/me.generated';
// import { catchHelper } from '@/lib/helper/catch-helper';
// const DeliveryOptions: React.FC = () => {
//   const { data, loading: queryLoading, refetch } = useMeQuery();
//   const [destroyAddress, { loading: deleteLoading }] = useDestroyUserAddressAddressMutation({
//     onError: catchHelper,
//     onCompleted: () => {
//       toast.success('Хаяг амжилттай устлаа');
//       refetch();
//     },
//   });

//   const [showAddressForm, setShowAddressForm] = useState(false);

//   if (queryLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="p-4">
//       <div className="mb-4">
//         <div className="grid-cols-[1fr, auto] grid rounded p-4">
//           <div className="grid grid-cols-1 items-center gap-4">
//             <div className="flex flex-col gap-4 rounded-lg border p-4">
//               {data?.me?.userAddresses.edges?.map((item, idx) => (
//                 <div key={idx} className="flex flex-col gap-2 border-b pb-4 last:border-b-0">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4">
//                       <label className="flex items-center space-x-2">
//                         <span className="relative flex items-center">
//                         <input type="radio" name="radio-1" className="radio" defaultChecked />
//                         </span>
//                       </label>
//                       <div>
//                         <div className="font-bold">{item.node.address.addressAlias}</div>
//                         <div className="text-sm text-gray-600">
//                           {item.node.address.address1} {item.node.address.address2}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <button type="button" className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600">
//                         Засварлах
//                       </button>
//                       <button
//                         type="button"
//                         className="btn btn-error btn-sm"
//                         onClick={() =>
//                           destroyAddress({
//                             variables: {
//                               input: { id: item.node.address.id },
//                             },
//                           })
//                         }
//                         disabled={deleteLoading}
//                         aria-label="Delete"
//                       >
//                         <Trash className="h-5 w-5" />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))}

//               <button
//                 onClick={() => setShowAddressForm((prev) => !prev)}
//                 type="button"
//                 className="hover:secondary flex items-center rounded bg-neutral px-4 py-2 text-white"
//               >
//                 <span role="img" aria-label="plus-circle" className="mr-2">
//                   ➕
//                 </span>
//                 Хүргэлтийн хаяг нэмэх
//               </button>
//             </div>
//             {showAddressForm && (
//               <div className="mt-4">
//                 <AddressForm
//                   onSuccess={() => {
//                     setShowAddressForm(false);
//                     refetch();
//                   }}
//                 />
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DeliveryOptions;

'use client';
import { useState } from 'react';

import { Trash } from 'lucide-react';
import { toast } from 'react-toastify';

import { AddressForm } from '@/components/address/address-form';
import { useDestroyUserAddressAddressMutation } from '@/gql/mutation/address/destroy-address.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

const DeliveryOptions: React.FC = () => {
  const { data, loading: queryLoading, refetch } = useMeQuery();
  const [destroyAddress, { loading: deleteLoading }] = useDestroyUserAddressAddressMutation({
    onError: catchHelper,
    onCompleted: () => {
      toast.success('Хаяг амжилттай устлаа');
      refetch();
    },
  });

  const [showAddressForm, setShowAddressForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState<{
    id: string;
    addressAlias: string;
    address1: string;
    address2: string;
  } | null>(null);

  if (queryLoading) {
    return <div>Loading...</div>;
  }

  const handleEditClick = (address: {
    id: string;
    addressAlias: string;
    address1: string;
    address2: string;
  }) => {
    setEditingAddress(address);
    setShowAddressForm(true);
  };

  const handleFormSuccess = () => {
    setShowAddressForm(false);
    setEditingAddress(null);
    refetch();
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <div className="grid-cols-[1fr, auto] grid rounded p-4">
          <div className="grid grid-cols-1 items-center gap-4">
            <div className="flex flex-col gap-4 rounded-lg border p-4">
              {data?.me?.userAddresses.edges?.map((item, idx) => (
                <div key={idx} className="flex flex-col gap-2 border-b pb-4 last:border-b-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <label className="flex items-center space-x-2">
                        <span className="relative flex items-center">
                          <input type="radio" name="radio-1" className="radio" defaultChecked />
                        </span>
                      </label>
                      <div>
                        <div className="font-bold">{item.node.address.addressAlias}</div>
                        <div className="text-sm text-gray-600">
                          {item.node.address.address1} {item.node.address.address2}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        className="rounded-lg bg-blue-500 px-4 py-2 text-sm font-medium text-white hover:bg-blue-600"
                        onClick={() =>
                          handleEditClick({
                            id: item.node.address.id,
                            addressAlias: item.node.address.addressAlias,
                            address1: item.node.address.address1,
                            address2: item.node.address.address2,
                          })
                        }
                      >
                        Засварлах
                      </button>
                      <button
                        type="button"
                        className="btn btn-error btn-sm"
                        onClick={() =>
                          destroyAddress({
                            variables: {
                              input: { id: item.node.address.id },
                            },
                          })
                        }
                        disabled={deleteLoading}
                        aria-label="Delete"
                      >
                        <Trash className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              {!showAddressForm && (
                <button
                  onClick={() => setShowAddressForm(true)}
                  type="button"
                  className="hover:secondary flex items-center rounded bg-neutral px-4 py-2 text-white"
                >
                  <span role="img" aria-label="plus-circle" className="mr-2">
                    ➕
                  </span>
                  Хүргэлтийн хаяг нэмэх
                </button>
              )}
            </div>
            {showAddressForm && (
              <div className="mt-4">
                <AddressForm
                  onSuccess={handleFormSuccess}
                  editAddress={editingAddress || undefined}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryOptions;