'use client';
import { InputHTMLAttributes, useState } from 'react';

import { useRouter } from 'next/navigation';
import Form, { Field } from 'rc-field-form';
import { toast } from 'react-toastify';

import { useAuthResetPasswordMutation } from '@/gql/mutation/user/auth-reset-password.generated';
import { useSendOtpMutation } from '@/gql/mutation/user/auth-sendOtp.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

const ForgotPasswordClient = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const [AuthResetPassword] = useAuthResetPasswordMutation({
    onCompleted(TData) {
      if (TData?.resetPassword?.id) {
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
    <div className="container items-center justify-center py-[40px]">
      <Form
        className=" flex gap-[20px]"
        onFinish={(values) => {
          try {
            if (step === 0) {
              sendOtp({ variables: { input: { login: values.login } } });
            } else if (step === 1) {
              sendOtp({ variables: { input: { login: values.login } } });
            } else if (step === 2 && values.password === values.repassword) {
              AuthResetPassword({ variables: { input: { login: values.login, password: values.password, token: values.token } } });
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

        <button className="btn" disabled={sentOtpLoading} type="submit">
          Submit
        </button>
      </Form>
    </div>
  );
};

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ value = '', onChange, ...props }: CustomInputProps) => (
  <input className="flex h-[50px] w-[250px] rounded-[8px] px-[4px] py-[8px]" value={value} onChange={onChange} {...props} />
);

// interface ResetpasswordFormValues {
//   login: string;
//   token: string;
//   password: string;
//   repassword: string;
// }

export default ForgotPasswordClient;
