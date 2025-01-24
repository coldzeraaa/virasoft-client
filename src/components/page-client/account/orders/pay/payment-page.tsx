'use client';
import { useEffect, useState } from 'react';

import { BankListType, PaymentCard } from './bank-card';

import { ErrorResult } from '@/components/result/error-result';
import { LoadingResult } from '@/components/result/loading-result';
import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';

export default function PaymentPage({ params }: { params: { number: string } }) {
  const { data, loading, error } = useMyOrderQuery({
    variables: { number: params.number },
  });

  const [deviceType, setDeviceType] = useState<string>();
  useEffect(() => {
    const isDesktop = window.matchMedia('(min-width: 1024px) and (hover: hover)').matches;
    setDeviceType(isDesktop ? 'desktop' : 'mobile');
  }, []);
  if (loading) return <LoadingResult />;
  if (error) return <ErrorResult message={error.message} />;

  return (
    <div>
      <h2 className="text-2xl">Төлбөрийн төрөл</h2>
      <div className="py-w flex flex-wrap gap-3">
        {data?.myOrder?.payments[0]?.source?.bank_list?.map((element: BankListType, idx: number) => (
          <PaymentCard key={idx} deviceType={deviceType} bankList={element} />
        ))}
      </div>
      <hr />
      <h2 className="text-2xl">Хувааж төлөх нөхцөл</h2>
      <div>
        <div className="flex w-fit items-center justify-center gap-3 rounded-xl border-[1px] border-solid border-gray-200 px-2 py-2 hover:shadow-lg">
          {deviceType === 'desktop' ? 'Desktop Device' : 'Mobile Device'}
        </div>
      </div>
    </div>
  );
}
