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
        toast.success('Token sent');
        setStep(1);
      } else toast.error('User not found');
    },
  });

  return (
    <div className="container flex  items-center justify-center py-10">
      <Form
        className=" flex flex-col gap-4"
        onFinish={(values) => {
          try {
            if (step === 0) {
              sendOtp({ variables: { input: { login: values.login } } });
            } else if (step === 1) {
              sendOtp({ variables: { input: { login: values.login } } });
            } else if (step === 2 && values.password === values.repassword) {
              resetPassword({ variables: { input: { login: values.login, password: values.password, token: values.token } } });
              toast.success('Password reset successful');
            } else if (values.password !== values.repassword) {
              toast.error(' password not match');
            }
          } catch (error) {
            catchHelper(error);
          }
        }}
      >
        <div className={`${step === 0 ? 'flex' : 'hidden'} `}>
          <Field name="login">
            <CustomInput value="" placeholder="Phone number" />
          </Field>
        </div>
        <div className={`${step === 1 ? 'flex' : 'hidden'} `}>
          <Field name="token">
            <CustomInput value="" placeholder="OTP code " />
          </Field>
        </div>
        <div className={`${step === 2 ? 'flex' : 'hidden'} `}>
          <Field name="password">
            <CustomInput value="" placeholder="password" type="password" />
          </Field>
          <Field name="repassword">
            <CustomInput value="" placeholder="password" type="password" />
          </Field>
        </div>

        <button className="btn btn-primary  " disabled={sentOtpLoading || resetPasswordLoading} type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

const CustomInput: React.FC<CustomInputProps> = ({ value = '', onChange, ...props }: CustomInputProps) => (
  <input className="input flex  shadow-md" value={value} onChange={onChange} {...props} />
);
interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}
export default ForgotPasswordClient;
