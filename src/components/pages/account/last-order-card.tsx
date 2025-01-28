import { ChevronRight, Package } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { MeOrdersQuery } from '@/gql/query/user/me-orders.generated';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';

export function LastOrderCard({ order }: { order: NonNullable<MeOrdersQuery['me']>['orders']['nodes']['0'] }) {
  return (
    <Link
      href={`/account/orders/${order?.number}`}
      className="flex h-fit w-full gap-6 rounded-lg border bg-base-100 p-4 transition-all duration-100 hover:cursor-pointer hover:bg-base-200 lg:p-6"
    >
      <div className="h-fit rounded-md border bg-base-300 p-2">
        <Package className="h-12 w-12" />
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <div className="flex justify-between">
          <p className="font-medium text-primary-content">{order?.number}</p>
          <p className="text text-sm">{order?.createdAt ? new Date(order.createdAt).toLocaleString() : 'Мэдээлэл байхгүй байна.'}</p>
        </div>
        <div className="flex items-center justify-between">
          <Image
            width={100}
            height={100}
            src={imageUrlHelper(order?.items[0]?.variant?.images[0])}
            alt="Бүтээгдэхүүний зураг"
            className="rounded-md"
          />
          <ChevronRight className="h-5 w-5 stroke-1" />
        </div>
      </div>
    </Link>
  );
}
