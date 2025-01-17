'use client';
import { useCallback, useState } from 'react';

import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
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
  const [marker, setMarker] = useState<google.maps.marker.AdvancedMarkerElement | null>(null);

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

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: APP_CONFIG.map.googleMapApiKey || '',
    libraries: ['marker'],
  });

  const onLoad = useCallback(
    (googleMap: google.maps.Map) => {
      const bounds = new window.google.maps.LatLngBounds(APP_CONFIG.map.defaultCenter);
      googleMap.fitBounds(bounds);
      setMap(googleMap);
    },
    [APP_CONFIG.map.defaultCenter],
  );

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  const updateMarker = useCallback(
    (position: google.maps.LatLngLiteral) => {
      if (!map) return;

      if (marker) {
        marker.map = null;
      }
      const newMarker = new google.maps.marker.AdvancedMarkerElement({
        map,
        position,
        gmpDraggable: true,
      });

      newMarker.addListener('dragend', () => {
        const markerPosition = newMarker.position as google.maps.LatLng;
        if (markerPosition) {
          setCoordinates({
            lat: markerPosition.lat().toString(),
            lng: markerPosition.lng().toString(),
          });
        }
      });

      setMarker(newMarker);
    },
    [map, marker, setCoordinates],
  );

  const handleMapClick = useCallback(
    (event: google.maps.MapMouseEvent) => {
      if (event.latLng) {
        const position = {
          lat: event.latLng.lat(),
          lng: event.latLng.lng(),
        };
        setCoordinates({
          lat: position.lat.toString(),
          lng: position.lng.toString(),
        });
        updateMarker(position);
      }
    },
    [setCoordinates, updateMarker],
  );

  const handleEditClick = (address: Address) => {
    setEditingAddress(address);
    setShowAddressForm({ map: true, address: true });

    if (address.latitude && address.longitude) {
      const position = {
        lat: parseFloat(address.latitude),
        lng: parseFloat(address.longitude),
      };
      setCoordinates({
        lat: address.latitude,
        lng: address.longitude,
      });
      map?.panTo(position);
      updateMarker(position);
    }
  };

  const handleAddressSelect = (address: Address) => {
    setSelectedAddress({
      ...address,
      latitude: coordinates?.lat || null,
      longitude: coordinates?.lng || null,
    });

    if (address.latitude && address.longitude) {
      const position = {
        lat: parseFloat(address.latitude),
        lng: parseFloat(address.longitude),
      };
      setCoordinates({
        lat: address.latitude,
        lng: address.longitude,
      });
      map?.panTo(position);
      updateMarker(position);
    }
  };

  const handleFormSuccess = () => {
    setShowAddressForm({ map: false, address: false });
    setEditingAddress(undefined);
    setCoordinates(null);
    if (marker) {
      marker.map = null;
      setMarker(null);
    }
    refetch();
  };
  useCallback(() => {
    if (coordinates && map) {
      const position = {
        lat: parseFloat(coordinates.lat),
        lng: parseFloat(coordinates.lng),
      };
      updateMarker(position);
    }
  }, [coordinates, map, updateMarker]);

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
              />
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
