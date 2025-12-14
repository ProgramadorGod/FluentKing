import React from "react";
import About from "./sections/About";
import HeroSection from "./components/Hero/HeroSection";
import HowWeWork from "./sections/HowWeWork";
import Pricing from "./components/Pricing/PricingSection.jsx";
import TestimonialsSection from "./components/testimonials/Testimonials.jsx";
import TrustSection from "./components/Trust/Trust.jsx";
import ProblemSolutionSection from "./components/ProblemSolution/ProblemSolution.jsx";
import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  return (
    <>
      <div id="hero">
        <HeroSection />
      </div>
      <About />
      <ProblemSolutionSection />
      <div id="how-we-work">
        <HowWeWork />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <TrustSection />
      <Footer/>
    </>
  );
};


export default App;