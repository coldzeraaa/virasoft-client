// 'use client';
// import { useCallback, useState } from 'react';

// import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
// import { Trash } from 'lucide-react';
// import { toast } from 'react-toastify';

// import { AddressForm } from '@/components/address/address-form';
// import { APP_CONFIG } from '@/configs/APP_CONFIG';
// import { useDestroyUserAddressMutation } from '@/gql/mutation/address/destroy-address.generated';
// import { useMeQuery } from '@/gql/query/user/me.generated';
// import { catchHelper } from '@/lib/helper/catch-helper';

// export function DeliveryOptions({ selectedAddress, setSelectedAddress, coordinates, setCoordinates }: DeliveryOptionsProps): JSX.Element {
//   const { data, loading: queryLoading, refetch } = useMeQuery();
//   const [map, setMap] = useState<google.maps.Map | null>(null);

//   const [destroyAddress, { loading: deleteLoading }] = useDestroyUserAddressMutation({
//     onError: catchHelper,
//     onCompleted: () => {
//       toast.success('Хаяг амжилттай устлаа');
//       refetch();
//     },
//   });

//   const [showAddressForm, setShowAddressForm] = useState<AddressFormState>({
//     address: false,
//     map: false,
//   });

//   const [editingAddress, setEditingAddress] = useState<Address | undefined>(undefined);

//   const center = APP_CONFIG.map.defaultCenter;

//   const { isLoaded } = useJsApiLoader({
//     id: 'google-map-script',
//     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
//   });

//   const onLoad = useCallback(
//     (googleMap: google.maps.Map) => {
//       const bounds = new window.google.maps.LatLngBounds(center);
//       googleMap.fitBounds(bounds);
//       setMap(googleMap);
//     },
//     [center],
//   );

//   const onUnmount = useCallback(() => {
//     setMap(null);
//   }, []);

//   const handleMapClick = useCallback(
//     (event: google.maps.MapMouseEvent) => {
//       if (event.latLng) {
//         const lat = event.latLng.lat().toString();
//         const lng = event.latLng.lng().toString();
//         setCoordinates({ lat, lng });
//       }
//     },
//     [setCoordinates],
//   );

//   const handleEditClick = (address: Address) => {
//     setEditingAddress(address);
//     setShowAddressForm({ map: true, address: true });

//     if (address.latitude && address.longitude) {
//       const location = {
//         lat: address.latitude,
//         lng: address.longitude,
//       };
//       setCoordinates(location);
//       map?.panTo({
//         lat: parseFloat(address.latitude),
//         lng: parseFloat(address.longitude),
//       });
//     }
//   };

//   const handleAddressSelect = (address: Address) => {
//     setSelectedAddress({
//       ...address,
//       latitude: coordinates?.lat || null,
//       longitude: coordinates?.lng || null,
//     });

//     if (address.latitude && address.longitude) {
//       const location = {
//         lat: address.latitude,
//         lng: address.longitude,
//       };
//       setCoordinates(location);
//       map?.panTo({
//         lat: parseFloat(address.latitude),
//         lng: parseFloat(address.longitude),
//       });
//     }
//   };

//   const handleFormSuccess = () => {
//     setShowAddressForm({ map: false, address: false });
//     setEditingAddress(undefined);
//     setCoordinates(null);
//     refetch();
//   };

//   if (queryLoading) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div className="grid grid-cols-1 gap-4">
//       <div className="flex flex-col gap-4 rounded-lg">
//         {data?.me?.userAddresses.edges?.map((item, idx) => (
//           <div key={idx} className="flex flex-col gap-2 border-b pb-4 last:border-b-0">
//             <div className="flex items-center justify-between">
//               <div className="flex items-center gap-4">
//                 <label className="flex items-center space-x-2">
//                   <input
//                     type="radio"
//                     name="address-selection"
//                     className="radio radio-sm"
//                     checked={selectedAddress?.id === item.node.address.id}
//                     onChange={() => handleAddressSelect(item.node.address)}
//                   />
//                 </label>
//                 <div>
//                   <div className="font-bold">{item.node.address.addressAlias}</div>
//                   <div className="text-sm text-gray-600">
//                     {item.node.address.address1} {item.node.address.address2}
//                   </div>
//                 </div>
//               </div>
//               <div className="flex items-center gap-2">
//                 <button type="button" className="btn btn-info btn-sm" onClick={() => handleEditClick(item.node.address)}>
//                   Засварлах
//                 </button>
//                 <button
//                   type="button"
//                   className="btn btn-error btn-sm"
//                   onClick={() =>
//                     destroyAddress({
//                       variables: {
//                         input: { id: item.node.address.id },
//                       },
//                     })
//                   }
//                   disabled={deleteLoading}
//                   aria-label="Delete"
//                 >
//                   <Trash className="h-5 w-5" />
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}

//         {!showAddressForm.address && (
//           <button
//             onClick={() => setShowAddressForm({ map: true, address: true })}
//             className="hover:secondary flex items-center rounded bg-neutral px-4 py-2 text-white"
//           >
//             Хүргэлтийн хаяг нэмэх
//           </button>
//         )}
//         {showAddressForm.address && <AddressForm onSuccess={handleFormSuccess} editAddress={editingAddress} />}
//       </div>
//       <div className="flex flex-col gap-4">
//         {isLoaded && (
//           <GoogleMap
//             mapContainerClassName="w-full h-[400px] rounded-lg"
//             center={coordinates ? { lat: parseFloat(coordinates.lat), lng: parseFloat(coordinates.lng) } : center}
//             zoom={14}
//             onLoad={onLoad}
//             onUnmount={onUnmount}
//             onClick={handleMapClick}
//           >
//             {coordinates && (
//               <Marker
//                 position={{ lat: parseFloat(coordinates.lat), lng: parseFloat(coordinates.lng) }}
//                 draggable={true}
//                 onDragEnd={(e) => {
//                   if (e.latLng) {
//                     setCoordinates({
//                       lat: e.latLng.lat().toString(),
//                       lng: e.latLng.lng().toString(),
//                     });
//                   }
//                 }}
//               />
//             )}
//           </GoogleMap>
//         )}
//       </div>
//     </div>
//   );
// }

// interface Address {
//   id: string;
//   address1: string;
//   address2: string;
//   addressAlias?: string | null | undefined;
//   latitude?: string | null | undefined;
//   longitude?: string | null | undefined;
// }

// interface AddressFormState {
//   address: boolean;
//   map: boolean;
// }

// interface DeliveryOptionsProps {
//   selectedAddress: Address | undefined;
//   setSelectedAddress: (address: Address | undefined) => void;
//   coordinates: { lat: string; lng: string } | null;
//   setCoordinates: (coords: { lat: string; lng: string } | null) => void;
// }

'use client';
import { useCallback, useState } from 'react';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { Trash } from 'lucide-react';
import { toast } from 'react-toastify';

import { AddressForm } from '@/components/address/address-form';
import { APP_CONFIG } from '@/configs/APP_CONFIG';
import { useDestroyUserAddressMutation } from '@/gql/mutation/address/destroy-address.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

export function DeliveryOptions({ selectedAddress, setSelectedAddress, coordinates, setCoordinates }: DeliveryOptionsProps): JSX.Element {
  const { data, loading: queryLoading, refetch } = useMeQuery();
  const [map, setMap] = useState<google.maps.Map | null>(null);

  const [destroyAddress, { loading: deleteLoading }] = useDestroyUserAddressMutation({
    onError: catchHelper,
    onCompleted: () => {
      toast.success('Хаяг амжилттай устлаа');
      refetch();
    },
  });

  const [showAddressForm, setShowAddressForm] = useState<AddressFormState>({
    address: false,
    map: false,
  });

  const [editingAddress, setEditingAddress] = useState<Address | undefined>(undefined);

  const center = APP_CONFIG.map.defaultCenter;

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const onLoad = useCallback(
    (googleMap: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds(center);
      googleMap.fitBounds(bounds);
      setMap(googleMap);
    },
    [center],
  );

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const handleMapClick = useCallback(
    (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        const lat = event.latLng.lat().toString();
        const lng = event.latLng.lng().toString();
        setCoordinates({ lat, lng });
      }
    },
    [setCoordinates],
  );

  const handleEditClick = (address: Address) => {
    setEditingAddress(address);
    setShowAddressForm({ map: true, address: true });

    if (address.latitude && address.longitude) {
      const location = {
        lat: address.latitude,
        lng: address.longitude,
      };
      setCoordinates(location);
      map?.panTo({
        lat: parseFloat(address.latitude),
        lng: parseFloat(address.longitude),
      });
    }
  };

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress({
      ...address,
      latitude: coordinates?.lat || null,
      longitude: coordinates?.lng || null,
    });

    if (address.latitude && address.longitude) {
      const location = {
        lat: address.latitude,
        lng: address.longitude,
      };
      setCoordinates(location);
      map?.panTo({
        lat: parseFloat(address.latitude),
        lng: parseFloat(address.longitude),
      });
    }
  };

  const handleFormSuccess = () => {
    setShowAddressForm({ map: false, address: false });
    setEditingAddress(undefined);
    setCoordinates(null);
    refetch();
  };

  if (queryLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4">
      <div className="flex flex-col gap-4 rounded-lg">
        {data?.me?.userAddresses.edges?.map((item, idx) => (
          <div key={idx} className="flex flex-col gap-2 border-b pb-4 last:border-b-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="address-selection"
                    className="radio radio-sm"
                    checked={selectedAddress?.id === item.node.address.id}
                    onChange={() => handleAddressSelect(item.node.address)}
                  />
                </label>
                <div>
                  <div className="font-bold">{item.node.address.addressAlias}</div>
                  <div className="text-sm text-gray-600">
                    {item.node.address.address1} {item.node.address.address2}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button type="button" className="btn btn-info btn-sm" onClick={() => handleEditClick(item.node.address)}>
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

        {!showAddressForm.address && (
          <button
            onClick={() => setShowAddressForm({ map: true, address: true })}
            className="hover:secondary flex items-center rounded bg-neutral px-4 py-2 text-white"
          >
            Хүргэлтийн хаяг нэмэх
          </button>
        )}
        {showAddressForm.address && (
          <>
            <AddressForm onSuccess={handleFormSuccess} editAddress={editingAddress} coordinates={coordinates} />
            {isLoaded && (
              <GoogleMap
                mapContainerClassName="w-full h-[400px] rounded-lg mt-4"
                center={coordinates ? { lat: parseFloat(coordinates.lat), lng: parseFloat(coordinates.lng) } : center}
                zoom={14}
                onLoad={onLoad}
                onUnmount={onUnmount}
                onClick={handleMapClick}
              >
                {coordinates && (
                  <Marker
                    position={{ lat: parseFloat(coordinates.lat), lng: parseFloat(coordinates.lng) }}
                    draggable={true}
                    onDragEnd={(e) => {
                      if (e.latLng) {
                        setCoordinates({
                          lat: e.latLng.lat().toString(),
                          lng: e.latLng.lng().toString(),
                        });
                      }
                    }}
                  />
                )}
              </GoogleMap>
            )}
          </>
        )}
      </div>
    </div>
  );
}

interface DeliveryOptionsProps {
  selectedAddress: Address | undefined;
  setSelectedAddress: (address: Address | undefined) => void;
  coordinates: { lat: string; lng: string } | null;
  setCoordinates: (coords: { lat: string; lng: string } | null) => void;
}

interface AddressFormState {
  address: boolean;
  map: boolean;
}

interface Address {
  id: string;
  address1: string;
  address2: string;
  addressAlias?: string | null | undefined;
  latitude?: string | null | undefined;
  longitude?: string | null | undefined;
}
