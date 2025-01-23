'use client';
import { PaymentCard } from './bank-card';

import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';
import { BankListType } from '@/types/bank-list-type.d';

export default function PaymentPage({ params }: { params: { number: string } }) {
  const { data } = useMyOrderQuery({
    variables: { number: params.number },
  });

  return (
    <div>
      <h1 className="text-2xl">Төлбөрийн төрөл</h1>
      <div className="flex flex-wrap gap-6 py-3 ">
        {data?.myOrder?.payments[0].source?.bank_list?.map((element: BankListType, idx: number) => (
          <PaymentCard key={idx} bankList={element} />
        ))}
      </div>
      <hr />
      <h1 className="text-2xl">Хувааж төлөх нөхцөл</h1>
      <div>
        <div className="flex w-fit items-center justify-center  gap-3  rounded-xl border-[1px] border-solid border-gray-200 px-2 py-2 hover:shadow-lg">
          Тун удахгүй
        </div>
      </div>
    </div>
  );
}

{
  /* {data &&
          data?.map((element, idx) => {
            <PaymentCard key={idx} data={element}></PaymentCard>;
          })} */
}
