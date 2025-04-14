'use client';
import React from 'react';

import { Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';

// Лого зургууд
import logo6 from '../../../public/public/virasoft/genrui.png';
import logo2 from '../../../public/public/virasoft/hipay .png';
import logo5 from '../../../public/public/virasoft/mastercard.png';
import logo4 from '../../../public/public/virasoft/qpay.png';
import logo from '../../../public/public/virasoft/socialpay.png';
import logo3 from '../../../public/public/virasoft/Visa.png';

export function Footer() {
  return (
    <div className="h-full w-full">
      {/* Footer хэсэг */}
      <footer className="h-full  text-sm text-white">
        <div className="mt-10 grid h-full grid-cols-1 items-stretch lg:grid-cols-2">
          {/* Зүүн тал */}
          <div className="flex justify-center bg-gray-200 px-6 py-10 text-black lg:px-20">
            <div className="text-center">
              {/* Лого */}
              <Image
                src={logo6}
                alt="Genrui logo"
                width={120}
                height={48}
                className="mx-auto" // төвд байрлуулах
              />
              <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed">
                ЖЭНРУЙ МОНГОЛ ГРУПП нь Монгол улсын Эрүүл мэндийн салбарт тоног төхөөрөмж, хувцас хэрэгсэл ханган нийлүүлэлт, засвар
                үйлчилгээний чиглэлээр үйл ажиллагаа явуулдаг билээ.
              </p>
              <h4 className="mt-6 text-lg font-semibold">Төлбөрийн нөхцөл</h4>
              <div className="mt-6 flex justify-center gap-4">
                <Image src={logo4} alt="qpay" width={40} height={40} />
                <Image src={logo} alt="socialpay" width={40} height={40} />
                <Image src={logo2} alt="hipay" width={40} height={40} />
                <Image src={logo3} alt="visa" width={40} height={40} />
                <Image src={logo5} alt="mastercard" width={40} height={40} />
              </div>
            </div>
          </div>

          {/* Баруун тал */}
          <div className="flex h-full flex-col justify-between bg-gradient-to-r from-green-600 to-lime-500 px-6 py-10 text-white lg:px-20">
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              <div>
                <h4 className="mb-3 text-lg font-semibold">Бидэнтэй холбоо барих</h4>
                <ul className="space-y-2 text-lg text-gray-100">
                  <li> Twitter</li>
                  <li> Facebook</li>
                  <li> Instagram</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-semibold">Тусламж</h4>
                <ul className="space-y-2 text-lg text-gray-100">
                  <li>Хайх</li>
                  <li>Мэдээлэл</li>
                  <li>Үйлчилгээний нөхцөл</li>
                  <li>Хүргэлтийн мэдээлэл</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-semibold">Бусад</h4>
                <ul className="space-y-2 text-lg text-gray-100">
                  <li>Захиалга</li>
                  <li>Цуцлах</li>
                  <li>Буцаан олголт, буцаалт</li>
                  <li>Хүргэлт</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 text-lg font-semibold">Холбоо барих</h4>
                <ul className="space-y-2 text-lg text-gray-100">
                  <li className="flex items-start gap-2">
                    <MapPin size={14} /> Lorem Ipsum has been the industry’s standard dummy text ever since the
                  </li>
                  <li className="flex items-start gap-2">
                    <Phone size={14} /> +976 9904-5328
                  </li>
                  <li className="flex items-start gap-2">
                    <Mail size={14} /> info@genru.com
                  </li>
                </ul>
              </div>
            </div>
            {/* Доод хэсэг */}
            <div className="border-t border-white bg-gradient-to-r from-green-600 to-lime-500 py-4 text-xs text-white">
              © 2025 Genrui Mongol | Virasoft Solution LLC
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
