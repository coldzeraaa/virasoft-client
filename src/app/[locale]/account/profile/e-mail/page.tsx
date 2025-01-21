'use client';
import Form, { Field } from 'rc-field-form';

import { CustomInput } from '@/components/common/input';
import { useMeQuery } from '@/gql/query/user/me.generated';

const Info = () => {
  const { data, laoding: meLoading } = useMeQuery();
  //   if (userDataLoading) {
  //     return <span className="loading loading-dots loading-lg"></span>;
  //   }
  //   const user = data?.me; // Assuming `me` contains user information
  if (meLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <Form
      data={data}
      className="flex  gap-6"
      onFinish={(values) => {
        console.log(values);
      }}
    >
      <Field name="email">
        <CustomInput value="" placeholder="email"></CustomInput>
      </Field>

      <button className="btn btn-primary" type="submit">
        {' '}
        submit
      </button>
    </Form>
  );
};
export default Info;
