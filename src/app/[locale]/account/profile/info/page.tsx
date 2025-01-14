'use client';

import Form, { Field } from 'rc-field-form';

import { CustomInput } from '@/components/common/input';
import { useMeQuery } from '@/gql/query/user/me.generated';

const Info = () => {
  const { data } = useMeQuery();
  //   if (userDataLoading) {
  //     return <span className="loading loading-dots loading-lg"></span>;
  //   }
  //   const user = data?.me; // Assuming `me` contains user information
  return (
    <Form data={data} onFinish={console.log(data)}>
      <Field name="firstName">
        <CustomInput value={data?.me?.firstName || ''} placeholder="Firstname"></CustomInput>
      </Field>
      <button className="btn btn-primary" type="submit">
        {' '}
        submit
      </button>
    </Form>
  );
};
export default Info;
