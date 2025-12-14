import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { AlertCircle, CheckCircle2, X, Sparkles } from "lucide-react";
import englishBg from "../../resources/english.jpg";

const problems = [
  {
    icon: AlertCircle,
    title: "Métodos Tradicionales Ineficaces",
    description: "Años estudiando inglés sin poder mantener una conversación real."
  },
  {
    icon: AlertCircle,
    title: "Falta de Práctica Real",
    description: "Gramática perfecta pero incapacidad para comunicarse en situaciones cotidianas."
  },
  {
    icon: AlertCircle,
    title: "Miedo a Hablar",
    description: "Inseguridad y vergüenza al intentar expresarte en inglés."
  }
];

const solutions = [
  {
    icon: CheckCircle2,
    title: "Método Conversacional 100%",
    description: "Desde la primera clase hablas inglés real con profesores nativos.",
    color: "#D4B77D"
  },
  {
    icon: CheckCircle2,
    title: "Práctica Inmersiva Diaria",
    description: "Situaciones reales del día a día para que ganes confianza al hablar.",
    color: "#D4B77D"
  },
  {
    icon: CheckCircle2,
    title: "Resultados en 3 Meses",
    description: "Progreso medible: de no poder hablar a mantener conversaciones fluidas.",
    color: "#D4B77D"
  }
];

const ProblemCard = ({ icon: Icon, title, description, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ x: -8, scale: 1.02 }}
      className="relative group cursor-pointer"
    >
      <div
        className="relative p-6 md:p-8 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-400 shadow-xl"
        style={{
          background: "linear-gradient(135deg, rgba(127, 29, 29, 0.25) 0%, rgba(153, 27, 27, 0.2) 100%)",
          border: "2px solid rgba(239, 68, 68, 0.4)",
          boxShadow: "0 10px 40px rgba(239, 68, 68, 0.15)"
        }}
      >
        {/* X icon in top right corner */}
        <motion.div
          className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: "linear-gradient(135deg, #EF4444 0%, #DC2626 100%)",
            border: "3px solid rgba(255, 255, 255, 0.9)"
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.2 + index * 0.15,
            type: "spring",
            bounce: 0.6
          }}
          whileHover={{ rotate: 180, scale: 1.2 }}
        >
          <X className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} />
        </motion.div>

        {/* Corner decoration */}
        <motion.div
          className="absolute top-0 left-0 w-20 h-20 opacity-20"
          style={{
            background: "radial-gradient(circle at top left, rgba(239, 68, 68, 0.4) 0%, transparent 70%)"
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
        />

        {/* Animated gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(239, 68, 68, 0.15) 0%, transparent 70%)"
          }}
        />

        <div className="flex items-start gap-4 relative z-10">
          {/* Icon container with glow */}
          <motion.div
            className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center relative"
            style={{
              background: "rgba(239, 68, 68, 0.2)",
              border: "2px solid rgba(239, 68, 68, 0.5)"
            }}
            whileHover={{
              rotate: [0, -8, 8, -8, 8, 0],
              scale: 1.1,
              borderColor: "#EF4444"
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "rgba(239, 68, 68, 0.3)",
                filter: "blur(8px)"
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
            <Icon className="w-7 h-7 md:w-8 md:h-8 text-red-400 relative z-10" />
          </motion.div>

          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: "#FCA5A5" }}>
              {title}
            </h3>
            <p className="leading-relaxed" style={{ color: "rgba(245, 247, 250, 0.85)" }}>
              {description}
            </p>
          </div>
        </div>

        {/* Animated bottom accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #EF4444 50%, transparent 100%)"
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

const SolutionCard = ({ icon: Icon, title, description, color, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 60, scale: 0.9 }}
      animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ x: 8, scale: 1.02 }}
      className="relative group cursor-pointer"
    >
      <div
        className="relative p-6 md:p-8 rounded-2xl overflow-hidden backdrop-blur-md transition-all duration-400 shadow-xl"
        style={{
          background: "linear-gradient(135deg, rgba(212, 183, 125, 0.15) 0%, rgba(184, 150, 95, 0.1) 100%)",
          border: "2px solid rgba(212, 183, 125, 0.5)",
          boxShadow: "0 10px 40px rgba(212, 183, 125, 0.2)"
        }}
      >
        {/* Check icon in top right corner */}
        <motion.div
          className="absolute -top-2 -right-2 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shadow-lg"
          style={{
            background: "linear-gradient(135deg, #D4B77D 0%, #B8965F 100%)",
            border: "3px solid rgba(255, 255, 255, 0.9)"
          }}
          initial={{ scale: 0, rotate: -180 }}
          animate={isInView ? { scale: 1, rotate: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.2 + index * 0.15,
            type: "spring",
            bounce: 0.6
          }}
          whileHover={{ rotate: 360, scale: 1.2 }}
        >
          <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={3} fill="currentColor" />
        </motion.div>

        {/* Corner decoration */}
        <motion.div
          className="absolute top-0 right-0 w-24 h-24 opacity-20"
          style={{
            background: "radial-gradient(circle at top right, rgba(212, 183, 125, 0.4) 0%, transparent 70%)"
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 + index * 0.15 }}
        />

        {/* Animated gradient overlay on hover */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at 50% 50%, rgba(212, 183, 125, 0.15) 0%, transparent 70%)"
          }}
        />

        <div className="flex items-start gap-4 relative z-10">
          {/* Icon container with glow */}
          <motion.div
            className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center relative"
            style={{
              background: "rgba(212, 183, 125, 0.2)",
              border: "2px solid rgba(212, 183, 125, 0.5)"
            }}
            whileHover={{
              rotate: [0, -8, 8, -8, 8, 0],
              scale: 1.1,
              borderColor: "#D4B77D"
            }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon glow effect */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                background: "rgba(212, 183, 125, 0.4)",
                filter: "blur(8px)"
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
            <Icon className="w-7 h-7 md:w-8 md:h-8 relative z-10" style={{ color }} />
          </motion.div>

          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold mb-2" style={{ color: "#D4B77D" }}>
              {title}
            </h3>
            <p className="leading-relaxed" style={{ color: "rgba(245, 247, 250, 0.85)" }}>
              {description}
            </p>
          </div>
        </div>

        {/* Animated bottom accent */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
          style={{
            background: "linear-gradient(90deg, transparent 0%, #D4B77D 50%, transparent 100%)"
          }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
        />
      </div>
    </motion.div>
  );
};

const ProblemSolutionSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.6, 1, 1, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div className="relative" ref={sectionRef}>
      {/* Angled Top Divider */}
      <div className="absolute top-0 w-full overflow-hidden z-20" style={{ height: 100 }}>
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            fill="#0A1A2F"
            d="M0,0 L1440,0 L1440,80 L0,100 Z"
          />
        </svg>
      </div>

      <section
        className="pt-20 pb-32 md:pb-40 w-full relative overflow-hidden"
        style={{ paddingTop: "140px" }}
      >
        {/* Parallax Background Image */}
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ 
            y,
            scale,
            opacity
          }}
        >
          <motion.img
            src={englishBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{ zIndex: 1 }}
          />
          {/* Dark overlay for better text readability */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{
              background: "linear-gradient(135deg, rgba(30, 26, 68, 0.92) 0%, rgba(10, 26, 47, 0.88) 50%, rgba(30, 26, 68, 0.92) 100%)",
              zIndex: 2
            }}
          />
        </motion.div>

        {/* Animated overlay effects */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-red-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-20"
          >
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
              style={{ color: "#F5F7FA" }}
            >
              ¿Por Qué No Has Logrado{" "}
              <span style={{ color: "#D4B77D" }}>Hablar Inglés</span>?
            </h2>
            <p
              className="text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed"
              style={{ color: "rgba(245, 247, 250, 0.8)" }}
            >
              Identificamos tu problema real y te damos la solución definitiva
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Problemas Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="mb-8 text-center lg:text-left"
              >
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-6 backdrop-blur-sm shadow-lg"
                  style={{
                    backgroundColor: 'rgba(239, 68, 68, 0.2)',
                    borderColor: 'rgba(239, 68, 68, 0.5)'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <X className="w-5 h-5 text-red-400" strokeWidth={3} />
                  <span className="text-red-300 font-bold text-lg">
                    El Problema
                  </span>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#FCA5A5" }}>
                  Métodos que NO funcionan
                </h3>
                <p className="text-base" style={{ color: "rgba(245, 247, 250, 0.7)" }}>
                  Estas son las barreras que te detienen
                </p>
              </motion.div>

              <div className="space-y-5 md:space-y-6">
                {problems.map((problem, idx) => (
                  <ProblemCard key={idx} {...problem} index={idx} />
                ))}
              </div>
            </div>

            {/* Soluciones Column */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className="mb-8 text-center lg:text-left"
              >
                <motion.div
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-6 backdrop-blur-sm shadow-lg"
                  style={{
                    backgroundColor: 'rgba(212, 183, 125, 0.2)',
                    borderColor: 'rgba(212, 183, 125, 0.5)'
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles className="w-5 h-5" style={{ color: "#D4B77D" }} />
                  <span className="font-bold text-lg" style={{ color: "#D4B77D" }}>
                    La Solución
                  </span>
                </motion.div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: "#D4B77D" }}>
                  Nuestro Método Comprobado
                </h3>
                <p className="text-base" style={{ color: "rgba(245, 247, 250, 0.7)" }}>
                  Así transformamos tu inglés
                </p>
              </motion.div>

              <div className="space-y-5 md:space-y-6">
                {solutions.map((solution, idx) => (
                  <SolutionCard key={idx} {...solution} index={idx} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-6 md:gap-8 mt-16 md:mt-20"
          >
            {[
              { number: "87%", text: "De estudiantes logran conversación fluida en 3 meses", delay: 0 },
              { number: "+500", text: "Profesionales ya hablan inglés con confianza", delay: 0.1 },
              { number: "100%", text: "Profesores nativos certificados", delay: 0.2 }
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: stat.delay,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="relative group cursor-pointer"
              >
                <div
                  className="relative backdrop-blur-md rounded-2xl p-6 md:p-8 text-center overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, rgba(212, 183, 125, 0.15) 0%, rgba(184, 150, 95, 0.1) 100%)",
                    border: "2px solid rgba(212, 183, 125, 0.4)",
                    boxShadow: "0 10px 40px rgba(212, 183, 125, 0.2)"
                  }}
                >
                  {/* Corner decoration */}
                  <motion.div
                    className="absolute top-0 right-0 w-20 h-20 opacity-20"
                    style={{
                      background: "radial-gradient(circle at top right, rgba(212, 183, 125, 0.4) 0%, transparent 70%)"
                    }}
                  />

                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at 50% 50%, rgba(212, 183, 125, 0.1) 0%, transparent 70%)"
                    }}
                  />

                  <div className="relative z-10">
                    {/* Number with glow */}
                    <motion.div className="relative inline-block mb-3">
                      <motion.div
                        className="absolute inset-0 rounded-2xl"
                        style={{
                          background: "radial-gradient(circle, rgba(212, 183, 125, 0.3) 0%, transparent 70%)",
                          filter: "blur(15px)"
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.4, 0.7, 0.4]
                        }}
                        transition={{
                          duration: 2.5,
                          repeat: Infinity,
                          delay: idx * 0.3
                        }}
                      />
                      <p
                        className="text-5xl md:text-6xl font-black relative z-10"
                        style={{
                          background: "linear-gradient(135deg, #D4B77D 0%, #F5F7FA 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}
                      >
                        {stat.number}
                      </p>
                    </motion.div>

                    <p className="text-sm md:text-base leading-relaxed font-medium" style={{ color: "rgba(245, 247, 250, 0.9)" }}>
                      {stat.text}
                    </p>
                  </div>

                  {/* Animated bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, #D4B77D 50%, transparent 100%)"
                    }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 + idx * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Wave separator */}
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
            fill="#ffffff"
            d="M0,96L21.8,112C43.6,128,87,160,131,160C174.5,160,218,128,262,122.7C305.5,117,349,139,393,154.7C436.4,171,480,181,524,176C567.3,171,611,149,655,144C698.2,139,742,149,785,138.7C829.1,128,873,96,916,101.3C960,107,1004,149,1047,154.7C1090.9,160,1135,128,1178,112C1221.8,96,1265,96,1309,106.7C1352.7,117,1396,139,1418,149.3L1440,160L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default ProblemSolutionSection;