import { HomePageHeroSection } from '@/components/page-client/home/home-page-hero-section';
import { HomePageOurServiceSection } from '@/components/page-client/home/home-page-our-service-section';
import HomePageParthnerSection from '@/components/page-client/home/home-page-partners-section';

export default function Home() {
  return (
    <div>
      <HomePageHeroSection />
      <HomePageOurServiceSection />
      <HomePageParthnerSection />
    </div>
  );
}
