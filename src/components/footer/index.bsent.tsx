'use client';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import logo2 from '../../../public/public/virasoft/logo 2.png';
import logo3 from '../../../public/public/virasoft/logo 3.png';
import logo4 from '../../../public/public/virasoft/logo 4.png';
import logo5 from '../../../public/public/virasoft/logo 5.png';
import logo6 from '../../../public/public/virasoft/logo 6.png';
import logo7 from '../../../public/public/virasoft/logo 7.png';
import logo8 from '../../../public/public/virasoft/logo 8.png';
import logo9 from '../../../public/public/virasoft/logo 9.png';
import logo10 from '../../../public/public/virasoft/logo 10.png';
import logo1 from '../../../public/public/virasoft/logo.png';

import { useAllMenusQuery } from '@/gql/query/menu/list.generated';

export function Footer() {
  const { data, loading } = useAllMenusQuery({
    variables: { filter: { title: { in: ['header', 'footer'] } } },
  });
  const partnerLogos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10];
  if (loading) return <p>Loading...</p>;

  return (
    <>
      {/* --- Хамтрагч байгууллага --- */}
      <section className="w-full bg-white py-10 text-center">
        <div className="mx-auto max-w-7xl px-6 lg:px-20">
          <h2 className="mb-8 text-2xl font-bold text-neutral">Хамтрагч байгууллага</h2>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 transition-opacity hover:opacity-100">
            {partnerLogos.map((logo, idx) => (
              <Image
                key={idx}
                src={logo}
                alt={`partner-${idx}`}
                width={120}
                height={120}
                className="object-contain grayscale transition duration-300 hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* --- Хамтран ажиллах --- */}
      <section className="w-full bg-[#C9C9C9] py-10 text-center">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 lg:px-20">
          <div className="w-full max-w-2xl rounded-xl bg-[#C9C9C9] px-6 py-10 text-center shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-neutral">ХАМТРАН АЖИЛЛАХ</h3>
            <p className="mb-6 text-sm text-neutral">
              Шинээр ирсэн бараа бүтээгдэхүүний мэдээллийг хүлээн авах, урьдчилсан захиалга хийж, худалдааны онцгой эрх хүлээн авах бол
              и-мэйл хаягаа бүртгүүлнэ үү.
            </p>
            <form className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <input type="email" placeholder="И-мэйл хаяг" className="input input-bordered w-full text-center sm:w-auto" />
              <button type="submit" className="btn-white btn px-8">
                Илгээх
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="mt-20 w-full border-t bg-primary-content p-6 text-accent-content/80 lg:pb-6 lg:pt-16">
        <div className="container mx-auto flex w-full items-center justify-between gap-20">
          <div className="hidden items-center justify-center md:flex">
            <Image
              src="https://api.virasoft.mn/rails/active_storage/blobs/redirect/eyJfcmFpbHMiOnsiZGF0YSI6MjI2LCJwdXIiOiJibG9iX2lkIn19--0ffe818c9da467f1f9b50abf282b38989b21402a/image_2025-02-05_171626256.png"
              alt="bsent компанийн лого"
              width={150}
              height={150}
            />
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
                        type="email"
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
    </>
  );
}
