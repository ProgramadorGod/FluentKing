import React from "react";
import { motion } from "framer-motion";
import FeatureCard from "./FeatureCard";
import { features } from "./featuresData";
import "../../App.css";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutSection = () => {
  return (
    <div id="AboutContainer" className="relative">
      <section
        className="pt-8 md:pt-12 pb-32 md:pb-40 w-full relative"
        style={{ backgroundColor: "#0A1A2F" }}
      >
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, y: -30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="text-4xl md:text-5xl font-extrabold mb-6"
            style={{ color: "#F5F7FA" }}
          >
            Quiénes <span style={{ color: "#D4B77D" }}>Somos</span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 1, delay: 0.3 } },
            }}
            className="text-lg md:text-xl text-center mb-16 leading-relaxed"
            style={{ color: "rgba(245, 247, 250, 0.9)" }}
          >
            Transformamos la manera de aprender inglés para profesionales que
            buscan resultados rápidos y efectivos. <br />
            <span style={{ color: "#D4B77D", fontWeight: "600" }}>
              Sin complicaciones, sin procesos eternos, solo progreso real.
            </span>
          </motion.p>

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
          >
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <FeatureCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade / shadow separator */}
        
      </section>

    </div>
  );
};

export default AboutSection;