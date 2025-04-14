'use client';

import { Facebook, Instagram } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="hidden min-h-[600px] w-full border-t bg-white text-gray-800 md:block">
      <div className="container mx-auto pb-4 pt-4">
        {/* Бидэнтэй хамтран ажиллах хэсэг */}
        <div className="mb-16 rounded-lg bg-[#F0F8FF] p-12 text-center">
          <h2 className="text-3xl font-bold text-[#1D4A74]">Бидэнтэй хамтран ажиллах</h2>
          <p className="mt-4 text-lg text-[#213D39]">Та бидэнтэй хамтран ажиллахыг хүсвэл и-мэйл хаягаа оруулна уу.</p>
          <div className="mt-6 flex justify-center">
            <input
              type="email"
              placeholder="И-мэйл хаягаа оруулна уу..."
              className="w-2/3 max-w-2xl rounded-l-lg border p-4 text-gray-800 focus:outline-none"
            />
            <button className="rounded-r-lg bg-[#1D4A74] px-6 py-4 text-white">Илгээх</button>
          </div>
        </div>

        {/* Footer үндсэн хэсэг */}
        <div className="grid grid-cols-1 gap-20 text-lg md:grid-cols-2">
          {/* Golden Oil Group мэдээлэл */}
          <div>
            <h2 className="text-2xl font-bold text-[#1D4A74]">Golden Oil Group</h2>
            <p className="mt-4 text-lg text-[#213D39]">
              Бид УЛААНБААТАР хот болон 21 аймагт захиалгаар ОХУ-н шинжилгээний бичиг бүхий ЧАНАРТАЙ ДИЗЕЛЬ ТҮЛШ-ИЙГ хүргэлт хийн худалдан
              борлуулж байна.
            </p>
            {/* Сошиал линкүүд */}
            <div className="mt-6 flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1D4A74] text-white shadow-lg transition-transform duration-300 hover:scale-110">
                  <Facebook className="h-6 w-6" />
                </div>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1D4A74] text-white shadow-lg transition-transform duration-300 hover:scale-110">
                  <Instagram className="h-6 w-6" />
                </div>
              </a>
            </div>
          </div>

          {/* Холбоо барих ба холбоосууд */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Холбоо барих хэсэг */}{' '}
            <div>
              {' '}
              <h2 className="text-xl font-bold text-[#1D4A74]">Холбоо барих</h2>{' '}
              <ul className="mt-2 space-y-4 text-[#213D39]">
                {' '}
                <li className="flex items-center">
                  {' '}
                  {/* Байршил Icon */}{' '}
                  <svg className="mr-2 h-6 w-6 text-[#213D39]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    {' '}
                    <path d="M12 2C7.58 2 4 5.58 4 10c0 4.07 2.64 7.59 6.39 9.02L12 22l1.61-2.98C17.36 17.59 20 14.07 20 10c0-4.42-3.58-8-8-8zm0 12c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />{' '}
                  </svg>{' '}
                  Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг 1 хороо{' '}
                </li>{' '}
                <li className="flex items-center">
                  {' '}
                  {/* Имэйл Icon */}{' '}
                  <svg className="mr-2 h-6 w-6 text-[#213D39]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    {' '}
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 4v10h16V8l-8 5-8-5z" />{' '}
                  </svg>{' '}
                  Fuel@gmail.com{' '}
                </li>{' '}
                <li className="flex items-center">
                  {' '}
                  {/* Утас Icon */}{' '}
                  <svg className="mr-2 h-6 w-6 text-[#213D39]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    {' '}
                    <path d="M6.62 10.79a15.91 15.91 0 006.59 6.59l2.2-2.2a1 1 0 011.06-.24c1.12.37 2.33.57 3.53.57a1 1 0 011 1V21a1 1 0 01-1 1c-10.48 0-19-8.52-19-19a1 1 0 011-1h3.5a1 1 0 011 1c0 1.2.2 2.41.57 3.53a1 1 0 01-.24 1.06l-2.19 2.2z" />{' '}
                  </svg>{' '}
                  +976 7000 6002{' '}
                </li>{' '}
              </ul>{' '}
            </div>
            {/* Хурдан хандалт хэсэг */}
            <div className="flex flex-col gap-6">
              <Link href="/faq" className="rounded-lg px-6 py-1 text-lg text-[#213D39] transition hover:text-[#163A5F]">
                Түгээмэл асуулт хариулт
              </Link>
              <Link href="/terms" className="rounded-lg px-6 py-1 text-lg text-[#213D39] transition hover:text-[#163A5F]">
                Үйлчилгээний нөхцөл
              </Link>
              <Link href="/privacy" className="rounded-lg px-6 py-1 text-lg text-[#213D39] transition hover:text-[#163A5F]">
                Нууцлалын бодлого
              </Link>
            </div>
          </div>
        </div>
        <div>
          {/* Copyright хэсэг */}
          <div className="mt-16 border-t pt-6 text-center text-[#213D39]">
            <p className="text-lg">Copyright © 2025 Golden Oil Group </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
