import Image from 'next/image';

export function HomePageHeroSection() {
  return (
    <div className="  bg-(https://www.augerlaw.com/wp-content/uploads/2020/06/fuel-truck-accident-lawyer-scaled.jpg) w-full ">
      <Image
        width={1600}
        height={600}
        alt="hero-section-img"
        src="https://www.augerlaw.com/wp-content/uploads/2020/06/fuel-truck-accident-lawyer-scaled.jpg"
      />
    </div>
  );
}
