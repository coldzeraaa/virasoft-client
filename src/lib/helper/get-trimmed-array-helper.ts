export function getTrimmedArrayHelper(value: unknown) {
  return JSON.stringify(value)
    .split(',')
    .map((v) => v.trim());
}
