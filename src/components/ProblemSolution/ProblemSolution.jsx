import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";
import englishBg from "../../resources/english.jpg";

const problems = [
  {
    icon: AlertCircle,
    title: "Métodos Tradicionales Ineficaces",
    description:
      "Años estudiando inglés sin poder mantener una conversación real.",
  },
  {
    icon: AlertCircle,
    title: "Falta de Práctica Real",
    description:
      "Gramática perfecta pero incapacidad para comunicarse en situaciones cotidianas.",
  },
  {
    icon: AlertCircle,
    title: "Miedo a Hablar",
    description: "Inseguridad y vergüenza al intentar expresarte en inglés.",
  },
];

const solutions = [
  {
    icon: CheckCircle2,
    title: "Método Conversacional 100%",
    description:
      "Desde la primera clase hablas inglés real con profesores nativos.",
    color: "#D4B77D",
  },
  {
    icon: CheckCircle2,
    title: "Práctica Inmersiva Diaria",
    description:
      "Situaciones reales del día a día para que ganes confianza al hablar.",
    color: "#D4B77D",
  },
  {
    icon: CheckCircle2,
    title: "Resultados en 3 Meses",
    description:
      "Progreso medible: de no poder hablar a mantener conversaciones fluidas.",
    color: "#D4B77D",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const solutionVariants = {
  hidden: { opacity: 0, x: 50 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const ProblemCard = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-red-950/30 border-2 border-red-800/60 rounded-2xl p-6 backdrop-blur-md hover:border-red-700/80 hover:bg-red-950/40 transition-all duration-300 shadow-xl">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-red-900/40 rounded-xl flex items-center justify-center">
          <Icon className="w-6 h-6 text-red-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-red-300 mb-2">{title}</h3>
          <p className="text-gray-200 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const SolutionCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="bg-emerald-950/30 border-2 border-emerald-800/60 rounded-2xl p-6 backdrop-blur-md hover:border-emerald-700/80 hover:bg-emerald-950/40 hover:shadow-2xl hover:shadow-emerald-900/30 transition-all duration-300 shadow-xl">
      <div className="flex items-start gap-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center"
          style={{ backgroundColor: `${color}40` }}
        >
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-emerald-300 mb-2">{title}</h3>
          <p className="text-gray-200 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProblemSolutionSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect: moves slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0.6, 1, 1, 0.6]
  );
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <div className="relative" ref={sectionRef}>
      {/* Angled Top Divider */}
      <div
        className="absolute top-0 w-full overflow-hidden z-20"
        style={{ height: 100 }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path fill="#0A1A2F" d="M0,0 L1440,0 L1440,80 L0,100 Z" />
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
            opacity,
          }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${englishBg})`,
              backgroundAttachment: "fixed",
            }}
          />
          {/* Dark overlay for better text readability */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(135deg, rgba(30, 26, 68, 0.92) 0%, rgba(10, 26, 47, 0.88) 50%, rgba(30, 26, 68, 0.92) 100%)",
            }}
          />
        </motion.div>

        {/* Animated overlay effects */}
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-red-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-900/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        />

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-6"
              style={{ color: "#F5F7FA" }}
            >
              ¿Por Qué No Has Logrado{" "}
              <span style={{ color: "#D4B77D" }}>Hablar Inglés</span>?
            </h2>
            <p
              className="text-lg md:text-xl max-w-3xl mx-auto"
              style={{ color: "rgba(245, 247, 250, 0.9)" }}
            >
              Identificamos tu problema real y te damos la solución definitiva
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Problemas Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="mb-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-3 bg-red-900/30 px-6 py-3 rounded-full border border-red-800/60 mb-6 backdrop-blur-sm">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-300 font-semibold text-lg">
                    El Problema
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-red-200 mb-4">
                  Métodos que NO funcionan
                </h3>
              </div>

              <div className="space-y-6">
                {problems.map((problem, idx) => (
                  <motion.div key={idx} variants={itemVariants}>
                    <ProblemCard {...problem} />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Soluciones Column */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="mb-8 text-center lg:text-left">
                <div
                  className="inline-flex items-center gap-3 px-6 py-3 rounded-full border mb-6 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(212, 183, 125, 0.15)",
                    borderColor: "rgba(212, 183, 125, 0.4)",
                  }}
                >
                  <TrendingUp
                    className="w-5 h-5"
                    style={{ color: "#D4B77D" }}
                  />
                  <span
                    className="font-semibold text-lg"
                    style={{ color: "#D4B77D" }}
                  >
                    La Solución
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-200 mb-4">
                  Nuestro Método Comprobado
                </h3>
              </div>

              <div className="space-y-6">
                {solutions.map((solution, idx) => (
                  <motion.div key={idx} variants={solutionVariants}>
                    <SolutionCard {...solution} />
                  </motion.div>
                ))}
              </div>

              {/* CTA Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 text-center lg:text-left"
              >
                <div
                  className="inline-block px-8 py-4 rounded-2xl border-2 backdrop-blur-sm"
                  style={{
                    backgroundColor: "rgba(212, 183, 125, 0.15)",
                    borderColor: "#D4B77D",
                  }}
                >
                  <p
                    className="text-lg font-bold mb-1"
                    style={{ color: "#D4B77D" }}
                  >
                    ✨ Garantía de Resultados
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "rgba(245, 247, 250, 0.9)" }}
                  >
                    O te devolvemos tu inversión
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Bottom Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid sm:grid-cols-3 gap-8 mt-20 text-center"
          >
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6">
              <p
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: "#D4B77D" }}
              >
                87%
              </p>
              <p className="text-gray-200">
                De estudiantes logran conversación fluida en 3 meses
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6">
              <p
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: "#D4B77D" }}
              >
                +500
              </p>
              <p className="text-gray-200">
                Profesionales ya hablan inglés con confianza
              </p>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-2xl p-6">
              <p
                className="text-4xl md:text-5xl font-bold mb-2"
                style={{ color: "#D4B77D" }}
              >
                100%
              </p>
              <p className="text-gray-200">Profesores nativos certificados</p>
            </div>
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
