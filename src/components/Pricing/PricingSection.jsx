import React, { useRef } from "react";
import { CheckCircle, MessageCircle, Sparkles } from "lucide-react";
import { motion, useInView } from "framer-motion";

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const whatsappNumber = "573228207641";
  const whatsappMessage = encodeURIComponent("Hola, quiero aprovechar la oferta de $199.000");
  
  const benefits = [
    "4 clases personalizadas por semana",
    "Acceso a talleres y conferencias",
    "Material de estudio incluido",
    "Certificación al finalizar",
    "Soporte ilimitado",
    "Garantía de resultados"
  ];

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.1
      }
    })
  };

  return (
    <section
      ref={ref}
      className="py-20 md:py-28 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0A1A2F 0%, #031020 50%, #0A1A2F 100%)"
      }}
    >
      {/* Enhanced animated background effects */}
      <motion.div
        className="absolute top-10 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#D4B77D" }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 80, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-10 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: "#1D4E89" }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#D4B77D" }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Premium badge - moved to top center for better visibility */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: -30, scale: 0 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2, type: "spring", bounce: 0.5 }}
        >
          <motion.div
            className="px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #D4B77D 0%, #B8965F 100%)",
              color: "#0A1A2F",
              border: "2px solid rgba(255, 255, 255, 0.3)"
            }}
            whileHover={{ scale: 1.1, rotate: [0, -2, 2, -2, 2, 0] }}
            animate={{
              y: [0, -5, 0],
            }}
            transition={{
              y: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
            <span className="text-lg md:text-xl">¡Oferta Limitada!</span>
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.3, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            style={{ color: "#F5F7FA" }}
          >
            Oferta del <span style={{ color: "#D4B77D" }}>Programa</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(245, 247, 250, 0.7)" }}>
            Inversión única para transformar tu futuro
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            className="p-10 md:p-14 relative overflow-hidden rounded-3xl"
            style={{
              background: "linear-gradient(135deg, rgba(29, 78, 137, 0.25) 0%, rgba(10, 26, 47, 0.3) 100%)",
              border: "2px solid rgba(212, 183, 125, 0.5)",
              boxShadow: "0 30px 80px rgba(212, 183, 125, 0.2), 0 0 0 1px rgba(212, 183, 125, 0.1)",
              backdropFilter: "blur(20px)"
            }}
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            {/* Corner decorations */}
            <motion.div
              className="absolute top-0 right-0 w-40 h-40 opacity-30"
              style={{
                background: "radial-gradient(circle at top right, rgba(212,183,125,0.4) 0%, transparent 70%)"
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.3, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.4 }}
            />

            <motion.div
              className="absolute bottom-0 left-0 w-32 h-32 opacity-20"
              style={{
                background: "radial-gradient(circle at bottom left, rgba(29,78,137,0.4) 0%, transparent 70%)"
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 0.2, scale: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />

            {/* Pricing */}
            <div className="text-center mb-10 md:mb-14 relative z-10">
              <motion.p
                className="text-lg md:text-xl mb-3 font-semibold"
                style={{ color: "rgba(245, 247, 250, 0.7)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Precio anterior:
              </motion.p>

              <motion.div className="relative inline-block mb-6">
                <motion.p
                  className="text-4xl md:text-5xl font-bold line-through relative"
                  style={{ color: "rgba(212, 183, 125, 0.5)" }}
                  initial={{ opacity: 0, scale: 0.5, rotate: -5 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5, type: "spring" }}
                >
                  $250.000
                </motion.p>
                <motion.div
                  className="absolute -right-10 -top-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                  initial={{ opacity: 0, scale: 0, rotate: 45 }}
                  animate={isInView ? { opacity: 1, scale: 1, rotate: 12 } : {}}
                  transition={{ duration: 0.5, delay: 0.7, type: "spring" }}
                >
                  -20%
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.6, type: "spring" }}
              >
                <p
                  className="text-xl md:text-2xl mb-3 font-bold"
                  style={{ color: "#F5F7FA" }}
                >
                  Ahora solo:
                </p>

                <motion.div className="relative inline-block">
                  {/* Glow effect */}
                  <motion.div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: "radial-gradient(circle, rgba(212, 183, 125, 0.4) 0%, transparent 70%)",
                      filter: "blur(20px)"
                    }}
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  <motion.p
                    className="text-6xl sm:text-7xl md:text-8xl font-black relative z-10"
                    style={{
                      background: "linear-gradient(135deg, #D4B77D 0%, #F5F7FA 50%, #D4B77D 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    $199.000
                  </motion.p>
                </motion.div>

                <p
                  className="text-base md:text-lg mt-4 font-semibold"
                  style={{ color: "rgba(245, 247, 250, 0.7)" }}
                >
                  Por los 9 meses completos
                </p>

                {/* Savings indicator */}
                <motion.div
                  className="mt-4 inline-block px-6 py-2 rounded-full"
                  style={{
                    background: "rgba(34, 197, 94, 0.2)",
                    border: "1px solid rgba(34, 197, 94, 0.4)"
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <p className="text-green-400 font-bold text-sm md:text-base">
                    💰 Ahorras $51.000
                  </p>
                </motion.div>
              </motion.div>
            </div>

            {/* Benefits */}
            <motion.div
              className="space-y-4 mb-10 md:mb-12 relative z-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={itemVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex items-center gap-3 text-left group p-4 rounded-xl transition-all duration-300"
                    style={{
                      background: "rgba(245, 247, 250, 0.05)",
                      border: "1px solid rgba(212, 183, 125, 0.2)"
                    }}
                    whileHover={{
                      x: 5,
                      background: "rgba(245, 247, 250, 0.1)",
                      borderColor: "rgba(212, 183, 125, 0.4)"
                    }}
                  >
                    <motion.div
                      className="relative"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      {/* Icon glow */}
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: "rgba(212, 183, 125, 0.3)",
                          filter: "blur(8px)"
                        }}
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.2
                        }}
                      />
                      <CheckCircle
                        className="w-6 h-6 md:w-7 md:h-7 flex-shrink-0 relative z-10"
                        style={{ color: "#D4B77D" }}
                      />
                    </motion.div>
                    <span
                      className="text-base md:text-lg font-medium"
                      style={{ color: "#F5F7FA" }}
                    >
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative w-full text-xl md:text-2xl py-6 md:py-7 rounded-2xl font-black flex items-center justify-center gap-3 cursor-pointer overflow-hidden group shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #D4B77D 0%, #B8965F 100%)",
                color: "#0A1A2F",
                border: "2px solid rgba(255, 255, 255, 0.3)"
              }}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.9, type: "spring", bounce: 0.3 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(212,183,125,0.6)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%)"
                }}
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />

              {/* Ripple effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
                }}
                animate={{
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <motion.div
                className="relative z-10"
                animate={{
                  rotate: [0, -10, 10, -10, 10, 0]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                <MessageCircle className="w-7 h-7 md:w-8 md:h-8" />
              </motion.div>

              <span className="relative z-10">Quiero empezar hoy</span>

              {/* Shine effect */}
              <motion.div
                className="absolute top-0 left-0 w-full h-full"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)",
                }}
                animate={{
                  x: ["-100%", "200%"]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1,
                  ease: "easeInOut"
                }}
              />
            </motion.a>

            {/* Trust indicators */}
            <motion.div
              className="grid grid-cols-3 gap-4 mt-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.1 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-2xl">🔒</span>
                <p className="text-xs md:text-sm font-semibold" style={{ color: "rgba(245, 247, 250, 0.8)" }}>
                  Pago seguro
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-2xl">✨</span>
                <p className="text-xs md:text-sm font-semibold" style={{ color: "rgba(245, 247, 250, 0.8)" }}>
                  Plazas limitadas
                </p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center gap-2"
              >
                <span className="text-2xl">💯</span>
                <p className="text-xs md:text-sm font-semibold" style={{ color: "rgba(245, 247, 250, 0.8)" }}>
                  Garantía total
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default PricingSection;