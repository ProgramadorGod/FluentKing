import React, { useRef } from "react";
import { Users, ThumbsUp, Headphones } from "lucide-react";
import { motion, useInView } from "framer-motion";

const TrustSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Estudiantes Activos"
    },
    {
      icon: ThumbsUp,
      number: "98%",
      label: "Satisfacción"
    },
    {
      icon: Headphones,
      number: "24/7",
      label: "Soporte y Clases"
    }
  ];

  return (
    <section 
      ref={ref} 
      className="py-16 md:py-24 relative overflow-hidden"
      style={{ backgroundColor: "#0A1A2F" }}
    >
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(212, 183, 125, 0.1)" }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity
        }}
      />
      
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(29, 78, 137, 0.15)" }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          delay: 1
        }}
      />
      
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16"
          style={{ color: "#F5F7FA" }}
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          Por Qué Confiar en <span style={{ color: "#D4B77D" }}>Nosotros</span>
        </motion.h2>

        <div className="grid sm:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                whileHover={{ y: -15, scale: 1.05 }}
                className="flex flex-col items-center text-center space-y-4 p-6 md:p-8 rounded-xl relative overflow-hidden group cursor-pointer"
                style={{
                  backgroundColor: "rgba(245, 247, 250, 0.05)",
                  border: "2px solid rgba(212, 183, 125, 0.3)",
                  transition: "border-color 0.3s"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#D4B77D";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(212, 183, 125, 0.3)";
                }}
              >
                {/* Gradient glow effect on hover */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle at center, rgba(212, 183, 125, 0.15) 0%, transparent 70%)"
                  }}
                />

                {/* Icon with animation */}
                <motion.div 
                  className="relative z-10"
                  style={{ color: "#D4B77D" }}
                  whileHover={{ 
                    rotate: [0, -10, 10, -5, 5, 0], 
                    scale: 1.2 
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12" />
                </motion.div>

                {/* Number with spring animation */}
                <motion.p 
                  className="text-4xl sm:text-5xl md:text-6xl font-extrabold relative z-10"
                  style={{ color: "#D4B77D" }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: 0.5 + index * 0.2, 
                    type: "spring", 
                    bounce: 0.5 
                  }}
                >
                  {stat.number}
                </motion.p>

                {/* Label */}
                <p 
                  className="text-lg md:text-xl font-semibold relative z-10"
                  style={{ color: "#F5F7FA" }}
                >
                  {stat.label}
                </p>

                {/* Bottom accent line on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1"
                  style={{ backgroundColor: "#D4B77D" }}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom text with fade-in */}
        <motion.div 
          className="mt-12 md:mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p 
            className="text-lg md:text-xl leading-relaxed"
            style={{ color: "rgba(245, 247, 250, 0.9)" }}
          >
            Más de <span style={{ color: "#D4B77D", fontWeight: "700" }}>500 profesionales</span> y estudiantes confían en nosotros para alcanzar sus metas.
            Nuestro compromiso es tu progreso, con soporte constante y clases diseñadas para <span style={{ color: "#D4B77D", fontWeight: "700" }}>resultados reales</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;