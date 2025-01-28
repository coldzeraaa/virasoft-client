'use client';

import Image from 'next/image';
import Link from 'next/link';

import ContactForm from './contact-form';

import facebook from '@/components/icons/facebook.svg';
import instagram from '@/components/icons/instagram.svg';
import { useHeaderFooterQuery } from '@/gql/query/menu/header-footer.generated';
import { imageUrlHelper } from '@/lib/helper/img-url-helper';
export function Footer() {
  const { data, loading } = useHeaderFooterQuery({ variables: { filter: { title: { in: ['header', 'footer'] } } } });
  const contactMenu = data?.allMenus?.nodes[1]?.children?.find((menu) => menu.title === 'Бидэнтэй холбогдох');
  return (
    <>
      <footer className="h-full w-full border-t bg-accent-content text-neutral">
        <div className="grid w-full grid-cols-1 lg:grid-cols-[0.6fr_0.4fr_0.3fr]">
          <div className="flex h-full w-full bg-primary px-20 py-20 lg:justify-end xl:pl-48">
            <div className="space-y-4 rounded-l-xl bg-primary">
              <h2 className="text-2xl font-semibold text-accent">{contactMenu?.title}</h2>
              {loading && <div className="loading loading-dots"></div>}
              {contactMenu?.children?.map((menuItem, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="h-fit w-fit flex-shrink-0 rounded-full border border-base-100 p-1">
                    <Image
                      src={menuItem.images ? imageUrlHelper(menuItem.images['0']) : `https://via.placeholder.com/80`}
                      alt="location information"
                      width={20}
                      height={20}
                    />
                  </div>
                  <Link href={menuItem.link} className="text-base-100">
                    {menuItem.title}
                  </Link>
                </div>
              ))}
              <div className="flex gap-2">
                <div className="w-fit rounded-full bg-accent p-1">
                  <Image src={facebook} alt="facebook icon" width={20} height={20} />
                </div>
                <div className="w-fit rounded-full bg-accent p-1">
                  <Image src={instagram} alt="facebook icon" width={20} height={20} />
                </div>
              </div>
            </div>
          </div>
          <div className="px-20 pt-20 lg:px-10 xl:px-20">
            <h2 className="mb-4 text-2xl font-semibold text-accent">Хамтарч ажиллах</h2>
            <ContactForm />
          </div>
          <div className="flex flex-col gap-14 p-20 lg:px-10 xl:p-20">
            {data?.allMenus?.nodes[1]?.children
              ?.filter((menu) => menu.title !== 'Бидэнтэй холбогдох')
              .map((menuItem) => (
                <Link key={menuItem.title} href={menuItem.link} className="text-sm font-semibold text-neutral/70">
                  {menuItem.title}
                </Link>
              ))}
          </div>
        </div>
      </footer>
    </>
  );
}
