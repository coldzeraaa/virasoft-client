// 'use client';
import { FormInput } from 'field-form';
import Form, { Field } from 'rc-field-form';

export default function Info() {
  <Form className="flex gap-6">
    <Field>
      <FormInput label="old Password" name="old-assword" />
    </Field>
    <Field>
      <FormInput label="new-password" name="new-password" />
    </Field>
    <Field>
      <FormInput label="re-password" name="re-password" />
    </Field>

    <button className="btn btn-primary" type="submit">
      Шинэчлэх
    </button>
  </Form>;
}
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
