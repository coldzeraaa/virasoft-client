'use client';

import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';

import { useApolloClient } from '@apollo/client';
import cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { STORE_KEY_CONFIG } from '@/configs/STORE_KEY_CONFIG';
import { catchHelper } from '@/lib/helper/catch-helper';

export const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
  logout: () => {},
  login: () => new Promise((resolve) => resolve()),
  loginWithRouter: () => Promise<void>,
  setAuth: () => {},
});

export const useAuth = () => useContext<AuthContextProps>(AuthContext);

export const AuthProvider: FC<PropsWithChildren<{ user?: boolean }>> = ({ children, user = false }) => {
  const [isAuth, setAuth] = useState(user);
  const client = useApolloClient();
  const router = useRouter();

  const logout = useCallback(() => {
    cookies.remove(STORE_KEY_CONFIG.NEXT_USER_TOKEN);
    setAuth(false);
    toast.success(`Successfully logged out yes`);
    router.push('/auth/login');
    client.resetStore().catch(catchHelper);
  }, []);

  const login = useCallback(async () => {
    try {
      setAuth(true);
      await client.resetStore();
    } catch (e) {
      catchHelper(e);
    }
  }, []);

  const loginWithRouter = useCallback(async () => {
    try {
      setAuth(true);
      toast.success(`Welcome`);
      const from = cookies.get(STORE_KEY_CONFIG.NEXT_FROM);
      router.push(from || '/');
      await client.resetStore();
    } catch (e) {
      catchHelper(e);
    }
  }, []);

  return <AuthContext.Provider value={{ logout, isAuth, setAuth, login, loginWithRouter }}>{children}</AuthContext.Provider>;
};

export interface AuthContextProps {
  isAuth: boolean;
  setAuth(val: boolean): void;
  logout(): void;
  login(): Promise<void>;
  loginWithRouter(): void;
}
