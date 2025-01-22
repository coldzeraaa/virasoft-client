// 'use client';
import { FormInput } from 'field-form';
import Form, { Field } from 'rc-field-form';

export default function Info() {
  return (
    <Form className="flex  gap-6">
      <Field>
        <FormInput label="edmail" name="email" />
      </Field>

      <button className="btn btn-primary" type="submit">
        {' '}
        submit
      </button>
    </Form>
  );
}

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
