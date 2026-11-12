import BonusSection from '@/components/BonusSection';
import HeroSection from '@/components/HeroSection';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans antialiased">
      <SiteHeader />
      <main>
        <HeroSection />
        <BonusSection />
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
