import { numberFormatHelper } from "@/lib/helper/format/number-format-helper";

export function moneyFormatHelper(price: number): string {
  return `${numberFormatHelper(price)}₮`;
}
