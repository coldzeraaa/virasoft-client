'use client';
import { InputHTMLAttributes, useState } from 'react';

import { useRouter } from 'next/navigation';
import Form, { Field } from 'rc-field-form';
import { toast } from 'react-toastify';

import { useAuthCheckLoginMutation } from '@/gql/mutation/user/auth-check-login.generated';
import { useAuthCheckOtpMutation } from '@/gql/mutation/user/auth-check-otp.generated';
import { useAuthRegisterMutation } from '@/gql/mutation/user/auth-register.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

export default function AuthRegister() {
  const [verified, setVerified] = useState(false);
  const [step, setStep] = useState(0);
  const router = useRouter();
  const [authCheckOTP] = useAuthCheckOtpMutation();
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
  const handleFormSubmit = async (values) => {
    try {
      if (!verified && step === 0) {
        await authCheckLogin({ variables: { input: { login: values.login, sendToken: true } } });
        setStep(1);
      } else if (step === 1) {
        const response = await authCheckOTP({
          variables: { input: { login: values.login, token: values.token, unconfirmedMobile: true } },
        });
        if (response?.data?.checkOtp) {
          setStep(2);
          toast.success('OTP verified');
        } else {
          toast.error('Invalid OTP');
        }
      } else if (step === 2) {
        await authRegister({ variables: { input: values } });
      }
    } catch (error) {
      catchHelper(error);
    }
  };

  return (
    <Form
      className="flex flex-col items-center justify-center gap-[12px] "
      onFinish={(values) => {
        handleFormSubmit(values);
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
