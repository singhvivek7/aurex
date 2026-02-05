import dynamic from "next/dynamic";

// Critical above-the-fold components - loaded immediately
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { ProductVision } from "@/components/landing/ProductVision";

// Below-the-fold components - lazy loaded for better performance
const UseCases = dynamic(() => import("@/components/landing/UseCases").then(mod => ({ default: mod.UseCases })), {
  loading: () => <div className="h-96 bg-slate-50" />,
});

const Services = dynamic(() => import("@/components/landing/Services").then(mod => ({ default: mod.Services })), {
  loading: () => <div className="h-96 bg-slate-50" />,
});

const Infrastructure = dynamic(() => import("@/components/landing/Infrastructure").then(mod => ({ default: mod.Infrastructure })), {
  loading: () => <div className="h-96 bg-slate-50" />,
});

const DeveloperExperience = dynamic(() => import("@/components/landing/DeveloperExperience").then(mod => ({ default: mod.DeveloperExperience })), {
  loading: () => <div className="h-96 bg-slate-50" />,
});

const Pricing = dynamic(() => import("@/components/landing/Pricing").then(mod => ({ default: mod.Pricing })), {
  loading: () => <div className="h-96 bg-slate-50" />,
});

const Testimonials = dynamic(() => import("@/components/landing/Testimonials").then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 bg-slate-50" />,
});

const Trust = dynamic(() => import("@/components/landing/Trust").then(mod => ({ default: mod.Trust })), {
  loading: () => <div className="h-96 bg-slate-50" />,
});

const FAQ = dynamic(() => import("@/components/landing/FAQ").then(mod => ({ default: mod.FAQ })), {
  loading: () => <div className="h-96 bg-slate-50" />,
});

const EarlyAccess = dynamic(() => import("@/components/landing/EarlyAccess").then(mod => ({ default: mod.EarlyAccess })), {
  loading: () => <div className="h-96 bg-slate-50" />,
});

const Footer = dynamic(() => import("@/components/landing/Footer").then(mod => ({ default: mod.Footer })), {
  loading: () => <div className="h-32 bg-slate-50" />,
});

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Critical above-the-fold content */}
      <Navbar />
      <Hero />
      <ProductVision />

      {/* Below-the-fold content - lazy loaded */}
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
