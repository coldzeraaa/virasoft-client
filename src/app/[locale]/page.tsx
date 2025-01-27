import { HomePageHeroSection } from '@/components/pages/home/home-page-hero-section';
import { HomePageOurServiceSection } from '@/components/pages/home/home-page-our-service-section';
import { HomePageParthnerSection } from '@/components/pages/home/home-page-partners-section';

export default function Home() {
  return (
    <div>
      <HomePageHeroSection />
      <HomePageOurServiceSection />
      <HomePageParthnerSection />
    </div>
  );
}
