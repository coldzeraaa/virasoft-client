'use client';

import { ChevronRightIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

import { PaymentMethodEnum } from '@/gql/graphql.d';
import { useQuickBuyMutation } from '@/gql/mutation/checkout/quick-buy.generated';
import { useMeQuery } from '@/gql/query/user/me.generated';
import { useBuildType } from '@/lib/context/build-type-context';
import { catchHelper } from '@/lib/helper/catch-helper';
import { moneyFormatHelper } from '@/lib/helper/format/money-format-helper';

export function PaymentInfo() {
  const { data, loading } = useMeQuery();

  if (loading) return <div className="skeleton h-20 w-full rounded-lg" />;
  if (!data?.me)
    return (
      <>
        <p className="mb-4">Худалдан авалт үргэлжлүүлэхийн тулд нэвтэрнэ үү</p>
        <Link
          className="btn btn-primary btn-block"
          href={`/auth/login?from=${window.location.pathname.replace('/', '')}${window.location.search}`}
        >
          Нэвтрэх
          <ChevronRightIcon />
        </Link>
      </>
    );

  return <Payment />;
}

function BtnPurchase() {
  const { hits } = useBuildType();
  const router = useRouter();
  const [quickBuy, { loading }] = useQuickBuyMutation({
    onError: catchHelper,
    onCompleted(TData) {
      if (!TData?.quickBuy?.number) return catchHelper('Алдаа гарлаа');
      toast.success('Амжилттай худалдан авлаа');
      router.push(`/account/orders/${TData.quickBuy.number}/pay`);
    },
  });

  return (
    <button
      disabled={loading}
      type="button"
      className="btn btn-primary btn-block mt-8"
      onClick={() =>
        quickBuy({
          variables: {
            input: {
              action: PaymentMethodEnum.VirasoftPay,
              items: hits.map(({ sku }) => ({ sku, quantity: 1 })),
            },
          },
        })
      }
    >
      {loading && <div className="loading" />}
      Худалдан авах
    </button>
  );
}

function Payment() {
  const { hits, loading } = useBuildType();

  if (loading) return <div className="skeleton h-20 w-full rounded-lg" />;

  return (
    <>
      <ul>
        {hits.map((item) => (
          <li key={item.id}>
            <p className="flex justify-between">
              <span>{item.name}</span>
              <span>{moneyFormatHelper(item.price || 0)}</span>
            </p>
          </li>
        ))}
        <li>
          <p className="mt-2 flex justify-between border-t pt-2 font-semibold">
            <span>НИЙТ</span>
            <span>{moneyFormatHelper(hits.reduce((acc: number, cur) => acc + (cur.price || 0), 0))}</span>
          </p>
        </li>
      </ul>
      <BtnPurchase />
    </>
  );
}
