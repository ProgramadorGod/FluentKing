import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Video, Calendar, Award, Briefcase, GraduationCap } from "lucide-react";
import { features } from "./featuresData";

const iconMap = { Users, Video, Calendar, Award, Briefcase, GraduationCap };

const HowWeWorkSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F5F7FA 0%, #E8EEF5 50%, #F5F7FA 100%)"
      }}
    >
      {/* Enhanced animated background blobs */}
      <motion.div
        className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#D4B77D" }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: "#1D4E89" }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 19,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#D4B77D" }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 21,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            style={{ color: "#0A1A2F" }}
          >
            Cómo <span style={{ color: "#D4B77D" }}>Trabajamos</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(10, 26, 47, 0.6)" }}>
            Un método probado paso a paso para tu éxito
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.2 + index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -10, scale: 1.03 }}
                className="relative group cursor-pointer"
              >
                {/* Card with glassmorphism */}
                <div
                  className="relative p-8 md:p-10 rounded-2xl overflow-hidden h-full flex flex-col items-center text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
                    border: "2px solid rgba(212, 183, 125, 0.3)",
                    boxShadow: "0 20px 50px rgba(10, 26, 47, 0.15), 0 0 0 1px rgba(212, 183, 125, 0.1)",
                    backdropFilter: "blur(20px)",
                    transition: "all 0.4s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 183, 125, 0.6)";
                    e.currentTarget.style.boxShadow = "0 25px 60px rgba(212, 183, 125, 0.25), 0 0 0 1px rgba(212, 183, 125, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 183, 125, 0.3)";
                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(10, 26, 47, 0.15), 0 0 0 1px rgba(212, 183, 125, 0.1)";
                  }}
                >
                  {/* Step number badge */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center font-black text-lg md:text-xl shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #D4B77D 0%, #B8965F 100%)",
                      color: "#0A1A2F",
                      border: "3px solid #FFFFFF"
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.6,
                      delay: 0.4 + index * 0.1,
                      type: "spring",
                      bounce: 0.6
                    }}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                  >
                    {index + 1}
                  </motion.div>

                  {/* Corner decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-24 h-24 opacity-20"
                    style={{
                      background: "radial-gradient(circle at top right, rgba(212,183,125,0.3) 0%, transparent 70%)"
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
                    transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                  />

                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at 50% 0%, rgba(212, 183, 125, 0.1) 0%, transparent 60%)"
                    }}
                  />

                  {/* Icon container with glow */}
                  <motion.div
                    className="relative mb-6 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full z-10"
                    style={{
                      background: "rgba(212, 183, 125, 0.15)",
                      border: "2px solid rgba(212, 183, 125, 0.4)"
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={isInView ? { scale: 1, rotate: 0 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      bounce: 0.5
                    }}
                    whileHover={{
                      rotate: [0, -10, 10, -10, 10, 0],
                      scale: 1.15,
                      borderColor: "#D4B77D"
                    }}
                  >
                    {/* Icon glow effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "rgba(212, 183, 125, 0.3)",
                        filter: "blur(10px)"
                      }}
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                    <Icon
                      className="w-10 h-10 md:w-12 md:h-12 relative z-10"
                      style={{ color: "#D4B77D" }}
                    />
                  </motion.div>

                  {/* Title */}
                  <h3
                    className="text-xl md:text-2xl font-bold mb-3 relative z-10"
                    style={{
                      background: "linear-gradient(135deg, #0A1A2F 0%, #1D4E89 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm md:text-base relative z-10 leading-relaxed"
                    style={{ color: "rgba(10, 26, 47, 0.7)" }}
                  >
                    {feature.description}
                  </p>

                  {/* Animated bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-2xl"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, #D4B77D 50%, transparent 100%)"
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
