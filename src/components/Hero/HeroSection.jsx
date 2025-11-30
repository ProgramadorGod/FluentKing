import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import blueking from "../../resources/blueking.webp";

const CTAButton = ({ href, children }) => (
<a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="relative inline-block px-6 py-3 font-semibold text-white overflow-hidden rounded-lg cursor-pointer group"
    style={{ backgroundColor: "#D4B77D" }}
  >
    <span className="absolute inset-0 bg-[#1D4E89] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
    <span className="relative flex items-center justify-center gap-2">
      <FaWhatsapp className="w-5 h-5" />
      {children}
    </span>
  </a>
);

const HeroSection = () => {
  const { scrollY } = useViewportScroll();
  const yPos = useTransform(scrollY, [0, 500], [0, -100]);
  const xPos = useTransform(scrollY, [0, 500], [0, 30]);
  const isMobile = window.innerWidth < 640;
  const baseScale = isMobile ? 1.12 : 1.28;
  const initialScale = isMobile ? 1.2 : 1.38;

  return (
    <motion.section
      className="
    relative flex flex-col items-center justify-center text-center
    h-[78vh] sm:h-[85vh] md:min-h-screen
    px-4 md:px-8 overflow-hidden
  "
    >
      <motion.img
        src={blueking}
        alt=""
        className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        style={{
          zIndex: 1,
          y: yPos,
          x: xPos,
          scale: isMobile ? 1 : 1,
          opacity: 0.45,
        }}
        initial={{ opacity: 1, scale: isMobile ? 1.35 : 2 }}
        animate={{ opacity: 1, scale: isMobile ? 1.3 : 1.3 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      <motion.h1
        className="
    text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 relative z-10
    text-soft-shadow
  "
        style={{ color: "#fff", fontWeight: 800 }}
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Change Your <span style={{ color: "#D4B77D" }}>Life</span> Forever
      </motion.h1>

      <motion.p
        className="
    text-lg sm:text-xl md:text-2xl max-w-2xl mb-16 leading-relaxed relative z-10
    text-soft-shadow
  "
        style={{ color: "#fff" }}
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Your journey starts today. I'll guide you every step of the way.
      </motion.p>

      {/* Decorative Wave Separator */}
      <motion.div
        className="absolute bottom-0 w-full overflow-hidden z-20"
        style={{ height: 100 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#0A1A2F"
            d="M0,128L60,144C120,160,240,192,360,192C480,192,600,160,720,138.7C840,117,960,107,1080,128C1200,149,1320,203,1380,229.3L1440,256L1440,320L0,320Z"
          />
        </svg>
      </motion.div>

      {/* Floating Ball */}
      <motion.div
        className="absolute bottom-16 w-8 h-8 rounded-full"
        style={{ backgroundColor: "#D4B77D", boxShadow: "0 0 20px #D4B77D80" }}
        initial={{ y: 10, opacity: 0.5 }}
        animate={{ y: -10, opacity: 1 }}
        transition={{ yoyo: Infinity, duration: 1.5, ease: "easeInOut" }}
      />
    </motion.section>
  );
};

export default HeroSection;