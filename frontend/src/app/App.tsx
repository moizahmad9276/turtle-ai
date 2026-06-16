import { BookDemoProvider } from "./hooks/useBookDemo";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { ValueProps } from "./components/sections/ValueProps";
import { Solutions } from "./components/sections/Solutions";
import { Industries } from "./components/sections/Industries";
import { FeaturedUseCase } from "./components/sections/FeaturedUseCase";
import { HowItWorks } from "./components/sections/HowItWorks";
import { Pricing } from "./components/sections/Pricing";
import { FounderTrust } from "./components/sections/FounderTrust";
import { FinalCTA } from "./components/sections/FinalCTA";

export default function App() {
  return (
    <BookDemoProvider>
    <div className="w-full">
      <Header />
      <Hero />
      <ValueProps />
      <Solutions />
      <Industries />
      <FeaturedUseCase />
      <HowItWorks />
      <Pricing />
      <FounderTrust />
      <FinalCTA />
      <Footer />
    </div>
    </BookDemoProvider>
  );
}
