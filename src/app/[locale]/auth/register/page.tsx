'use client';
import { InputHTMLAttributes, useState } from 'react';

import { useRouter } from 'next/navigation';
import Form, { Field } from 'rc-field-form';
import { toast } from 'react-toastify';

import { useAuthCheckLoginMutation } from '@/gql/mutation/user/auth-check-login.generated';
import { useAuthRegisterMutation } from '@/gql/mutation/user/auth-register.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

export default function AuthRegister() {
  const [verified, setVerified] = useState(false);
  const router = useRouter();
  const [authCheckLogin, { loading: loadingAuthCheckLogin }] = useAuthCheckLoginMutation({
    onCompleted(TData) {
      if (TData.authCheckLogin?.exists) toast.error('User already exists');
      else {
        setVerified(true);
        toast.success('Token sent');
      }
    },
  });
  const [authRegister, { loading: loadingAuthRegister }] = useAuthRegisterMutation({
    onError: catchHelper,
    onCompleted() {
      router.push('/auth/login');
      toast.success('User registered. Please login');
    },
  });

  return (
    <Form
      className="flex flex-col items-center justify-center gap-[12px] "
      onFinish={(values) => {
        if (!verified) return authCheckLogin({ variables: { input: { login: values.login, sendToken: true } } });
        else return authRegister({ variables: { input: values } });
      }}
      onFinishFailed={catchHelper}
    >
      <Field name="login" rules={[{ required: true, message: 'Утасны дугаар оруулна уу ' }]}>
        <CustomInput value="" placeholder="Phone number" />
      </Field>
      <Field name="token" rules={[{ required: verified, message: 'OTP code үруулна уу ' }]}>
        <CustomInput value="" placeholder="OTP code" />
      </Field>
      <Field name="userName" rules={[{ required: verified, message: 'Нэр оруулна уу  ' }]}>
        <CustomInput value="" placeholder="userName" />
      </Field>
      <Field name="password" rules={[{ required: verified, message: 'Нууц үг ' }]}>
        <CustomInput value="" placeholder="Password" />
      </Field>

      <div className="">
        <button className="btn btn-primary" disabled={loadingAuthRegister || loadingAuthCheckLogin} type="submit">
          Submit
        </button>
      </div>
    </Form>
  );
}

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ value = '', onChange, ...props }: CustomInputProps) => (
  <input className="flex h-[50px] w-[250px] rounded-[8px] px-[4px] py-[8px]" value={value} onChange={onChange} {...props} />
);
