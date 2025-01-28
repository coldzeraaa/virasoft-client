import { QRCodeToDataURLOptions, toDataURL } from 'qrcode';

export function generateQCodeHelper(text: string, options?: QRCodeToDataURLOptions): Promise<string> {
  return toDataURL(text, {
    margin: 0,
    color: { dark: '#000000', light: '#00000000' },
    ...options,
    width: options?.width || 130,
  });
}
