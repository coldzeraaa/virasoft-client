import Image from 'next/image';

export function HomePageHeroSection() {
  return (
    <div className="h-125 flex w-full  overflow-hidden  ">
      <Image
        width={1600}
        height={700}
        alt="hero-section-img"
        src="https://www.transforce.com/hubfs/Blog%20Heroes%202022/huge-truck-transporting-fresh-milk-picture-id172437105.jpg"
      />
    </div>
  );
}
