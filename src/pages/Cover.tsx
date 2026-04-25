import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import crest from "../assets/crest.png";
import "./Cover.css";

const Cover = () => {
  const navigate = useNavigate();
  const enter = () => navigate("/students");

  return (
    <motion.div
      className="cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="cover-particles" aria-hidden="true">
        {Array.from({ length: 20 }, (_, i) => (
          <span key={i} className="cover-particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }} />
        ))}
      </div>

      <div className="cover-content" onClick={enter}>
        <motion.div
          className="cover-vignette"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1.5 }}
        />

        <motion.h1
          className="cover-title"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Hogwarts
        </motion.h1>

        <motion.div
          className="cover-crest"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <img src={crest} alt="Hogwarts Crest" />
          <div className="cover-crest-glow" />
        </motion.div>

        <motion.h2
          className="cover-subtitle"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Yearbook
        </motion.h2>

        <motion.p
          className="cover-enter"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          Click anywhere to enter
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Cover;
