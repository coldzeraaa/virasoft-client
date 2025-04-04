export function numberFormatHelper(number: number): string {
  return `${number}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
