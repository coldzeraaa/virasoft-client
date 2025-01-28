'use client';

import { useEffect, useState } from 'react';

import { BankListType, PaymentCard } from './bank-card';

import { ErrorResult } from '@/components/result/error-result';
import { LoadingResult } from '@/components/result/loading-result';
import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';
import { generateQCodeHelper } from '@/lib/helper/generate-qrcode-helper';

export default function PaymentPage({ params }: { params: { number: string } }) {
  const [qrCode, setQrCode] = useState(`https://via.placeholder.com/208?text=QR`);
  const { data, loading, error } = useMyOrderQuery({ variables: { number: params.number } });

  const payments = data?.myOrder?.payments || [];
  const [payment] = payments;

  useEffect(() => {
    if (payment?.source?.qr_code) generateQCodeHelper(payment.source.qr_code).then(setQrCode);
  }, [payment?.source?.qr_code]);

  if (loading) return <LoadingResult />;
  if (error) return <ErrorResult message={error.message} />;

  return (
    <div>
      <h2 className="text-2xl">Төлбөрийн төрөл</h2>
      <div className="py-w flex flex-wrap gap-3">
        {data?.myOrder?.payments[0]?.source?.bank_list?.map((element: BankListType, idx: number) => (
          <PaymentCard key={idx} qrCode={qrCode} orderNumber={data.myOrder?.number} bankList={element} />
        ))}
      </div>
      <hr />
      <h2 className="text-2xl">Хувааж төлөх нөхцөл</h2>
      <div>
        <div className="flex w-fit items-center justify-center gap-3 rounded-xl border border-solid border-gray-200 px-2 py-2 hover:shadow-lg">
          Тун удахгүй
        </div>
      </div>
    </div>
  );
}
