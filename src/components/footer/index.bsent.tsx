'use client';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useAllMenusQuery } from '@/gql/query/menu/list.generated';

export function Footer() {
  const { data, loading } = useAllMenusQuery({
    variables: { filter: { title: { in: ['header', 'footer'] } } },
  });

  if (loading) return <p>test</p>;

  return (
    <footer className="mt-20 w-full border-t bg-primary-content p-6 text-accent-content/80 lg:pb-6 lg:pt-16">
      <div className="container mx-auto flex w-full items-center justify-between gap-20">
        <div className="hidden items-center justify-center md:flex">
          <Image
            src="https://api.virasoft.mn/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MjI2LCJwdXIiOiJibG9iX2lkIn19--0ffe818c9da467f1f9b50abf282b38989b21402a/image_2025-02-05_171626256.png"
            alt="bsent компанийн лого"
            width={150}
            height={150}
          ></Image>
        </div>
        <div className="grid flex-grow gap-8 md:grid-cols-[0.3fr_0.3fr_0.4fr]">
          {data?.currentWebsite?.menus?.nodes[0]?.children?.map((menuTitle, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h5 className="text-base font-medium text-primary">{menuTitle.title}</h5>
              {menuTitle.title === 'Мэдээлэл авах' ? (
                <div className="flex flex-col gap-4 text-xs">
                  <p>Имэйлээ бүртгүүлээд шинэ бүтээгдэхүүн, хямдралын мэдээллийг хялбараар аваарай.</p>
                  <label className="flex items-center gap-2">
                    <input
                      name="email-input"
                      className="flex-grow border-b border-accent-content/70 px-6 py-2 placeholder-accent-content focus:outline-none focus:ring-0"
                      placeholder="your.email@gmail.com"
                    />
                    <ChevronRight className="stroke-1" />
                  </label>
                  <p>
                    Та имэйл хаягаа бүртгүүлснээр &quot;
                    <Link href="/terms-of-service" className="underline underline-offset-2 hover:text-accent">
                      Үйлчилгээний нөхцөл
                    </Link>
                    &quot;-ийг хүлээн зөвшөөрөх болно.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {menuTitle.children?.map((item, itemIdx) => (
                    <Link href={item.link} className="text-xs font-medium hover:cursor-pointer" key={itemIdx}>
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="container mb-6 mt-10 w-full border-b border-accent-content/20" />
      <div className="container flex items-center justify-between text-sm">
        <p>© 2025 B sent LLC</p>
        <p>Powered by : Virasoft Team </p>
      </div>
    </footer>
  );
}
