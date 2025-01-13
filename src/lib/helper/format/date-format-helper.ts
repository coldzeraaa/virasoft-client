import { i18n } from '@lingui/core';

export function dateFormatHelper(value?: string): string | null {
  if (!value) return null;
  return i18n.date(value);
}
