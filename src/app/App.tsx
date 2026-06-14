import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ValueProps } from "./components/ValueProps";
import { Solutions } from "./components/Solutions";
import { Industries } from "./components/Industries";
import { FeaturedUseCase } from "./components/FeaturedUseCase";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { FounderTrust } from "./components/FounderTrust";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BookDemoProvider } from "./components/useBookDemo";

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
