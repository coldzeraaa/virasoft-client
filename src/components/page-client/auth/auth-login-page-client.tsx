'use client';

import { useState } from 'react';

import { ChevronRightIcon } from '@heroicons/react/16/solid';
import { FieldForm, FormInput } from 'field-form';
import AnimateHeight from 'react-animate-height';
import { catchHelper } from 'simple-helper-fns';

export function AuthLoginPageClient() {
  const [verify, setVerify] = useState(false);

  return (
    <div className="container max-w-96">
      <FieldForm
        // form={form}
        onFinish={(values) => {
          console.log('>>>  , values >>>', values);
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
          <AnimateHeight height={verify ? 'auto' : 0}>
            <FormInput
              label="Нууц үг"
              name="password"
              rules={[{ required: verify, message: 'Нууц үг оруулна уу' }]}
              input={{ placeholder: '*****', type: 'password' }}
            />
          </AnimateHeight>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          <span>Үргэлжлүүлэх</span>
          <ChevronRightIcon className="w-4" />
        </button>
      </FieldForm>
    </div>
  );
}
