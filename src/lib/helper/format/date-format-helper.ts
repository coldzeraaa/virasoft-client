export function dateFormatHelper(date?: string, separator?: string): string {
  if (!date) return '';
  const d = new Date(date);
  return `${d.getFullYear()}${separator || '-'}${d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1}${separator || '-'}${d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()}`;
}
