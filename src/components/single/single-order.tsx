import Image from "next/image";
import Link from "next/link";

import { dateFormatHelper } from "@/lib/helper/format/date-format-helper";
import { moneyFormatHelper } from "@/lib/helper/format/money-format-helper";
import { numberFormatHelper } from "@/lib/helper/format/number-format-helper";
import { imageUrlHelper } from "@/lib/helper/img-url-helper";

export function SingleOrder({
  number,
  createdAt,
  itemCount,
  total,
  items,
}: SingleOrderProps) {
  return (
    <div className="grid grid-cols-12">
      <Link
        className="col-span-8 grid grid-cols-2"
        href={`/account/orders/${number}`}
      >
        <div>
          <p className="font-semibold md:text-lg">{number}</p>
          <p className="text-sm opacity-80">{dateFormatHelper(createdAt)}</p>
        </div>
        <div>
          <p className="text-sm font-semibold md:text-base">Дүн</p>
          <p>
            <span className="mr-1 rounded bg-base-300 px-1 py-0.5 text-xs font-semibold">
              {numberFormatHelper(itemCount || 0)}ш
            </span>
            <span>{moneyFormatHelper(total || 0)}</span>
          </p>
        </div>
      </Link>
      <ul className="avatar-group col-span-4 flex-1 -space-x-6 overflow-visible p-1">
        {items.map((item, idx) => (
          <li
            key={item.id}
            className="group tooltip tooltip-left bottom-0 cursor-pointer"
            data-tip={item.variant.product.name}
          >
            <Link href={`/product/${item.variant.product.slug}`}>
              <Image
                width={0}
                height={0}
                src={imageUrlHelper(item.variant.images[0])}
                alt={item.variant.product.name}
                className={`relative bottom-0 aspect-square w-10 rounded-full object-cover ring  ${
                  items.length > 1 && items.length !== idx + 1
                    ? "transition-all group-hover:bottom-8"
                    : ""
                }`}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface SingleOrderProps {
  number: string;
  createdAt: string;
  itemCount?: number | null;
  total?: number | null;
  items: {
    id: string;
    variant: {
      id: string;
      images: string[];
      product: {
        id: string;
        name: string;
        slug: string;
      };
    };
  }[];
}

// number
// createdAt
// total
// itemTotal
// items {
//     id
//     variant {
//         images
//     }
// }
