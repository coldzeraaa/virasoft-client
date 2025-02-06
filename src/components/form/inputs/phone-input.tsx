import { NumberInput, type NumberInputProps } from '@/components/form/inputs/number-input';

export function PhoneInput(props: Pick<NumberInputProps, 'value' | 'onChange'>) {
  return <NumberInput length={8} {...props} />;
}
