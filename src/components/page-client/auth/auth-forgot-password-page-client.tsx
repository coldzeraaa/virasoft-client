'use client';

import { useState } from 'react';

import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { BtnLoader, FormInput } from 'field-form';
import { ChevronLeftIcon } from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import { toast } from 'react-toastify';

import { PhoneInput } from '@/components/form/inputs/phone-input';
import { TokenInput } from '@/components/form/inputs/token-input';
import { useCheckOtpMutation } from '@/gql/mutation/user/auth-check-otp.generated';
import { useSendOtpMutation } from '@/gql/mutation/user/auth-send-otp.generated';
import { FormProvider, useForm } from '@/lib/context/form-context';
import { catchHelper } from '@/lib/helper/catch-helper';
import { mutationOptionHelper } from '@/lib/helper/mutation-option-helper';

export function AuthForgotPasswordPageClient() {
  const [step, setStep] = useState<Step>('check');
  const searchParams = useSearchParams();
  const login = searchParams.get('login');

  return (
    <FormProvider initialValues={{ login }}>
      <div className="mb-4">
        <FormInput
          label="Утасны дугаар"
          name="login"
          className={step === 'check' ? '' : 'hidden'}
          rules={[{ required: true, message: 'Утасны дугаар оруулна уу' }]}
          input={{ type: 'custom', component: PhoneInput }}
        />
        <FormInput
          label="Утсанд ирсэн код"
          name="token"
          className={step === 'otp' ? '' : 'hidden'}
          rules={[{ required: true, message: 'Утсанд ирсэн код оруулна уу' }]}
          input={{ type: 'custom', component: TokenInput }}
        />
      </div>
      {step === 'check' && <BtnCheck onSuccess={() => setStep('otp')} />}
      {step === 'otp' && <BtnOtp onSuccess={() => setStep('reset')} onBack={() => setStep('check')} />}
    </FormProvider>
  );
}

function BtnCheck({ onSuccess }: { onSuccess(): void }) {
  const { form } = useForm();
  const [sendOtp, { loading }] = useSendOtpMutation({ ...mutationOptionHelper, onCompleted: () => true });

  return (
    <button
      disabled={loading}
      type="button"
      className="btn btn-primary btn-block text-base-100"
      onClick={async () => {
        try {
          const values = await form.getFieldsValue(['login']);
          const response = await sendOtp({ variables: { input: { login: values.login } } });
          if (response.data?.sendOtp?.id) {
            onSuccess();
            toast.success('Таны утасны дугаар руу код илгээгдлээ');
          } else toast.error('Хэрэглэгч олдсонгүй');
        } catch (error) {
          catchHelper(error);
        }
      }}
    >
      <span>Үргэлжлүүлэх</span>
      <BtnLoader loading={loading} icon={ChevronRightIcon} />
    </button>
  );
}
function BtnOtp({ onSuccess, onBack }: { onSuccess(): void; onBack(): void }) {
  const { form } = useForm();
  const [checkOtp, { loading }] = useCheckOtpMutation({ ...mutationOptionHelper, onCompleted: () => true });

  return (
    <div className="flex gap-2">
      <button type="button" onClick={onBack} className="btn">
        <ChevronLeftIcon />
        Буцах
      </button>
      <button
        disabled={loading}
        type="button"
        className="btn btn-primary btn-block flex-1 text-base-100"
        onClick={async () => {
          try {
            const values = await form.getFieldsValue(['login', 'token']);
            const response = await checkOtp({
              variables: { input: { login: values.login, token: values.token, unconfirmedMobile: false } },
            });
            if (response.data?.checkOtp) onSuccess();
            else toast.error('Токен буруу байна');
          } catch (error) {
            catchHelper(error);
          }
        }}
      >
        <span>Үргэлжлүүлэх</span>
        <BtnLoader loading={loading} icon={ChevronRightIcon} />
      </button>
    </div>
  );
}

type Step = 'check' | 'otp' | 'reset';
