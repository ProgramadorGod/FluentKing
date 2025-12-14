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
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0A1A2F" }}
    >
      {/* Background effects */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(212, 183, 125, 0.05)" }}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16"
            style={{ color: "#F5F7FA" }}
          >
            Oferta del <span style={{ color: "#D4B77D" }}>Programa</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="p-8 md:p-12 relative overflow-hidden rounded-2xl"
            style={{
              backgroundColor: "rgba(29, 78, 137, 0.2)",
              border: "2px solid #D4B77D",
              boxShadow: "0 20px 60px rgba(212, 183, 125, 0.15)"
            }}
            initial={{ opacity: 0, scale: 0.9, rotateX: -20 }}
            animate={isInView ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Premium badge */}
            <motion.div
              className="absolute top-4 right-4 px-4 py-2 rounded-full font-bold flex items-center gap-2"
              style={{ backgroundColor: "#D4B77D", color: "#0A1A2F" }}
              initial={{ opacity: 0, x: 50, rotate: 45 }}
              animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4" />
              Oferta Limitada
            </motion.div>

            {/* Pricing */}
            <div className="text-center mb-8 md:mb-12">
              <motion.p 
                className="text-lg md:text-xl mb-2"
                style={{ color: "rgba(245, 247, 250, 0.6)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Precio anterior:
              </motion.p>
              
              <motion.p 
                className="text-3xl md:text-4xl font-bold line-through mb-4"
                style={{ color: "#D4B77D" }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                $250.000
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <p 
                  className="text-lg md:text-xl mb-2"
                  style={{ color: "rgba(245, 247, 250, 0.8)" }}
                >
                  Ahora solo:
                </p>
                <motion.p 
                  className="text-5xl sm:text-6xl md:text-7xl font-extrabold"
                  style={{ color: "#D4B77D" }}
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
                <p 
                  className="text-sm md:text-base mt-2"
                  style={{ color: "rgba(245, 247, 250, 0.6)" }}
                >
                  Por los 9 meses completos
                </p>
              </motion.div>
            </div>

            {/* Benefits */}
            <motion.div 
              className="space-y-4 mb-8 md:mb-10"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  className="flex items-center gap-3 text-left group"
                  whileHover={{ x: 10 }}
                >
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <CheckCircle 
                      className="w-6 h-6 flex-shrink-0" 
                      style={{ color: "#D4B77D" }}
                    />
                  </motion.div>
                  <span 
                    className="text-base md:text-lg"
                    style={{ color: "#F5F7FA" }}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-lg md:text-xl py-5 md:py-6 rounded-lg font-bold flex items-center justify-center gap-3 cursor-pointer"
              style={{ 
                backgroundColor: "#D4B77D",
                color: "#0A1A2F"
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(212,183,125,0.5)" }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
              Quiero empezar hoy
            </motion.a>

            {/* Trust indicator */}
            <motion.p
              className="text-center text-sm md:text-base mt-6"
              style={{ color: "rgba(245, 247, 250, 0.6)" }}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 1 }}
            >
              🔒 Pago seguro • ✨ Plazas limitadas • 💯 Garantía de satisfacción
            </motion.p>
          </motion.div>
        </div>
        
      </div>
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
      fill="#F3F6F9"
      d="M0,224 L90,160 L180,224 L270,128 L360,224 L450,176 L540,224 L630,144 L720,224 L810,160 L900,224 L990,128 L1080,224 L1170,176 L1260,224 L1350,160 L1440,224 L1440,320 L0,320 Z"
    />
  </svg>
</motion.div>
    </section>
  );
};

export default PricingSection;