import { createRef } from 'react';

export function NumberInput({ length = 4, value, onChange = () => true, disabled }: NumberInputProps) {
  const refs = Array.from({ length }).map(() => createRef<HTMLInputElement>());
  const values = value?.split('') || Array.from({ length }).map(() => '');

  return (
    <ul className={`grid ${spans[length]} gap-2`}>
      {Array.from({ length }).map((_, index) => (
        <li key={index}>
          <input
            ref={refs[index]}
            disabled={disabled}
            value={values[index] || ''}
            placeholder="*"
            onKeyDownCapture={(event) => {
              if (event.key === 'Backspace' && !values[index] && index - 1 >= 0) {
                refs[index - 1].current?.focus();
                refs[index - 1].current?.select();
              }
              if (event.key === 'ArrowLeft' && index - 1 >= 0) refs[index - 1].current?.focus();
              if (event.key === 'ArrowRight' && index + 1 < length) refs[index + 1].current?.focus();
            }}
            onChange={(event) => {
              if (event.target.value.length > 1) return onChange(event.target.value.slice(0, length));
              if (event.target.value) {
                if (index + 1 < length) refs[index + 1].current?.focus();
              } else if (index - 1 >= 0) {
                refs[index - 1].current?.focus();
                refs[index - 1].current?.select();
              }
              if (event.target.value && index + 1 === length) refs[index].current?.select();
              values[index] = event.target.value;
              onChange(values.join(''));
            }}
            onPaste={(event) => {
              const paste = event.clipboardData.getData('text');
              onChange(paste.slice(0, length));
              refs[paste.length > length ? length - 1 : paste.length].current?.focus();
            }}
            onSelect={() => refs[index].current?.select()}
            className="input input-bordered aspect-square w-full appearance-none text-center"
            maxLength={1}
          />
        </li>
      ))}
    </ul>
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
