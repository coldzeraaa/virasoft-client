import Image from "next/image";

export function HomePageHeroSection() {
  return (
    <div className="rounded-md">
      <Image
        width={0}
        height={0}
        className="container mx-auto aspect-video w-full rounded-md object-cover "
        alt="hero-section-img"
        src="https://www.transforce.com/hubfs/Blog%20Heroes%202022/huge-truck-transporting-fresh-milk-picture-id172437105.jpg"
      />
    </div>
  );
}
