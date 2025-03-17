'use client';
import { ReactNode, useState } from 'react';

import Image from 'next/image';

import { ErrorResult } from '@/components/result/error-result';
import { useOrderPayQuery } from '@/gql/query/order/order-pay.generated';
import { generateQCodeHelper } from '@/lib/helper/generate-qrcode-helper';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';

export default function PaymentPage({ params }: { params: { number: string } }) {
  const [qrCode, setQrCode] = useState<string | null>(null);
  const { data, loading, error } = useOrderPayQuery({ variables: { number: params.number } });
  const payments = data?.order?.payments || [];
  const [payment] = payments;

  if (loading)
    return (
      <Container>
        <ul className="flex flex-wrap gap-6">
          {Array.from({ length: 16 }).map((_, idx) => (
            <li key={idx} className="min-w-20 flex-1">
              <div className="skeleton mx-auto mb-2 aspect-square w-20 rounded-lg object-contain" />
              <div className="skeleton mt-2 h-5 w-full" />
            </li>
          ))}
        </ul>
      </Container>
    );

  if (error)
    return (
      <Container>
        <ErrorResult message={error.message} />
      </Container>
    );

  if (qrCode)
    return (
      <Container title="QPay уншуулна уу">
        <Image className="mx-auto max-w-sm" priority width={800} height={800} src={qrCode} alt="QR code" />
      </Container>
    );

  return (
    <Container>
      <ul className="flex flex-wrap gap-6">
        {data?.order?.payments[0]?.source?.bank_list?.map((element: { logo: string; name?: string }, idx: number) => (
          <li key={idx} className="min-w-20 flex-1">
            <button
              type="button"
              className="w-full"
              onClick={() => generateQCodeHelper(payment.source.qr_code).then(imageUrlHelper).then(setQrCode).catch(console.error)}
            >
              <Image
                className="mx-auto mb-2 aspect-square w-20 rounded-lg object-contain"
                priority
                width={800}
                height={800}
                src={imageUrlHelper(element.logo || '')}
                alt={element?.name || 'bank name'}
              />
              <p className="truncate text-center text-sm font-medium">{element?.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

function Container({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <>
      <h2 className="mb-4 text-center text-2xl font-bold">{title || 'Төлбөр төлөх нөхцөл сонгоно уу'}</h2>
      {children}
    </>
  );
}
