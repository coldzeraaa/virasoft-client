'use client';

import Form, { Field } from 'rc-field-form';

export function ContactForm() {
  return (
    <Form className="space-y-4">
      <Field name="name" rules={[{ required: true, message: 'Нэрээ оруулна уу' }]}>
        <input
          placeholder="Таны нэр"
          className="input input-bordered w-full border-l-0 border-r-0 border-t-0 bg-transparent focus:outline-0"
        />
      </Field>
      <Field
        name="email"
        rules={[
          { required: true, message: 'И-мэйл хаягаа оруулна уу' },
          { type: 'email', message: 'Зөв и-мэйл хаяг оруулна уу' },
        ]}
      >
        <input
          type="email"
          placeholder="И-мэйл хаяг"
          className="input input-bordered w-full border-l-0 border-r-0 border-t-0 bg-transparent focus:outline-0"
        />
      </Field>
      <Field name="message" rules={[{ required: true, message: 'Мессежээ оруулна уу' }]}>
        <textarea
          placeholder="Нэмэлт тайлбар болон санал хүсэлтээ бичнэ үү.."
          className="input input-bordered w-full resize-none border-l-0 border-r-0 border-t-0 bg-transparent focus:outline-0"
        />
      </Field>
      <button type="submit" className="btn btn-primary w-fit text-info-content">
        {' '}
        ИЛГЭЭХ
      </button>
    </Form>
  );
}

export default ContactForm;
