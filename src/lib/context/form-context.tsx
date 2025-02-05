'use client';

import { createContext, FC, PropsWithChildren, useContext } from 'react';

import Form, { type FormInstance } from 'rc-field-form';

export const FormContext = createContext<FormContextProps>({
  form: {
    getFieldValue: () => null,
    getFieldsValue: () => null,
    getFieldError: () => [],
    getFieldsError: () => [],
    getFieldWarning: () => [],
    isFieldsTouched: () => false,
    isFieldTouched: () => false,
    isFieldValidating: () => false,
    isFieldsValidating: () => false,
    resetFields: () => null,
    setFields: () => null,
    setFieldValue: () => null,
    setFieldsValue: () => null,
    validateFields: async () => null,
    submit: () => null,
  },
});

export const useForm = () => useContext<FormContextProps>(FormContext);

export const FormProvider: FC<PropsWithChildren> = ({ children }) => {
  const [form] = Form.useForm();

  return (
    <FormContext.Provider value={{ form }}>
      <Form form={form}>{children}</Form>
    </FormContext.Provider>
  );
};

export interface FormContextProps {
  form: FormInstance;
}
