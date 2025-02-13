'use client';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { useAllMenusQuery } from '@/gql/query/menu/list.generated';

export function Footer() {
  // const [activeTab, setActiveTab] = useState('home');
  const { data, loading } = useAllMenusQuery({ variables: { filter: { title: { in: ['header', 'footer'] } } } });
  // const { data: userData } = useMeQuery();

  if (loading) <p>test</p>;

  return (
    <footer className="mt-16 w-full border-t bg-primary-content p-6 text-accent-content/80 lg:pb-6 lg:pt-16">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-20">
        <div className="flex items-center justify-center">
          <Image
            src="https://api.virasoft.mn/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MjI2LCJwdXIiOiJibG9iX2lkIn19--0ffe818c9da467f1f9b50abf282b38989b21402a/image_2025-02-05_171626256.png"
            alt="bsent компанийн лого"
            width={150}
            height={150}
          ></Image>
        </div>
        <div className="grid flex-grow grid-cols-[0.3fr_0.3fr_0.4fr]">
          {data?.currentWebsite?.menus?.nodes[1]?.children?.map((menuTitle, idx) => (
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
                    <p className="text-xs font-medium" key={itemIdx}>
                      {item.title}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="container mb-6 mt-10 w-full max-w-7xl border-b border-accent-content/20" />
      <div className="container flex max-w-7xl items-center justify-between text-sm">
        <p>© 2025 B sent LLC</p>
        <p>Powered by : Virasoft Team </p>
      </div>
    </footer>
  );
}
