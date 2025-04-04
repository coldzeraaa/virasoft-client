'use client';

import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import { APP_CONFIG } from '@/configs/APP_CONFIG.virasoft';

export function MapInput({ value, onChange }: MapInputProps) {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script2',
    googleMapsApiKey: APP_CONFIG.map.googleMapApiKey || '',
  });

  if (!isLoaded) return null;

  return (
    <GoogleMap
      mapContainerClassName="w-full h-[400px] rounded-lg mt-4"
      center={APP_CONFIG.map.defaultCenter}
      zoom={14}
      options={{
        mapId: APP_CONFIG.map.googleMapId || '',
        disableDefaultUI: false,
        clickableIcons: false,
      }}
      onClick={(event) => {
        if (event.latLng && onChange) {
          const lat = event.latLng.lat();
          const lng = event.latLng.lng();
          onChange({ lat, lng });
        }
      }}
    // onLoad={onLoad}
    // onUnmount={onUnmount}
    // onClick={handleMapClick}
    >
      {value && <Marker position={value} />}
    </GoogleMap>
  );
}

export interface MapInputProps {
  value?: { lat: number; lng: number };
  onChange?(value?: { lat: number; lng: number }): void;
}
