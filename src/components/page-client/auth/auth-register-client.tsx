'use client';
import { InputHTMLAttributes, useState } from 'react';

import { useRouter } from 'next/navigation';
import Form, { Field } from 'rc-field-form';
import { toast } from 'react-toastify';

import { useAuthCheckLoginMutation } from '@/gql/mutation/user/auth-check-login.generated';
import { useCheckOtpMutation } from '@/gql/mutation/user/auth-check-otp.generated';
import { useAuthRegisterMutation } from '@/gql/mutation/user/auth-register.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

export default function AuthRegisterClient() {
  const [verified, setVerified] = useState(false);
  const [step, setStep] = useState(0);
  const router = useRouter();
  const [CheckOTP, { loading: checkOtpLoading }] = useCheckOtpMutation({
    onCompleted(TData) {
      if (TData.checkOtp) {
        setStep(2);
        toast.success('OTP verified');
      } else {
        toast.error('Invalid OTP');
      }
    },
  });
  const [authCheckLogin, { loading: loadingAuthCheckLogin }] = useAuthCheckLoginMutation({
    onCompleted(TData) {
      if (TData.authCheckLogin?.exists) toast.error('User already exists');
      else {
        setVerified(true);
        toast.success('Token sent');
        setStep(1);
      }
    },
  });
  const [authRegister, { loading: loadingAuthRegister }] = useAuthRegisterMutation({
    onError: catchHelper,
    onCompleted() {
      if (!loadingAuthRegister) {
        router.push('/auth/login');
        toast.success('User registered. Please login');
      }
    },
  });
  return (
    <Form
      className="flex flex-col items-center justify-center gap-[12px] "
      onFinish={(values) => {
        try {
          if (!verified && step === 0) {
            authCheckLogin({ variables: { input: { login: values.login, sendToken: true } } });
          } else if (step === 1) {
            CheckOTP({
              variables: { input: { login: values.login, token: values.token, unconfirmedMobile: true } },
            });
          } else if (step === 2) {
            authRegister({ variables: { input: values } });
          }
        } catch (error) {
          catchHelper(error);
        }
      }}
      onFinishFailed={catchHelper}
    >
      <div className={`${step === 0 ? 'flex' : 'hidden'}`}>
        <Field name="login" rules={[{ required: true, message: 'Утасны дугаар оруулна уу ' }]}>
          <CustomInput value="" placeholder="Phone number" />
        </Field>
      </div>
      <div className={`${step === 1 ? 'flex' : 'hidden'}`}>
        <Field name="token" rules={[{ required: verified, message: 'OTP code үруулна уу ' }]}>
          <CustomInput value="" placeholder="OTP code" />
        </Field>
      </div>
      <div className={`${step === 2 ? 'flex' : 'hidden'} flex-col gap-[20px]`}>
        <Field name="firstName" rules={[{ message: 'Нэр оруулна уу  ' }]}>
          <CustomInput value="" placeholder="firstname" />
        </Field>
        <Field name="lastName" rules={[{ message: 'Нууц үг ' }]}>
          <CustomInput value="" placeholder="lastname" />
        </Field>
        <Field name="password" rules={[{ message: 'Нууц үг ' }]}>
          <CustomInput value="" type="password" placeholder="Password" />
        </Field>
      </div>

      <div className="">
        <button className="btn btn-primary " disabled={loadingAuthRegister || loadingAuthCheckLogin || checkOtpLoading} type="submit">
          Submit
        </button>
      </div>
    </Form>
  );
}

const CustomInput: React.FC<CustomInputProps> = ({ value = '', onChange, ...props }: CustomInputProps) => (
  <input className="input shadow-md " value={value} onChange={onChange} {...props} />
);

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}
