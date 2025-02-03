import type { MutationHookOptions } from '@apollo/client';
import { toast } from 'react-toastify';

import { catchHelper } from '@/lib/helper/catch-helper';

export const mutationOptionHelper: MutationHookOptions<
  any, // eslint-disable-line @typescript-eslint/no-explicit-any
  any //eslint-disable-line @typescript-eslint/no-explicit-any
> = { onError: catchHelper, onCompleted: () => toast.success('Success') };
