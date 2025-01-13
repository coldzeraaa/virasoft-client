import { ReactNode } from 'react';

import { BugAntIcon } from '@heroicons/react/16/solid';

export function EmptyResult({ message, description, extra }: { message?: string; description?: string; extra?: ReactNode }) {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <BugAntIcon className="mb-4 w-12 text-error" />
      <h2 className="mb-2 text-lg">{message || `Empty`}</h2>
      {description && <h2 className="mb-4">{description}</h2>}
      {extra && <div className="flex space-x-2">{extra}</div>}
    </div>
  );
}
