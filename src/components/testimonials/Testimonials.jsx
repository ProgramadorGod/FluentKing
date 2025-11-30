import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Carlos Rodríguez",
      role: "Ingeniero de Software",
      text: "En 3 meses ya podía hablar con clientes internacionales. La metodología es práctica y directa, sin perder tiempo en teoría innecesaria.",
      rating: 5,
      image: "CR"
    },
    {
      name: "María González",
      role: "Diseñadora UX",
      text: "Por fin aprendí inglés sin frustrarme. Las clases son personalizadas y los profesores realmente se preocupan por tu progreso.",
      rating: 5,
      image: "MG"
    },
    {
      name: "Andrés Moreno",
      role: "Gerente Comercial",
      text: "Conseguí el trabajo de mis sueños gracias al inglés que aprendí aquí. La inversión valió completamente la pena.",
      rating: 5,
      image: "AM"
    },
    {
      name: "Laura Pérez",
      role: "Estudiante Universitaria",
      text: "Me prepararon perfectamente para mi intercambio. Ahora puedo comunicarme con confianza en cualquier situación.",
      rating: 5,
      image: "LP"
    }
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section 
      ref={ref} 
      className="relative py-12 md:py-16 overflow-hidden"
      style={{ backgroundColor: "#F5F7FA" }}
    >
      {/* Animated background effects */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(212,183,125,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(29,78,137,0.3) 0%, transparent 50%)"
        }}
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      {/* Floating particles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full"
        style={{ backgroundColor: "#D4B77D", opacity: 0.4 }}
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-4 h-4 rounded-full"
        style={{ backgroundColor: "#1D4E89", opacity: 0.3 }}
        animate={{
          y: [0, 30, 0],
          x: [0, -20, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12"
          style={{ color: "#0A1A2F" }}
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Lo Que Dicen <span style={{ color: "#D4B77D" }}>Nuestros Estudiantes</span>
        </motion.h2>

        <div className="max-w-3xl mx-auto">
          {/* Container with fixed height */}
          <div className="relative" style={{ minHeight: "420px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100, rotateY: 20 }}
                animate={{ opacity: 1, x: 0, rotateY: 0 }}
                exit={{ opacity: 0, x: -100, rotateY: -20 }}
                transition={{ duration: 0.6 }}
                className="p-6 md:p-8 relative overflow-hidden rounded-xl shadow-xl absolute inset-0"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "2px solid #D4B77D",
                  boxShadow: "0 20px 40px -12px rgba(10, 26, 47, 0.2)"
                }}
              >
                {/* Large decorative quote */}
                <motion.div
                  className="absolute top-2 left-2"
                  style={{ color: "rgba(212, 183, 125, 0.15)" }}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Quote className="w-12 h-12 md:w-16 md:h-16" />
                </motion.div>

                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-24 h-24"
                  style={{
                    background: "linear-gradient(135deg, rgba(212,183,125,0.1) 0%, transparent 100%)",
                    clipPath: "polygon(100% 0, 0 0, 100% 100%)"
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Avatar with gradient border */}
                  <motion.div
                    className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold shadow-lg relative"
                    style={{
                      background: "linear-gradient(135deg, #D4B77D 0%, #1D4E89 100%)",
                      color: "#FFFFFF"
                    }}
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.6, type: "spring", bounce: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <motion.div
                      className="absolute inset-1 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "#FFFFFF" }}
                    >
                      <span style={{ 
                        background: "linear-gradient(135deg, #D4B77D 0%, #1D4E89 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent"
                      }}>
                        {testimonials[currentIndex].image}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Animated stars */}
                  <motion.div 
                    className="flex justify-center gap-1 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: 360,
                          transition: { duration: 0.3 }
                        }}
                      >
                        <Star 
                          className="w-5 h-5" 
                          style={{ fill: "#D4B77D", color: "#D4B77D" }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Testimonial text - flex-grow to push content down */}
                  <motion.div
                    className="relative mb-4 md:mb-6 flex-grow flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <p 
                      className="text-base md:text-lg text-center leading-relaxed italic relative z-10 px-2"
                      style={{ color: "#0A1A2F" }}
                    >
                      "{testimonials[currentIndex].text}"
                    </p>
                  </motion.div>

                  {/* Name and role - fixed at bottom */}
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <p 
                      className="text-lg md:text-xl font-bold mb-1"
                      style={{ color: "#0A1A2F" }}
                    >
                      {testimonials[currentIndex].name}
                    </p>
                    <p 
                      className="text-sm font-semibold"
                      style={{ color: "#D4B77D" }}
                    >
                      {testimonials[currentIndex].role}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <motion.button
              onClick={prev}
              className="p-2 md:p-3 rounded-full transition-all border-2"
              style={{
                backgroundColor: "rgba(212, 183, 125, 0.1)",
                borderColor: "#D4B77D",
                color: "#D4B77D"
              }}
              whileHover={{ 
                scale: 1.15, 
                rotate: -10,
                backgroundColor: "#D4B77D",
                color: "#FFFFFF"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>

            {/* Pagination dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="h-2 rounded-full transition-all"
                  style={{
                    width: index === currentIndex ? "32px" : "8px",
                    backgroundColor: index === currentIndex 
                      ? "#D4B77D" 
                      : "rgba(212, 183, 125, 0.3)"
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    backgroundColor: "#D4B77D"
                  }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <motion.button
              onClick={next}
              className="p-2 md:p-3 rounded-full transition-all border-2"
              style={{
                backgroundColor: "rgba(212, 183, 125, 0.1)",
                borderColor: "#D4B77D",
                color: "#D4B77D"
              }}
              whileHover={{ 
                scale: 1.15, 
                rotate: 10,
                backgroundColor: "#D4B77D",
                color: "#FFFFFF"
              }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;