'use client';

import { useState } from 'react';

import { useApolloClient } from '@apollo/client';
import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { BtnLoader, FieldForm, FormInput } from 'field-form';
import cookies from 'js-cookie';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import AnimateHeight from 'react-animate-height';
import { toast } from 'react-toastify';
import { catchHelper } from 'simple-helper-fns';

import { STORE_KEY_CONFIG } from '@/configs/STORE_KEY_CONFIG';
import { useAuthCheckLoginMutation } from '@/gql/mutation/user/auth-check-login.generated';

export function AuthLoginPageClient() {
  const [verified, setVerified] = useState(false);
  const [authCheckLogin, { loading: loadingAuth }] = useAuthCheckLoginMutation();
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const client = useApolloClient();

  return (
    <div className="container max-w-96">
      <FieldForm
        initialValues={{ login: searchParams.get('login') }}
        onFinish={async (values: { login: string; password: string }) => {
          try {
            if (verified) {
              setLoading(true);
              const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ login: values.login, password: values.password }),
              });
              const data = await response.json();
              if (response.ok) {
                cookies.set(STORE_KEY_CONFIG.NEXT_USER_TOKEN, JSON.stringify(data));
                await client.resetStore();
                toast.success('Амжилттай нэвтэрлээ');
                const from = searchParams.get('from');
                window.location.href = from ? `/${from}` : '/';
              } else toast.error(data.message);
              setLoading(false);
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
        <button disabled={loading || loadingAuth} type="submit" className="btn btn-primary btn-block text-base-100">
          <span>Үргэлжлүүлэх</span>
          <BtnLoader loading={loading || loadingAuth} icon={ChevronRightIcon} />
        </button>
      </FieldForm>
      <div className="flex justify-end gap-4">
        <div className="flex  items-center py-4  text-base-content">
          <Link href="/auth/forgot-password">forgot password</Link>
        </div>
        <div className="flex  items-center py-4  text-base-content">
          <Link href="/auth/register">register</Link>
        </div>
      </div>
    </div>
  );
}
