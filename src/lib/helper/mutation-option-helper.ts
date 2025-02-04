import type { MutationHookOptions } from '@apollo/client';
import { toast } from 'react-toastify';

import { catchHelper } from '@/lib/helper/catch-helper';
import type { AnyType } from '@/types/global-type';

export const mutationOptionHelper: MutationHookOptions<AnyType, AnyType> = {
  onError: catchHelper,
  onCompleted: () => toast.success('Success'),
};
