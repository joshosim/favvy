import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { Pricing } from "@/sections/Pricing";
import Products from "@/sections/Products";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Testimonials } from "@/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowcase />
      <Products />
      <Pricing />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  );
}
