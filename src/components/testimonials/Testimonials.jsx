import React, { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Quote, Volume2, Pause } from "lucide-react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const audioRef = useRef(null);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const testimonials = [
    {
      name: "Antonieta",
      role: "Madre de Familia",
      text: "Me emocioné tanto aprendiendo inglés que ahora le enseño a mi hija. Ver su progreso y el mío juntas ha sido una experiencia maravillosa.",
      rating: 5,
      image: "AN",
      audio: "/src/resources/anto.ogg"
    },
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

  const handleAudioToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  
  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Reset audio when testimonial changes
  useEffect(() => {
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [currentIndex]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #F5F7FA 0%, #E8EEF5 50%, #F5F7FA 100%)"
      }}
    >
      {/* Enhanced animated background effects */}
      <motion.div
        className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full blur-3xl opacity-20"
        style={{ backgroundColor: "#D4B77D" }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-10 right-10 w-[350px] h-[350px] rounded-full blur-3xl opacity-15"
        style={{ backgroundColor: "#1D4E89" }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, -25, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "#D4B77D" }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />

      {/* Floating particles with enhanced design */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            backgroundColor: i % 2 === 0 ? "#D4B77D" : "#1D4E89",
            opacity: 0.3,
            top: `${20 + i * 15}%`,
            left: `${10 + i * 12}%`
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: -40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4"
            style={{ color: "#0A1A2F" }}
          >
            Lo Que Dicen <span style={{ color: "#D4B77D" }}>Nuestros Estudiantes</span>
          </h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "rgba(10, 26, 47, 0.6)" }}>
            Historias reales de personas que transformaron su vida con inglés
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Container with fixed height */}
          <div className="relative" style={{ minHeight: "480px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
                className="p-8 md:p-10 relative overflow-hidden rounded-3xl shadow-2xl absolute inset-0"
                style={{
                  background: "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)",
                  border: "2px solid rgba(212, 183, 125, 0.4)",
                  boxShadow: "0 25px 50px -12px rgba(10, 26, 47, 0.25), 0 0 0 1px rgba(212, 183, 125, 0.1)",
                  backdropFilter: "blur(20px)"
                }}
              >
                {/* Large decorative quote with gradient */}
                <motion.div
                  className="absolute top-4 left-4"
                  initial={{ scale: 0, rotate: -180, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                >
                  <Quote
                    className="w-16 h-16 md:w-20 md:h-20"
                    style={{
                      stroke: "url(#quoteGradient)",
                      fill: "rgba(212, 183, 125, 0.1)"
                    }}
                  />
                  <svg width="0" height="0">
                    <defs>
                      <linearGradient id="quoteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D4B77D" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#1D4E89" stopOpacity="0.2" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Animated corner accent with enhanced design */}
                <motion.div
                  className="absolute top-0 right-0 w-32 h-32 opacity-40"
                  style={{
                    background: "radial-gradient(circle at top right, rgba(212,183,125,0.3) 0%, transparent 70%)"
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.4, scale: 1 }}
                  transition={{ duration: 1, delay: 0.3 }}
                />

                {/* Bottom corner accent */}
                <motion.div
                  className="absolute bottom-0 left-0 w-28 h-28 opacity-30"
                  style={{
                    background: "radial-gradient(circle at bottom left, rgba(29,78,137,0.2) 0%, transparent 70%)"
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 0.3, scale: 1 }}
                  transition={{ duration: 1, delay: 0.4 }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Enhanced Avatar with multiple layers */}
                  <motion.div
                    className="relative mx-auto mb-6"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                  >
                    {/* Outer glow ring */}
                    <motion.div
                      className="absolute inset-0 w-20 h-20 md:w-24 md:h-24 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, rgba(212, 183, 125, 0.3) 0%, rgba(29, 78, 137, 0.3) 100%)",
                        filter: "blur(8px)"
                      }}
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />

                    {/* Avatar container */}
                    <motion.div
                      className="relative w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center text-2xl md:text-3xl font-black shadow-xl"
                      style={{
                        background: "linear-gradient(135deg, #D4B77D 0%, #1D4E89 100%)",
                        padding: "3px"
                      }}
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        className="w-full h-full rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "#FFFFFF" }}
                      >
                        <span style={{
                          background: "linear-gradient(135deg, #D4B77D 0%, #1D4E89 100%)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text"
                        }}>
                          {testimonials[currentIndex].image}
                        </span>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Enhanced Animated stars */}
                  <motion.div
                    className="flex justify-center gap-1.5 mb-5"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="relative"
                        initial={{ scale: 0, rotate: -180, opacity: 0 }}
                        animate={{ scale: 1, rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + i * 0.08, type: "spring", bounce: 0.6 }}
                        whileHover={{
                          scale: 1.4,
                          rotate: 360,
                          transition: { duration: 0.4 }
                        }}
                      >
                        {/* Star glow effect */}
                        <motion.div
                          className="absolute inset-0"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.2
                          }}
                        >
                          <Star
                            className="w-6 h-6"
                            style={{ fill: "#D4B77D", color: "#D4B77D", filter: "blur(4px)", opacity: 0.5 }}
                          />
                        </motion.div>
                        {/* Main star */}
                        <Star
                          className="w-6 h-6 relative"
                          style={{ fill: "#D4B77D", color: "#D4B77D" }}
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Enhanced Audio player if available */}
                  {testimonials[currentIndex].audio && (
                    <motion.div
                      className="flex justify-center mb-6"
                      initial={{ opacity: 0, scale: 0.8, y: -10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.4, type: "spring" }}
                    >
                      <audio
                        ref={audioRef}
                        src={testimonials[currentIndex].audio}
                        onEnded={() => setIsPlaying(false)}
                      />
                      <motion.button
                        onClick={handleAudioToggle}
                        className="relative flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all shadow-xl overflow-hidden group"
                        style={{
                          background: isPlaying
                            ? "linear-gradient(135deg, #1D4E89 0%, #0D2847 100%)"
                            : "linear-gradient(135deg, #D4B77D 0%, #B8965F 100%)",
                          color: "#FFFFFF",
                          border: "2px solid rgba(255, 255, 255, 0.3)"
                        }}
                        whileHover={{
                          scale: 1.08,
                          boxShadow: isPlaying
                            ? "0 12px 30px rgba(29, 78, 137, 0.5)"
                            : "0 12px 30px rgba(212, 183, 125, 0.5)"
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {/* Ripple effect on hover */}
                        <motion.div
                          className="absolute inset-0 opacity-0 group-hover:opacity-100"
                          style={{
                            background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)"
                          }}
                          initial={false}
                          animate={{
                            scale: [1, 1.3, 1],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />

                        {/* Animated background pulse when playing */}
                        {isPlaying && (
                          <>
                            <motion.div
                              className="absolute inset-0"
                              style={{
                                background: "radial-gradient(circle, rgba(255,255,255,0.2) 0%, transparent 70%)"
                              }}
                              animate={{
                                scale: [1, 1.6, 1],
                                opacity: [0.6, 0, 0.6]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                            {/* Secondary pulse */}
                            <motion.div
                              className="absolute inset-0"
                              style={{
                                background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)"
                              }}
                              animate={{
                                scale: [1, 1.4, 1],
                                opacity: [0.4, 0, 0.4]
                              }}
                              transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5
                              }}
                            />
                          </>
                        )}

                        {/* Icon with animation */}
                        <motion.div
                          className="relative z-10"
                          animate={isPlaying ? { scale: [1, 1.15, 1] } : {}}
                          transition={{
                            duration: 0.6,
                            repeat: isPlaying ? Infinity : 0,
                            ease: "easeInOut"
                          }}
                        >
                          {isPlaying ? (
                            <Pause className="w-6 h-6" fill="currentColor" />
                          ) : (
                            <Volume2 className="w-6 h-6" />
                          )}
                        </motion.div>

                        <span className="text-base md:text-lg relative z-10 font-bold">
                          {isPlaying ? "Pausar Audio" : "Escuchar Testimonio"}
                        </span>

                        {/* Enhanced sound waves animation when playing */}
                        {isPlaying && (
                          <div className="flex gap-1.5 items-center ml-2 relative z-10">
                            {[0, 1, 2, 3].map((i) => (
                              <motion.div
                                key={i}
                                className="w-1 bg-white rounded-full shadow-sm"
                                style={{ height: "14px" }}
                                animate={{
                                  height: ["14px", "24px", "14px"],
                                  scaleY: [1, 1.5, 1]
                                }}
                                transition={{
                                  duration: 0.6,
                                  repeat: Infinity,
                                  delay: i * 0.12,
                                  ease: "easeInOut"
                                }}
                              />
                            ))}
                          </div>
                        )}
                      </motion.button>
                    </motion.div>
                  )}

                  {/* Enhanced Testimonial text */}
                  <motion.div
                    className="relative mb-6 md:mb-8 flex-grow flex items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.5 }}
                  >
                    <div className="relative w-full">
                      {/* Decorative quotation background */}
                      <motion.div
                        className="absolute -top-6 -left-2 text-8xl opacity-5 pointer-events-none select-none"
                        style={{ color: "#D4B77D", fontFamily: "Georgia, serif" }}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 0.05, scale: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                      >
                        "
                      </motion.div>

                      <p
                        className="text-lg md:text-xl text-center leading-relaxed italic relative z-10 px-4 font-medium"
                        style={{ color: "#0A1A2F" }}
                      >
                        "{testimonials[currentIndex].text}"
                      </p>
                    </div>
                  </motion.div>

                  {/* Enhanced Name and role section */}
                  <motion.div
                    className="text-center relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                  >
                    {/* Decorative line above name */}
                    <motion.div
                      className="w-16 h-1 mx-auto mb-4 rounded-full"
                      style={{
                        background: "linear-gradient(90deg, transparent 0%, #D4B77D 50%, transparent 100%)"
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                    />

                    <p
                      className="text-xl md:text-2xl font-black mb-2"
                      style={{
                        background: "linear-gradient(135deg, #0A1A2F 0%, #1D4E89 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text"
                      }}
                    >
                      {testimonials[currentIndex].name}
                    </p>

                    <div className="flex items-center justify-center gap-2">
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#D4B77D" }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                      <p
                        className="text-sm md:text-base font-bold tracking-wide uppercase"
                        style={{ color: "#D4B77D" }}
                      >
                        {testimonials[currentIndex].role}
                      </p>
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: "#D4B77D" }}
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: 1
                        }}
                      />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Enhanced Navigation controls */}
          <motion.div
            className="flex items-center justify-center gap-6 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {/* Previous button */}
            <motion.button
              onClick={prev}
              className="relative p-3 md:p-4 rounded-2xl transition-all border-2 shadow-lg overflow-hidden group"
              style={{
                backgroundColor: "rgba(212, 183, 125, 0.1)",
                borderColor: "rgba(212, 183, 125, 0.4)",
                color: "#D4B77D"
              }}
              whileHover={{
                scale: 1.15,
                backgroundColor: "#D4B77D",
                borderColor: "#D4B77D",
                color: "#FFFFFF",
                boxShadow: "0 8px 20px rgba(212, 183, 125, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
                }}
                initial={false}
                animate={{
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
            </motion.button>

            {/* Enhanced Pagination dots */}
            <div className="flex gap-3 items-center">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="relative rounded-full transition-all group"
                  style={{
                    height: index === currentIndex ? "12px" : "10px",
                    width: index === currentIndex ? "40px" : "10px",
                    backgroundColor: index === currentIndex
                      ? "#D4B77D"
                      : "rgba(212, 183, 125, 0.25)"
                  }}
                  whileHover={{
                    scale: 1.3,
                    backgroundColor: "#D4B77D"
                  }}
                  whileTap={{ scale: 0.85 }}
                  animate={
                    index === currentIndex
                      ? {
                          scale: [1, 1.1, 1],
                        }
                      : {}
                  }
                  transition={
                    index === currentIndex
                      ? {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      : {}
                  }
                >
                  {/* Glow effect for active dot */}
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundColor: "#D4B77D",
                        filter: "blur(6px)",
                        opacity: 0.5
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Next button */}
            <motion.button
              onClick={next}
              className="relative p-3 md:p-4 rounded-2xl transition-all border-2 shadow-lg overflow-hidden group"
              style={{
                backgroundColor: "rgba(212, 183, 125, 0.1)",
                borderColor: "rgba(212, 183, 125, 0.4)",
                color: "#D4B77D"
              }}
              whileHover={{
                scale: 1.15,
                backgroundColor: "#D4B77D",
                borderColor: "#D4B77D",
                color: "#FFFFFF",
                boxShadow: "0 8px 20px rgba(212, 183, 125, 0.4)"
              }}
              whileTap={{ scale: 0.9 }}
            >
              {/* Hover glow effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                style={{
                  background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
                }}
                initial={false}
                animate={{
                  scale: [1, 1.3, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <ChevronRight className="w-6 h-6 md:w-7 md:h-7 relative z-10" />
            </motion.button>
          </motion.div>
        </div>
      </div>
   
    </section>
  );
};

export default TestimonialsSection;