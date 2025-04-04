import { FormItemProps } from "@/components/form/form-item";
import { InputFormType } from "@/components/form/input-form";

export interface InputProps extends Omit<FormItemProps, "children"> {
  input?: InputFormType;
}
