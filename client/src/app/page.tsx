import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProductVision } from "@/components/landing/ProductVision";
import { UseCases } from "@/components/landing/UseCases";
import { Services } from "@/components/landing/Services";
import { Infrastructure } from "@/components/landing/Infrastructure";
import { DeveloperExperience } from "@/components/landing/DeveloperExperience";
import { Pricing } from "@/components/landing/Pricing";
import { Testimonials } from "@/components/landing/Testimonials";
import { Trust } from "@/components/landing/Trust";
import { FAQ } from "@/components/landing/FAQ";
import { EarlyAccess } from "@/components/landing/EarlyAccess";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      <Navbar />
      <Hero />
      <ProductVision />
      <UseCases />
      <Services />
      <div id="infrastructure">
        <Infrastructure />
      </div>
      <div id="developers">
        <DeveloperExperience />
      </div>
      <Pricing />
      <Testimonials />
      <Trust />
      <FAQ />
      <EarlyAccess />
      <Footer />
    </main>
  );
}
