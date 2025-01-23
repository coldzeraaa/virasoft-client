'use client';
import { BankListType, PaymentCard } from './bank-card';

import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';

export default function PaymentPage({ params }: { params: { number: string } }) {
  const { data } = useMyOrderQuery({
    variables: { number: params.number },
  });

  return (
    <div>
      <h2 className="text-2xl">Төлбөрийн төрөл</h2>
      <div className="flex flex-wrap gap-6 py-3">
        {data?.myOrder?.payments[0].source?.bank_list?.map((element: BankListType, idx: number) => (
          <PaymentCard key={idx} bankList={element} />
        ))}
      </div>
      <hr />
      <h2 className="text-2xl">Хувааж төлөх нөхцөл</h2>
      <div>
        <div className="flex w-fit items-center justify-center gap-3 rounded-xl border-[1px] border-solid border-gray-200 px-2 py-2 hover:shadow-lg">
          Тун удахгүй
        </div>
      </div>
    </div>
  );
}
