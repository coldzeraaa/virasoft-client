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
      if (TData.authCheckLogin?.exists) {
        toast.error('User already exists');
      } else {
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
    <div className="container flex  items-center justify-center bg-base-100 py-10">
      <Form
        className="w-full max-w-md rounded-3xl bg-base-100 p-8 shadow-lg"
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
        {/* Step 1: Enter Phone Number */}
        <div className={`${step === 0 ? 'block' : 'hidden'}`}>
          <Field name="login" rules={[{ required: true, message: 'Утасны дугаар оруулна уу' }]}>
            {({ field }) => (
              <CustomInput
                {...field}
                placeholder="Утасны дугаар"
                className="input-bordered w-full rounded-lg border border-base-200 px-4 py-3 text-sm text-base-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            )}
          </Field>
        </div>

        {/* Step 2: Enter OTP Code */}
        <div className={`${step === 1 ? 'block' : 'hidden'}`}>
          <Field name="token" rules={[{ required: verified, message: 'OTP код оруулна уу' }]}>
            {({ field }) => (
              <CustomInput
                {...field}
                placeholder="OTP код"
                className="input-bordered w-full rounded-lg border border-base-200 px-4 py-3 text-sm text-base-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            )}
          </Field>
        </div>

        {/* Step 3: Enter User Details */}
        <div className={`${step === 2 ? 'block' : 'hidden'} space-y-4`}>
          <Field name="firstName" rules={[{ required: true, message: 'Нэр оруулна уу' }]}>
            {({ field }) => (
              <CustomInput
                {...field}
                placeholder="Нэр"
                className="input-bordered w-full rounded-lg border border-base-200 px-4 py-3 text-sm text-base-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            )}
          </Field>
          <Field name="lastName" rules={[{ required: true, message: 'Овог оруулна уу' }]}>
            {({ field }) => (
              <CustomInput
                {...field}
                placeholder="Овог"
                className="input-bordered w-full rounded-lg border border-base-200 px-4 py-3 text-sm text-base-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            )}
          </Field>
          <Field name="password" rules={[{ required: true, message: 'Нууц үг оруулна уу' }]}>
            {({ field }) => (
              <CustomInput
                {...field}
                type="password"
                placeholder="Нууц үг"
                className="input-bordered w-full rounded-lg border border-base-200 px-4 py-3 text-sm text-base-300 shadow-sm focus:border-primary focus:ring-primary"
              />
            )}
          </Field>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="hover:bg-primary-dark disabled:base-200 btn btn-primary mt-6 w-full rounded-lg bg-primary py-3 text-sm font-medium text-base-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          disabled={loadingAuthRegister || loadingAuthCheckLogin || checkOtpLoading}
        >
          {loadingAuthRegister || loadingAuthCheckLogin || checkOtpLoading ? <span className="loading loading-spinner"></span> : 'Илгээх'}
        </button>
      </Form>
    </div>
  );
}

// Custom Input Component
const CustomInput: React.FC<CustomInputProps> = ({ value = '', onChange, ...props }: CustomInputProps) => (
  <input
    className="w-full rounded-lg border border-base-200 px-4 py-3 text-sm text-base-300 shadow-sm focus:border-primary focus:ring-primary"
    value={value}
    onChange={onChange}
    {...props}
  />
);

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}
