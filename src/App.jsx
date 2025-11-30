import React from "react";
import About from "./sections/About";
import HeroSection from "./components/Hero/HeroSection";
import HowWeWork from "./sections/HowWeWork";
import Pricing from "./components/Pricing/PricingSection.jsx";
import TestimonialsSection from "./components/testimonials/Testimonials.jsx";
import TrustSection from "./components/Trust/Trust.jsx";

const App = () => {
return (
<>
<HeroSection />
<About />
<HowWeWork />
<Pricing />
<TestimonialsSection />
<TrustSection />

</>
);
};


export default App;