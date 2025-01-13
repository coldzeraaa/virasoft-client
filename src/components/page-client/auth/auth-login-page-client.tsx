'use client';

import { useState } from 'react';

import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { OauthFlow } from 'doorkeeper-oauth-flow';
import { BtnLoader, FieldForm, FormInput } from 'field-form';
import cookies from 'js-cookie';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import AnimateHeight from 'react-animate-height';
import { toast } from 'react-toastify';
import { catchHelper } from 'simple-helper-fns';

import { APP_CONFIG } from '@/configs/APP_CONFIG';
import { HOST_CONFIG } from '@/configs/HOST_CONFIG';
import { STORE_KEY_CONFIG } from '@/configs/STORE_KEY_CONFIG';
import { useAuthCheckLoginMutation } from '@/gql/mutation/user/auth-check-login.generated';
import { useAuth } from '@/lib/context/auth-context';

export function AuthLoginPageClient() {
  const [verified, setVerified] = useState(false);
  const [authCheckLogin, { loading: loadingAuth }] = useAuthCheckLoginMutation();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const { loginWithRouter } = useAuth();

  return (
    <div className="container max-w-96">
      <FieldForm
        initialValues={{ login: searchParams.get('login') }}
        onFinish={async (values: { login: string; password: string }) => {
          try {
            if (verified) {
              setLoading(true);
              const response = await oauthFlow.generateToken(undefined, {
                headers: { Authorization: `Basic ${btoa(`${APP_CONFIG.tokens.uid}:${APP_CONFIG.tokens.secret}`)}` },
                body: { grant_type: 'password', password: values.password, username: values.login },
              });
              if (response?.access_token) {
                setLoading(false);
                cookies.set(STORE_KEY_CONFIG.NEXT_USER_TOKEN, JSON.stringify(response));
                loginWithRouter();
              } else {
                setLoading(false);
              }
            } else {
              const response = await authCheckLogin({ variables: { input: { login: values.login } } });
              if (response.data?.authCheckLogin?.exists) {
                if (document) document.getElementById('login-password')?.focus();
                setVerified(true);
              } else {
                toast.error(`${values.login} is not registered`);
              }
            }
          } catch (e) {
            catchHelper(e);
            setLoading(false);
          }
        }}
        onFinishFailed={catchHelper}
      >
        <div className="mb-4">
          <FormInput
            label="Утасны дугаар"
            name="login"
            rules={[{ required: true, message: 'Утасны дугаар оруулна уу' }]}
            input={{ placeholder: '990011**' }}
          />
          <AnimateHeight height={verified ? 'auto' : 0}>
            <FormInput
              label="Нууц үг"
              name="password"
              rules={[{ required: verified, message: 'Нууц үг оруулна уу' }]}
              input={{ placeholder: '*****', type: 'password' }}
            />
          </AnimateHeight>
        </div>
        <button disabled={loading || loadingAuth} type="submit" className="btn btn-primary btn-block">
          <span>Үргэлжлүүлэх</span>
          <BtnLoader loading={loading || loadingAuth} icon={ChevronRightIcon} />
        </button>
      </FieldForm>
      <div className="flex justify-end gap-4">
        <div className="flex  items-center  py-4">
          <Link href="/auth/forgot-password">forgot password</Link>
        </div>
        <div className="flex  items-center  py-4">
          <Link href="/auth/register">register</Link>
        </div>
      </div>
    </div>
  );
}

const oauthFlow = new OauthFlow({ uid: APP_CONFIG.tokens.uid, secret: APP_CONFIG.tokens.secret, host: HOST_CONFIG.host });
