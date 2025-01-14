import { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  value?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({ value = '', onChange, ...props }: CustomInputProps) => (
  <input className="flex h-[50px] w-[250px] rounded-[8px] px-[4px] py-[8px]" value={value} onChange={onChange} {...props} />
);
