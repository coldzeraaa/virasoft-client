'use client';
import { useState } from 'react';

import { Mail, MapPin, Phone } from 'lucide-react';

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
          <h2 className="text-2xl font-semibold text-green-700">Хамтарч ажиллах </h2>
          <p className="mt-2 text-sm text-black">
            Манай байгууллага олон улсад итгэмжлэгдсэн эмнэлгийн тоног төхөөрөмжийн компаниудтай хамтран ажилладаг билээ.
          </p>

          {/* Холбоо барих форм */}
          <div className="mx-auto mt-6 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-3">
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

      {/* Footer хэсэг */}
      <footer className="w-full bg-gradient-to-r from-[#1C9E48] to-[#8DC03E] py-10 text-white">
        <div className="container mx-auto grid grid-cols-1 gap-10 px-6 md:grid-cols-2 lg:px-20">
          {/* Зүүн тал */}
          <div className="hidden space-y-4 md:block">
            <h3 className="text-sm font-semibold">ЖЕНРУЙ МОНГОЛ ГРУПП</h3>
            <p className="opacity-90">
              ЖЕНРУЙ МОНГОЛ ГРУПП нь Монгол улсын Эрүүл мэндийн салбарт тоног төхөөрөмж, хувцас хэрэгсэл ханган нийлүүлэлт, засвар
              үйлчилгээний чиглэлээр үйл ажиллагаагаа явуулдаг билээ.
            </p>
          </div>

          {/* Баруун тал */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Холбоо барих</h4>
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
        <div className="container mx-auto mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/30 px-6 pt-4 text-sm opacity-90 md:flex-row lg:px-20">
          <p>© 2025 Genrui Mongol ||| Virasoft Solution LLC</p>
        </div>
      </footer>
    </div>
  );
}
