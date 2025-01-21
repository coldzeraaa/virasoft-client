import { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, ...props }: CustomInputProps) => (
  <input className="flex h-[50px]   rounded-lg px-4 py-2 shadow-lg" value={value} onChange={onChange} {...props} />
);
