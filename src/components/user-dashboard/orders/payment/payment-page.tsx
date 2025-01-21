'use client';
import PaymentCard from '@/components/user-dashboard/orders/payment/bank/bank-card';
import { useMyOrderQuery } from '@/gql/query/user/my-order.generated';

export default function PaymentPage({ params }: { params: { number: string } }): JSX.Element {
  const { data } = useMyOrderQuery({
    variables: { number: params.number },
  });

  const bankList = data?.myOrder?.payments[0].source.bank_list;
  return (
    <div>
      <h1 className="text-2xl">Төлбөрийн төрөл</h1>
      <div className="flex flex-wrap gap-6 py-3 ">{bankList?.map((element, idx) => <PaymentCard key={idx} data={element} />)}</div>
      <hr />
      <div className="text-2xl">Хувааж төлөх нөхцөл</div>
      <div>
        {/* {data &&
          data?.map((element, idx) => {
            <PaymentCard key={idx} data={element}></PaymentCard>;
          })} */}
        <div className="flex w-fit items-center justify-center  gap-3  rounded-xl border-[1px] border-solid border-gray-200 px-2 py-2 hover:shadow-lg">
          Coming Soon
        </div>
      </div>
    </div>
  );
}
