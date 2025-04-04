'use client';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <div className="w-full text-lg">
      {/* Хамтарч ажиллах хэсэг */}
      <section className="w-full bg-gray-100 py-10 text-center">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-2xl font-semibold text-green-700">Хамтарч ажиллах</h2>
          <p className="mt-2 text-black">
            Манай байгууллага олон улсад итгэмжлэгдсэн эмнэлгийн тоног төхөөрөмжийн компаниудтай хамтран ажилладаг билээ.
          </p>

          {/* Холбоо барих форм */}
          <div className="mx-auto mt-6 grid max-w-2xl gap-4 md:grid-cols-3">
            <input
              type="email"
              placeholder="И-мэйл хаяг"
              className="rounded-lg border border-white p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <input
              type="text"
              placeholder="Утасны дугаар"
              className="rounded-lg border border-white p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="rounded-lg bg-green-500 py-3 text-white transition hover:bg-green-600">Илгээх</button>
          </div>
        </div>
      </section>

      {/* Footer хэсэг */}
      <footer className="w-full bg-gradient-to-r from-[#1C9E48] to-[#8DC03E] py-10 text-lg text-white">
        <div className="container mx-auto grid gap-10 px-6 md:grid-cols-2 lg:px-20">
          {/* Зүүн тал - ЖЕНРУЙ МОНГОЛ ГРУПП */}
          <div className="grid gap-4">
            <h3 className="mb-2 text-lg font-semibold">ЖЕНРУЙ МОНГОЛ ГРУПП</h3>
            <p className="text-lg opacity-90">
              ЖЕНРУЙ МОНГОЛ ГРУПП нь Монгол улсын Эрүүл мэндийн салбарт тоног төхөөрөмж, хувцас хэрэгсэл ханган нийлүүлэлт, засвар
              үйлчилгээний чиглэлээр үйл ажиллагаагаа явуулдаг билээ.
            </p>
          </div>

          {/* Баруун тал - Холбоо барих */}
          <div>
            <h4 className="mb-3 text-lg font-semibold">Холбоо барих</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin size={16} /> Ulaanbaatar, Mongolia
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

        {/* Доод хэсэг */}
        <div className="container mx-auto mt-10 flex justify-between border-t border-white/30 px-6 pt-4 text-sm opacity-90 lg:px-20">
          <p>© 2025 Genrui Mongol | Virasoft Solution LLC</p>
        </div>
      </footer>
    </div>
  );
}
