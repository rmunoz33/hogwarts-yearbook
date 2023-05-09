import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FloatingText = () => {
  const navigate = useNavigate();

  const animationVariants = {
    start: { x: 0, y: 0 },
    floating: {
      x: [0, 50, 100, 50, -50, -100, 0],
      y: [0, -50, 0, 50, 50, 0, 0],
      transition: { duration: 8, ease: "linear" },
    },
  };

  return (
    <motion.p
      style={{
        fontFamily: "Harry Potter",
        fontSize: "3em",
        cursor: "pointer",
      }}
      variants={animationVariants}
      animate="floating"
      onClick={() => {
        navigate("/students");
      }}
    >
      Hogwarts Yearbook
    </motion.p>
  );
};

export default FloatingText;
