import { HomePageHeroSection } from '@/components/pages/home/home-page-hero-section';
import { HomePageOurServiceSection } from '@/components/pages/home/home-page-our-service-section';
import { HomePageParthnerSection } from '@/components/pages/home/home-page-partners-section';
import { HomePageProductSection } from '@/components/pages/home/home-page-product-section';

export default function Home() {
  return (
    <div className="space-y-6">
      <HomePageHeroSection />
      <HomePageOurServiceSection />
      <HomePageProductSection />
      <HomePageParthnerSection />
    </div>
  );
}
