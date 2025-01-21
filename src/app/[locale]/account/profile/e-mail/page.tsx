// 'use client';
import Form, { Field } from 'rc-field-form';

import { CustomInput } from '@/components/common/input';

export default function Info() {
  // const { data, laoding: meLoading } = useMeQuery();
  //   if (userDataLoading) {
  //     return <span className="loading loading-dots loading-lg"></span>;
  //   }
  //   const user = data?.me; // Assuming `me` contains user information
  // if (meLoading) {
  //   return (
  //     <div className="flex h-full items-center justify-center">
  //       <span className="loading loading-dots loading-lg"></span>
  //     </div>
  //   );
  // }
  return (
    <Form className="flex  gap-6" onFinish={(values) => {}}>
      <Field name="email">
        <CustomInput value="" placeholder="email"></CustomInput>
      </Field>

      <button className="btn btn-primary" type="submit">
        {' '}
        submit
      </button>
    </Form>
  );
}
