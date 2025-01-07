import { ApolloError } from '@apollo/client';
import type { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { toast } from 'react-toastify';

export function catchHelper(error: unknown): void {
  if (error instanceof ApolloError) {
    error.graphQLErrors.forEach((field) => toast.error(field.message));
    return;
  }

  if (error instanceof Error) {
    toast.error(error?.message);
    return;
  }

  if (typeof error === 'object' && error !== null && 'errorFields' in error && Array.isArray((error as ValidateErrorEntity).errorFields)) {
    (error as ValidateErrorEntity).errorFields.forEach((field) => toast.error(field.errors.join('\n')));
    return;
  }

  toast.error(JSON.stringify(error));
}
