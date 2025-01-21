// 'use client';
import Form, { Field } from 'rc-field-form';

import { CustomInput } from '@/components/common/input';

const Info = () => (
  // const { data, loading: userDataLoading } = useMeQuery();
  // if (userDataLoading) {
  //   return (
  //     <div className="flex h-full items-center justify-center">
  //       <span className="loading loading-dots loading-lg"></span>
  //     </div>
  //   );
  // }

  //   if () {
  //     return <span className="loading loading-dots loading-lg"></span>;
  //   }
  //   const user = data?.me; // Assuming `me` contains user information
  <Form
    className="flex gap-6"
    onFinish={(values) => {
      console.log(values);
    }}
  >
    <Field name="old-password">
      <CustomInput value="" placeholder="Old password"></CustomInput>
    </Field>
    <Field name="new-password">
      <CustomInput value="" placeholder="New password" type="password"></CustomInput>
    </Field>
    <Field name="repassword">
      <CustomInput value="" placeholder="re-password" type="password"></CustomInput>
    </Field>

    <button className="btn btn-primary" type="submit">
      {' '}
      submit
    </button>
  </Form>
);
export default Info;
