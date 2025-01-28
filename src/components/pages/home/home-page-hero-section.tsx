import Image from 'next/image';

export function HomePageHeroSection() {
  return (
    <Image
      width={0}
      height={0}
      className=" mx-auto aspect-video w-full max-w-screen-2xl object-cover "
      alt="hero-section-img"
      src="https://www.transforce.com/hubfs/Blog%20Heroes%202022/huge-truck-transporting-fresh-milk-picture-id172437105.jpg"
    />
  );
}
