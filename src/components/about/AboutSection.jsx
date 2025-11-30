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
<motion.div
  className="absolute bottom-0 w-full overflow-hidden z-20"
  style={{ height: 100 , y :1}}
>
  <svg
    className="w-full h-full"
    viewBox="0 0 1440 320"
    preserveAspectRatio="none"
  >
    <path
      fill="#ffffffff"
      d="M0,96L21.8,112C43.6,128,87,160,131,160C174.5,160,218,128,262,122.7C305.5,117,349,139,393,154.7C436.4,171,480,181,524,176C567.3,171,611,149,655,144C698.2,139,742,149,785,138.7C829.1,128,873,96,916,101.3C960,107,1004,149,1047,154.7C1090.9,160,1135,128,1178,112C1221.8,96,1265,96,1309,106.7C1352.7,117,1396,139,1418,149.3L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
    />
  </svg>
</motion.div>
    </div>
  );
};

export default AboutSection;