'use client';
import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-r from-green-500 to-green-300 py-10 text-white">
      <div className="container mx-auto flex flex-col items-start justify-between gap-10 px-6 md:flex-row lg:px-20">
        {/* Зүүн тал - Компанийн тухай */}
        <div className="w-full md:w-1/2">
          <h3 className="mb-4 text-lg font-semibold">ЖЕНРУ МОНГОЛ ГРУПП</h3>
          <p className="mb-6 text-sm opacity-90">
            ЖЕНРУ МОНГОЛ ГРУПП нь Монгол улсын Эрүүл мэндийн салбарт тоног төхөөрөмж, хувцас хэрэгсэл ханган нийлүүлэлт, засвар үйлчилгээний
            чиглэлээр үйл ажиллагаагаа явуулдаг билээ.
          </p>
          <h4 className="mb-3 text-base font-semibold">Төлбөрийн нөхцөл</h4>
          <div className="flex items-center gap-4">
            <Image src="/qpay.svg" alt="Qpay" width={40} height={40} />
            <Image src="/socialpay.svg" alt="SocialPay" width={40} height={40} />
            <Image src="/hipay.svg" alt="HiPay" width={40} height={40} />
            <Image src="/visa.svg" alt="Visa" width={40} height={40} />
            <Image src="/mastercard.svg" alt="Mastercard" width={40} height={40} />
          </div>
        </div>

        {/* Баруун тал - Меню & Холбоо барих */}
        <div className="grid w-full grid-cols-2 gap-6 md:w-1/2">
          {/* Меню */}
          <div>
            <h4 className="mb-3 text-lg font-semibold">Бидэнтэй холбоо барих</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">
                  <span className="hover:underline">Twitter</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:underline">Facebook</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:underline">Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold">Тусламж</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">
                  <span className="hover:underline">Хайх</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:underline">Мэдээлэл</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:underline">Үйлчилгээний нөхцөл</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:underline">Хүргэлтийн мэдээлэл</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 text-lg font-semibold">Бусад</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#">
                  <span className="hover:underline">Захиалга</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:underline">Цуцлах</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:underline">Буцаан олголт, буцаалт</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span className="hover:underline">Хүргэлт</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Холбоо барих */}
          <div>
            <h4 className="mb-3 text-lg font-semibold">Холбоо барих</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                Lorem Ipsum has been the industry&apos;s standard
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} /> +976 9904-5328
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} /> info@genru.com
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Доод хэсэг */}
      <div className="container mx-auto mt-10 flex justify-between border-t border-white/30 px-6 pt-4 text-sm opacity-90 lg:px-20">
        <p>© 2025 Genrui Mongol | Virasoft Solution LLC</p>
      </div>
    </footer>
  );
}
