import { createRef } from 'react';

import type { AnyType } from '@/types/global-type';

export function NumberInput({ length = 4, value, onChange = () => true, disabled }: NumberInputProps) {
  const refs = Array.from({ length }).map(() => createRef<HTMLInputElement>());
  const values = value?.split('') || Array.from({ length }).map(() => '');

  return (
    <div className={`grid ${spans[length]} gap-2`}>
      {Array.from({ length }).map((_, idx) => (
        <input
          key={idx}
          ref={refs[idx]}
          disabled={disabled}
          value={values[idx] || ''}
          placeholder="*"
          onKeyDownCapture={(event) => {
            if (event.key === 'Backspace' && !values[idx] && idx - 1 >= 0) refs[idx - 1]?.current?.focus();
            if (event.key === 'ArrowLeft' && idx - 1 >= 0) refs[idx - 1]?.current?.focus();
            if (event.key !== 'Backspace' && event.key !== 'ArrowLeft' && idx + 1 < length) refs[idx + 1]?.current?.focus();
          }}
          onChange={(event) => {
            if (event.target.value.length > 1) return onChange(event.target.value.slice(0, length));
            if (idx === length - 1 && event.target.value) (event.target as AnyType).select();
            values[idx] = event.target.value;
            onChange(values.join(''));
          }}
          onSelect={(event) => (event.target as AnyType).select()}
          onPaste={(event) => {
            const paste = event.clipboardData.getData('text');
            onChange(paste.slice(0, length));
            refs[paste.length > length ? length - 1 : paste.length]?.current?.focus();
          }}
          className="input input-bordered aspect-square w-full appearance-none text-center"
          maxLength={1}
        />
      ))}
    </div>
  );
}

const spans = [
  'grid-cols-1',
  'grid-cols-1',
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-4',
  'grid-cols-5',
  'grid-cols-6',
  'grid-cols-7',
  'grid-cols-8',
  'grid-cols-9',
  'grid-cols-10',
  'grid-cols-11',
  'grid-cols-12',
];

export interface NumberInputProps {
  length?: number;
  value?: string;
  disabled?: boolean;
  onChange?(value: string): void;
}
