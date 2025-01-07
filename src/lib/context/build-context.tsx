'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

import { usePathname, useRouter, useSearchParams } from 'next/navigation';

interface BuildContextType {
  activeSection: string;
  selectedProducts: Record<string, string>;
  setActiveSection: (section: string) => void;
  selectProduct: (type: string, id: string) => void;
}

const BuildContext = createContext<BuildContextType | undefined>(undefined);

export function BuildContextProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState('Загвар');
  const [selectedProducts, setSelectedProducts] = useState<Record<string, string>>({});
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    const urlProducts: Record<string, string> = {};
    params.forEach((value, key) => {
      urlProducts[key] = value;
    });
    setSelectedProducts(urlProducts);
  }, []);

  const selectProduct = (type: string, id: string) => {
    setSelectedProducts((prev) => ({
      ...prev,
      [type]: `${id}`,
    }));

    const params = new URLSearchParams(searchParams.toString());
    params.set(type, id);
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <BuildContext.Provider
      value={{
        activeSection,
        setActiveSection,
        selectedProducts,
        selectProduct,
      }}
    >
      {children}
    </BuildContext.Provider>
  );
}

export function useBuild() {
  const context = useContext(BuildContext);
  if (!context) {
    throw new Error('useBuild must be used within a BuildProvider');
  }
  return context;
}
