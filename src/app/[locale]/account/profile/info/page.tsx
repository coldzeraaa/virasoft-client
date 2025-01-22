'use client';
import { FormInput } from 'field-form';
import Form, { Field } from 'rc-field-form';

export function Info() {
  <Form className="flex gap-6">
    <Field>
      <FormInput label="firstName" name="firstName" />
    </Field>
    <Field name="lastName">
      <FormInput label="Lastname" name="lastName" />
    </Field>

    <button className="btn btn-primary" type="submit">
      Шинэчлэх
    </button>
  </Form>;
}
export default Info;

// const { data, loading: meLoading } = useMeQuery();
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
