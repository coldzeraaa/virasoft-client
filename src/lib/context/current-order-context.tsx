'use client';

import { createContext, FC, PropsWithChildren, useContext, useEffect } from 'react';

import { CurrentOrderQuery, useCurrentOrderQuery } from '@/gql/query/order/current-order.generated';

export const CurrentOrderContext = createContext<CurrentOrderContextProps>({
  order: null,
  loading: false,
});

export const useCurrentOrder = () => useContext<CurrentOrderContextProps>(CurrentOrderContext);

export const CurrentOrderProvider: FC<PropsWithChildren> = ({ children }) => {
  const [number, token] = typeof window !== 'undefined' ? localStorage.getItem('order')?.split(':') || [] : [];
  const variables = number ? { number, token } : undefined;
  const { data, loading } = useCurrentOrderQuery({ variables, skip: typeof window === 'undefined' });

  useEffect(() => {
    if (data?.currentOrder?.userId) localStorage.removeItem('order');
  }, [data?.currentOrder?.userId]);

  return <CurrentOrderContext.Provider value={{ order: data?.currentOrder, loading }}>{children}</CurrentOrderContext.Provider>;
};

export interface CurrentOrderContextProps {
  order: CurrentOrderQuery['currentOrder'];
  loading: boolean;
}
