import HeroSearch from "@/components/sections/hero-search";
import FeaturedChicago from "@/components/sections/featured-chicago";
import WisconsinDellsSection from "@/components/sections/wisconsin-dells";
import NashvilleSection from "@/components/sections/nashville";
import MinneapolisSection from "@/components/sections/minneapolis";
import MiamiSection from "@/components/sections/miami";
import OrlandoSection from "@/components/sections/orlando";
import SanJuanSection from "@/components/sections/san-juan";
import HoustonSection from "@/components/sections/houston";
import NewYorkSection from "@/components/sections/new-york";
import InspirationTravel from "@/components/sections/inspiration-travel";
import BottomNavigation from "@/components/sections/bottom-navigation";
import Footer from "@/components/sections/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-[65px] md:pb-0">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
          <HeroSearch />
          <FeaturedChicago />
          <WisconsinDellsSection />
          <NashvilleSection />
          <MinneapolisSection />
          <MiamiSection />
          <OrlandoSection />
          <SanJuanSection />
          <HoustonSection />
          <NewYorkSection />
        </div>
        <InspirationTravel />
        <Footer />
      </main>
      <BottomNavigation />
    </div>
  );
}