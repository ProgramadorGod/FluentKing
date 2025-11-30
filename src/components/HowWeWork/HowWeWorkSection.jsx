import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";

const HowWeWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.7 } },
  };

  const textContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05 } },
  };
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 500, damping: 30 },
    },
  };

  const word = "Trabajamos";

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      {/* Background blobs with subtle gold accent */}
      <motion.div
        className="absolute top-1/4 left-0 w-64 h-64 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, #D4B77D33, #AC9E7F11)" }}
        animate={{ x: [0, 100, 0], y: [0, 50, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, #D4B77D22, #1D4E8922)" }}
        animate={{ x: [0, -100, 0], y: [0, -50, 0], scale: [1, 1.3, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="section-container relative z-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16"
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={
            isInView
              ? { opacity: 1, scale: 1, y: 0 }
              : { opacity: 0, scale: 0.8, y: -30 }
          }
          transition={{ duration: 0.8 }}
        >
          Cómo{" "}
          <motion.span
            className="inline-block"
            variants={textContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {word.split("").map((char, i) => (
              <motion.span
                key={i}
                variants={letterAnimation}
                className="inline-block"
                style={{ color: "#D4B77D" }} // Gold letters
              >
                {char}
              </motion.span>
            ))}
          </motion.span>
        </motion.h2>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {}, // no stagger, everything animates immediately
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 0, y: 20, scale: 0.95 }
              }
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative p-3 bg-white/5 backdrop-blur-md rounded-xl cursor-pointer shadow-md hover:shadow-[0_0_20px_#D4B77D33] border border-transparent hover:border-[#D4B77D] transition-all duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 max-w-[290px] mx-auto"
            >
              <FeatureCard
                iconName={feature.iconName}
                title={feature.title}
                description={feature.description}
              />
              <div className="absolute top-3 right-3 w-2 h-2 bg-[#D4B77D] rounded-full animate-pulse" />
            </motion.div>
          ))}
        </motion.div>
        <motion.div
  className="absolute bottom-0 w-full overflow-hidden z-20"
  style={{ height: 100, y:100 }}
>
  <svg
    className="w-full h-full"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#0A1A2F"
      d="M0,224 L120,160 L240,192 L360,128 L480,176 L600,144 L720,192 L840,160 L960,208 L1080,176 L1200,160 L1320,192 L1440,160 L1440,320 L0,320 Z"
    />
  </svg>
</motion.div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
