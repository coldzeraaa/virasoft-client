'use client';

import { createContext, FC, PropsWithChildren, useCallback, useContext, useState } from 'react';

import { useApolloClient } from '@apollo/client';
import type { OauthTokenType } from 'doorkeeper-oauth-flow';
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
    client
      .resetStore()
      .then(() => {
        toast.success(`Successfully logged out yes`);
        router.push('/api/auth/logout');
      })
      .catch(catchHelper);
  }, []);

  const login = useCallback(async () => {
    try {
      setAuth(true);
      await client.resetStore();
      window.location.reload();
    } catch (e) {
      catchHelper(e);
    }
  }, []);

  const loginWithRouter = useCallback(async (value: OauthTokenType) => {
    try {
      setAuth(true);
      toast.success(`Welcome`);
      cookies.set(STORE_KEY_CONFIG.NEXT_USER_TOKEN, JSON.stringify(value));
      await client.resetStore();
      router.push('/api/auth/login');
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
  loginWithRouter(val: OauthTokenType): void;
}
