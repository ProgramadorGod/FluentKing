import { motion } from "framer-motion";
import { Users, Video, Calendar, Award, Briefcase, GraduationCap } from "lucide-react";

const iconMap = { Users, Video, Calendar, Award, Briefcase, GraduationCap };

const FeatureCard = ({ iconName, title, description }) => {
  const Icon = iconMap[iconName];

  return (
    <motion.div
      whileHover={{ y: -15, scale: 1.05, rotateY: 5, transition: { duration: 0.3 } }}
      className="premium-card p-6 md:p-8 text-center space-y-4 relative overflow-hidden group cursor-pointer"
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent -translate-x-full group-hover:translate-x-full"
        transition={{ duration: 0.8 }}
      />

      <motion.div
        className="text-accent mx-auto w-fit relative z-10"
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="w-10 h-10 md:w-12 md:h-12" />
      </motion.div>

      <h3 className="text-xl md:text-2xl font-bold relative z-10">{title}</h3>
      <p className="text-foreground/80 relative z-10">{description}</p>

      <motion.div
        className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-bl-full"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default FeatureCard;
