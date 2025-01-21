'use client';

import Form, { Field } from 'rc-field-form';
import { toast } from 'react-toastify';

import { CustomInput } from '@/components/common/input';
import { useSendOtpMutation } from '@/gql/mutation/user/auth-sendOtp.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';
import { catchHelper } from '@/lib/helper/catch-helper';

const Mobile = () => {
  const { data, loading: userDataLoading } = useMeQuery();
  //   if (userDataLoading) {
  //     return <span className="loading loading-dots loading-lg"></span>;
  //   }
  //   const user = data?.me; // Assuming `me` contains user information

  const [sendOtp, { loading: sentOtpLoading }] = useSendOtpMutation({
    onError: catchHelper,
    onCompleted(TData) {
      if (TData.sendOtp?.id) {
        toast.success('Token sent');
      } else toast.error('User not found');
    },
  });

  if (userDataLoading) {
    return (
      <div className="flex h-full items-center justify-center">
        <span className="loading loading-dots loading-lg"></span>
      </div>
    );
  }
  return (
    <Form
      className="flex flex-col gap-6 "
      onFinish={(values) => {
        sendOtp({ variables: { input: { login: values.mobile } } });
      }}
    >
      <div className="container flex flex-col items-center justify-center gap-6 ">
        <Field name="mobile">
          <CustomInput value={data?.me?.mobile || ''} placeholder="Phone number"></CustomInput>
        </Field>

        <button className="btn btn-primary w-fit" type="submit">
          {data?.me?.mobile ? 'Дугаар солих' : 'Баталгаажуулах код авах'}
        </button>
      </div>
    </Form>
  );
};
export default Mobile;
