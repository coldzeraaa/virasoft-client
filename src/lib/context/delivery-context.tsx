'use client';
import React, { createContext, useContext, useState } from 'react';

interface DeliveryAddress {
  id: string;
  addressAlias: string;
  address1: string;
  address2: string;
  latitude: number | null;
  longitude: number | null;
}

interface DeliveryContextType {
  selectedAddress: DeliveryAddress | null;
  setSelectedAddress: (address: DeliveryAddress | null) => void;
  coordinates: { lat: number; lng: number } | null;
  setCoordinates: (coords: { lat: number; lng: number } | null) => void;
}

const DeliveryContext = createContext<DeliveryContextType | undefined>(undefined);

export function DeliveryProvider({ children }: { children: React.ReactNode }) {
  const [selectedAddress, setSelectedAddress] = useState<DeliveryAddress | null>(null);
  const [coordinates, setCoordinates] = useState<{ lat: number; lng: number } | null>(null);

  return (
    <DeliveryContext.Provider
      value={{
        selectedAddress,
        setSelectedAddress,
        coordinates,
        setCoordinates,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
}

export function useDelivery() {
  const context = useContext(DeliveryContext);
  if (context === undefined) {
    throw new Error('useDelivery must be used within a DeliveryProvider');
  }
  return context;
}
