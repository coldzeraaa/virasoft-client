'use client';
import React, { useState } from 'react';

import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import logo6 from '../../../public/public/virasoft/genrui.png';
import logo2 from '../../../public/public/virasoft/hipay .png';
import logo5 from '../../../public/public/virasoft/mastercard.png';
import logo4 from '../../../public/public/virasoft/qpay.png';
import logo from '../../../public/public/virasoft/socialpay.png';
import logo3 from '../../../public/public/virasoft/Visa.png';

export function Footer() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = () => {
    if (!email || !phone) {
      alert('И-мэйл болон утасны дугаараа оруулна уу.');
      return;
    }
    alert(`Илгээсэн: ${email}, ${phone}`);
    setEmail('');
    setPhone('');
  };

  return (
    <div className="w-full text-base">
      {/* Хамтарч ажиллах хэсэг */}
      <section className="w-full bg-gray-200 py-10 text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-2xl font-semibold text-green-700">Хамтарч ажиллах</h2>
          <p className="mt-2 text-sm text-black">
            Манай байгууллага олон улсад итгэмжлэгдсэн эмнэлгийн тоног төхөөрөмжийн компаниудтай хамтран ажилладаг билээ.
          </p>

          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-3">
            <input
              type="email"
              placeholder="И-мэйл хаяг"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border bg-white p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <input
              type="text"
              placeholder="Утасны дугаар"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border bg-white p-3 focus:outline-none focus:ring-2 focus:ring-green-700"
            />
            <button onClick={handleSubmit} className="w-full rounded-lg bg-green-700 py-3 text-white transition hover:bg-green-600">
              Илгээх
            </button>
          </div>
        </div>
      </section>

      {/* Footer эхний хэсэг - Цагаан дэвсгэр */}
      <div className="w-full bg-white py-10 text-black">
        <div className="container mx-auto flex flex-col gap-10 px-6 lg:flex-row lg:items-start lg:justify-between lg:px-20">
          {/* Жэнруй Монгол */}
          <div className="max-w-md text-center lg:text-left">
            <Image src={logo6} alt="Genrui logo" width={120} height={48} className="mx-auto lg:mx-0" />
            <p className="mt-4 text-sm">
              ЖЕНРУЙ МОНГОЛ ГРУПП нь Монгол улсын Эрүүл мэндийн салбарт тоног төхөөрөмж, хувцас хэрэгсэл ханган нийлүүлэлт, засвар
              үйлчилгээний чиглэлээр үйл ажиллагаагаа явуулдаг билээ.
            </p>
            <h4 className="mt-4 font-semibold">Төлбөрийн нөхцөл</h4>
            <div className="mt-2 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Image src={logo4} alt="qpay" width={40} height={40} />
              <Image src={logo} alt="socialpay" width={40} height={40} />
              <Image src={logo2} alt="hipay" width={40} height={40} />
              <Image src={logo3} alt="visa" width={40} height={40} />
              <Image src={logo5} alt="mastercard" width={40} height={40} />
            </div>
          </div>

          {/* Холбоо барих */}
          <div className="max-w-md text-center lg:text-left">
            <h4 className="mb-2 font-semibold">Холбоо барих</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5" />
                <span>Lorem Ipsum has been the industry’s standard dummy text ever since the</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} /> +976 9904-5328
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} /> info@genru.com
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer хоёр дахь хэсэг - Ногоон gradient */}
      <footer className="w-full bg-gradient-to-r from-[#1C9E48] to-[#8DC03E] py-10 text-white">
        <div className="container mx-auto grid grid-cols-2 gap-6 px-6 md:grid-cols-4 lg:px-20">
          <div>
            <h4 className="mb-2 font-semibold">Бидэнтэй холбоо барих</h4>
            <ul className="space-y-1 opacity-90">
              <li className="flex items-center gap-2">
                <Twitter size={14} /> Twitter
              </li>
              <li className="flex items-center gap-2">
                <Facebook size={14} /> Facebook
              </li>
              <li className="flex items-center gap-2">
                <Instagram size={14} /> Instagram
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Тусламж</h4>
            <ul className="space-y-1 opacity-90">
              <li>
                <Link href="#">Хайх</Link>
              </li>
              <li>
                <Link href="#">Мэдээлэл</Link>
              </li>
              <li>
                <Link href="#">Үйлчилгээний нөхцөл</Link>
              </li>
              <li>
                <Link href="#">Хүргэлтийн мэдээлэл</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Бусад</h4>
            <ul className="space-y-1 opacity-90">
              <li>
                <Link href="#">Захиалга</Link>
              </li>
              <li>
                <Link href="#">Цуцлах</Link>
              </li>
              <li>
                <Link href="#">Буцаан олголт, буцаалт</Link>
              </li>
              <li>
                <Link href="#">Хүргэлт</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Холбоо барих</h4>
            <ul className="space-y-2 opacity-90">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5" />
                <span>Lorem Ipsum has been the industry’s standard dummy text ever since the</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} /> +976 9904-5328
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} /> info@genru.com
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto mt-10 border-t border-white/30 px-6 pt-4 text-center text-sm opacity-90 lg:px-20">
          © 2025 Genrui Mongol | Virasoft Solution LLC
        </div>
      </footer>
    </div>
  );
}
