import { Hero } from "@/components/sections/Hero";
import { ValueStrip } from "@/components/sections/ValueStrip";
import { FeatureBento } from "@/components/sections/FeatureBento";
import { Emotional } from "@/components/sections/Emotional";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ProductShowcase } from "@/components/sections/ProductShowcase";
import { Rules } from "@/components/sections/Rules";
import { GuestExperience } from "@/components/sections/GuestExperience";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <FeatureBento />
      <Emotional />
      <HowItWorks />
      <ProductShowcase />
      <Rules />
      <GuestExperience />
      <Pricing />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
