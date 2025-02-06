import { NumberInput, type NumberInputProps } from '@/components/form/inputs/number-input';

export function TokenInput(props: Pick<NumberInputProps, 'value' | 'onChange'>) {
  return <NumberInput length={4} {...props} />;
}
