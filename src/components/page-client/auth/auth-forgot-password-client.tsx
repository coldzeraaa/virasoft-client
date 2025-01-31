'use client';
import { InputHTMLAttributes, useState } from 'react';

import { useRouter } from 'next/navigation';
import Form, { Field } from 'rc-field-form';
import { toast } from 'react-toastify';

import { useResetPasswordMutation } from '@/gql/mutation/user/auth-reset-password.generated';
import { useSendOtpMutation } from '@/gql/mutation/user/auth-sendOtp.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

const ForgotPasswordClient = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();

  const [resetPassword, { loading: resetPasswordLoading }] = useResetPasswordMutation({
    onCompleted(TData) {
      if (TData?.resetPassword?.id && !resetPasswordLoading) {
        toast.success('Password reset successful');
        router.push('/auth/login');
      }
    },
  });

  const [sendOtp, { loading: sentOtpLoading }] = useSendOtpMutation({
    onError: catchHelper,
    onCompleted(TData) {
      if (TData.sendOtp?.id) {
        toast.success('OTP sent successfully');
        setStep(1);
      } else {
        toast.error('User not found');
      }
    },
  });

  return (
    <div className="container flex  items-center justify-center bg-base-100 py-10">
      <Form
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
        onFinish={(values) => {
          try {
            if (step === 0) {
              sendOtp({ variables: { input: { login: values.login } } });
            } else if (step === 1) {
              setStep(2); // Move to the next step after OTP verification
            } else if (step === 2 && values.password === values.repassword) {
              resetPassword({
                variables: { input: { login: values.login, password: values.password, token: values.token } },
              });
            } else if (values.password !== values.repassword) {
              toast.error('Passwords do not match');
            }
          } catch (error) {
            catchHelper(error);
          }
        }}
      >
        {/* Step 1: Enter Phone Number */}
        <div className={`${step === 0 ? 'block' : 'hidden'}`}>
          <Field name="login">
            {({ field }) => (
              <CustomInput
                {...field}
                placeholder="Утасны дугаар"
                className="input-bordered w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 shadow-sm focus:border-primary focus:ring-primary"
              />
            )}
          </Field>
        </div>

        {/* Step 2: Enter OTP Code */}
        <div className={`${step === 1 ? 'block' : 'hidden'}`}>
          <Field name="token">
            {({ field }) => (
              <CustomInput
                {...field}
                placeholder="OTP код"
                className="input-bordered w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 shadow-sm focus:border-primary focus:ring-primary"
              />
            )}
          </Field>
        </div>

        {/* Step 3: Enter New Password */}
        <div className={`${step === 2 ? 'block' : 'hidden'}`}>
          <Field name="password">
            {({ field }) => (
              <CustomInput
                {...field}
                type="password"
                placeholder="Шинэ нууц үг"
                className="input-bordered mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 shadow-sm focus:border-primary focus:ring-primary"
              />
            )}
          </Field>
          <Field name="repassword">
            {({ field }) => (
              <CustomInput
                {...field}
                type="password"
                placeholder="Шинэ нууц үг давтах"
                className="input-bordered w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 shadow-sm focus:border-primary focus:ring-primary"
              />
            )}
          </Field>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="hover:bg-primary-dark btn btn-primary mt-6 w-full rounded-lg bg-primary py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 disabled:bg-gray-300"
          disabled={sentOtpLoading || resetPasswordLoading}
        >
          {sentOtpLoading || resetPasswordLoading ? <span className="loading loading-spinner"></span> : 'Илгээх'}
        </button>
      </Form>
    </div>
  );
};

// Custom Input Component
const CustomInput: React.FC<CustomInputProps> = ({ value = '', onChange, ...props }: CustomInputProps) => (
  <input
    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-700 shadow-sm focus:border-primary focus:ring-primary"
    value={value}
    onChange={onChange}
    {...props}
  />
);

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

export default ForgotPasswordClient;
