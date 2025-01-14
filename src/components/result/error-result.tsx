import { ReactNode } from 'react';

import { ExclamationTriangleIcon } from '@heroicons/react/16/solid';

export function ErrorResult({ message, description, extra }: { message: string; description?: string; extra?: ReactNode }) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <ExclamationTriangleIcon className="mb-4 w-12 text-error" />
      <h2 className="mb-2 text-lg">{message}</h2>
      {description && <h2 className="mb-4">{description}</h2>}
      {extra && <div className="flex space-x-2">{extra}</div>}
    </div>
  );
}
