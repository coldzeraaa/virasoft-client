'use client';
import { InputHTMLAttributes, useState } from 'react';

import { useRouter } from 'next/navigation';
import Form, { Field } from 'rc-field-form';
import { toast } from 'react-toastify';

import { useAuthCheckOtpMutation } from '@/gql/mutation/user/auth-check-otp.generated';
import { useAuthResetPasswordMutation } from '@/gql/mutation/user/auth-reset-password.generated';
import { useSendOtpMutation } from '@/gql/mutation/user/auth-sendOtp.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

const ForgotPassword = () => {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const [authCheckOTP, { loading: checkOtpLoading }] = useAuthCheckOtpMutation();
  const [AuthResetPassword] = useAuthResetPasswordMutation();
  const [sendOtp, { loading: sentOtpLoading }] = useSendOtpMutation({
    onError: catchHelper,
    onCompleted(TData) {
      if (TData.sendOtp?.id) {
        toast.success('Token sent');
        setStep(1);
      } else toast.error('User not found');
    },
  });

  const checkLogin = async (values: ResetpasswordFormValues) => {
    await sendOtp({ variables: { input: { login: values.login } } });
  };
  const checkOtp = async (values: ResetpasswordFormValues) => {
    const response = await authCheckOTP({
      variables: { input: { login: values.login, token: values.token, unconfirmedMobile: true } },
    });
    if (response?.data?.checkOtp) {
      setStep(2);
      toast.success('OTP verified');
    } else {
      toast.error('Invalid OTP');
    }
  };
  const resetPassword = async (values: ResetpasswordFormValues) => {
    const res = await AuthResetPassword({ variables: { input: { login: values.login, password: values.password, token: values.token } } });
    if (res?.data?.resetPassword?.id) {
      toast.success('Password reset successful');
      router.push('/auth/login');
    }
  };
  return (
    <div className="container items-center justify-center py-[40px]">
      <Form
        className=" flex gap-[20px]"
        onFinish={(values) => {
          try {
            if (step === 0) {
              checkLogin(values);
            } else if (step === 1) {
              checkOtp(values);
            } else if (step === 2 && values.password === values.repassword) {
              resetPassword(values);
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

        <button className="btn" disabled={checkOtpLoading || sentOtpLoading} type="submit">
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

interface ResetpasswordFormValues {
  login: string;
  token: string;
  password: string;
  repassword: string;
}

export default ForgotPassword;
