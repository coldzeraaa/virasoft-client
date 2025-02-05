'use client';

import { createContext, FC, useContext } from 'react';

import Form, { type FormInstance, FormProps } from 'rc-field-form';

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

export const FormProvider: FC<FormProps> = ({ children, ...rest }) => {
  const [form] = Form.useForm();

  return (
    <FormContext.Provider value={{ form }}>
      <Form form={form} {...rest}>
        {children}
      </Form>
    </FormContext.Provider>
  );
};

export interface FormContextProps {
  form: FormInstance;
}
