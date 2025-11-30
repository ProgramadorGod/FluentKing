import React from "react";
import { motion } from "framer-motion";

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-4 p-6 rounded-xl cursor-pointer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{
        backgroundColor: "rgba(29, 78, 137, 0.1)", // Royal Sapphire / transparent
        border: "2px solid #D4B77D", // Champagne Gold
      }}
    >
      <div
        className="p-4 rounded-full border-2 flex items-center justify-center"
        style={{
          backgroundColor: "rgba(212, 183, 125, 0.15)", // gold transparent
          borderColor: "#D4B77D",
        }}
      >
        <Icon className="w-10 h-10 text-[#D4B77D]" />
      </div>
      <h3 className="text-xl font-semibold" style={{ color: "#F5F7FA" }}>
        {title}
      </h3>
      <p className="text-center" style={{ color: "rgba(245, 247, 250, 0.8)" }}>
        {description}
      </p>
    </motion.div>
  );
};

export default FeatureCard;
