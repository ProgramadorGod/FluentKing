import React, { useRef } from "react";
import { Users, ThumbsUp, Headphones, Award, Globe, TrendingUp } from "lucide-react";
import { motion, useInView } from "framer-motion";

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Estudiantes Activos",
      description: "Confiando en nosotros"
    },
    {
      icon: ThumbsUp,
      number: "98%",
      label: "Satisfacción",
      description: "De nuestros estudiantes"
    },
    {
      icon: Headphones,
      number: "24/7",
      label: "Soporte y Clases",
      description: "Disponibles siempre"
    }
  ];

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A1A2F 0%, #031020 50%, #0A1A2F 100%)"
      }}
    >
      {/* Enhanced animated background blobs */}
      <motion.div
        className="absolute top-10 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: "#D4B77D" }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-10 right-1/4 w-[450px] h-[450px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#1D4E89" }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-[350px] h-[350px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#D4B77D" }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, 40, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
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
            style={{ color: "#F5F7FA" }}
          >
            Por Qué Confiar en <span style={{ color: "#D4B77D" }}>Nosotros</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(245, 247, 250, 0.7)" }}>
            Resultados comprobados que transforman vidas
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{
                  duration: 0.7,
                  delay: 0.3 + index * 0.15,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ y: -12, scale: 1.03 }}
                className="relative group cursor-pointer"
              >
                {/* Card background with gradient border */}
                <div
                  className="relative p-8 md:p-10 rounded-2xl overflow-hidden h-full flex flex-col items-center text-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(245, 247, 250, 0.08) 0%, rgba(29, 78, 137, 0.05) 100%)",
                    border: "1px solid rgba(212, 183, 125, 0.2)",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.4s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 183, 125, 0.6)";
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(245, 247, 250, 0.12) 0%, rgba(29, 78, 137, 0.08) 100%)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(212, 183, 125, 0.2)";
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(245, 247, 250, 0.08) 0%, rgba(29, 78, 137, 0.05) 100%)";
                  }}
                >
                  {/* Animated gradient overlay on hover */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at 50% 0%, rgba(212, 183, 125, 0.15) 0%, transparent 60%)"
                    }}
                  />

                  {/* Icon container with background circle */}
                  <motion.div
                    className="relative mb-6 flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full"
                    style={{
                      background: "rgba(212, 183, 125, 0.1)",
                      border: "2px solid rgba(212, 183, 125, 0.3)"
                    }}
                    whileHover={{
                      rotate: [0, -8, 8, -5, 5, 0],
                      scale: 1.1,
                      borderColor: "#D4B77D"
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-10 h-10 md:w-12 md:h-12" style={{ color: "#D4B77D" }} />
                  </motion.div>

                  {/* Number with counter animation */}
                  <motion.p
                    className="text-5xl sm:text-6xl md:text-7xl font-black mb-3 relative z-10"
                    style={{
                      background: "linear-gradient(135deg, #D4B77D 0%, #F5F7FA 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{
                      duration: 0.8,
                      delay: 0.5 + index * 0.15,
                      type: "spring",
                      bounce: 0.6
                    }}
                  >
                    {stat.number}
                  </motion.p>

                  {/* Label */}
                  <h3
                    className="text-xl md:text-2xl font-bold mb-2 relative z-10"
                    style={{ color: "#F5F7FA" }}
                  >
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-sm md:text-base relative z-10"
                    style={{ color: "rgba(245, 247, 250, 0.6)" }}
                  >
                    {stat.description}
                  </p>

                  {/* Animated bottom accent */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-1.5 rounded-b-2xl"
                    style={{
                      background: "linear-gradient(90deg, transparent 0%, #D4B77D 50%, transparent 100%)"
                    }}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileInView={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  />

                  {/* Corner decoration */}
                  <div
                    className="absolute top-0 right-0 w-20 h-20 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{
                      background: "radial-gradient(circle at top right, #D4B77D 0%, transparent 70%)"
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom text with enhanced design */}
        <motion.div
          className="mt-16 md:mt-20 text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div
            className="p-8 md:p-10 rounded-2xl relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(212, 183, 125, 0.1) 0%, rgba(29, 78, 137, 0.1) 100%)",
              border: "1px solid rgba(212, 183, 125, 0.3)",
              backdropFilter: "blur(10px)"
            }}
          >
            <motion.div
              className="absolute inset-0 opacity-50"
              style={{
                background: "radial-gradient(circle at center, rgba(212, 183, 125, 0.05) 0%, transparent 70%)"
              }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <p
              className="text-lg md:text-2xl leading-relaxed relative z-10 font-medium"
              style={{ color: "#F5F7FA" }}
            >
              Más de <span style={{ color: "#D4B77D", fontWeight: "800" }}>500 profesionales</span> y estudiantes confían en nosotros para alcanzar sus metas.
              {" "}Nuestro compromiso es tu progreso, con soporte constante y clases diseñadas para{" "}
              <span style={{ color: "#D4B77D", fontWeight: "800" }}>resultados reales</span>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;