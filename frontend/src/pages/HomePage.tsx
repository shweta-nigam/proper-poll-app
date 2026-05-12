import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import HowItWorks from "../components/home/HowItWorks.jsx";
import PollPreview from "../components/home/PollPreview.js";
import DashboardShowcase from "../components/home/DashboardShowcase.js";
import Testimonials from "../components/home/Testimonials.js";
import FAQ from "../components/home/FAQ.js";
import CTASection from "../components/home/CTASection.js";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Features />
      <HowItWorks />
      <PollPreview />
      <DashboardShowcase />
      <Testimonials />
      <FAQ />
      <CTASection />
    </>
  );
};

export default HomePage;