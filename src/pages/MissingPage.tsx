import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const MissingPage = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        textAlign: "center",
        gap: "var(--space-lg)",
      }}
    >
      <h1 style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
        Restricted Section!
      </h1>
      <p style={{
        fontSize: "1.3rem",
        color: "var(--color-text-secondary)",
        maxWidth: "500px",
        lineHeight: 1.6,
      }}>
        This page is out of bounds to everyone who does not wish to die a very
        painful death.
      </p>
      <button
        onClick={() => navigate("/")}
        style={{
          marginTop: "var(--space-lg)",
          padding: "var(--space-md) var(--space-xl)",
          background: "var(--surface-card)",
          border: "var(--border-accent)",
          borderRadius: "var(--radius-md)",
          color: "var(--color-gold)",
          fontFamily: "var(--font-body)",
          fontSize: "1.1rem",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "var(--surface-card-hover)";
          e.currentTarget.style.boxShadow = "var(--glow-gold)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "var(--surface-card)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        Return to Cover
      </button>
    </motion.div>
  );
};

export default MissingPage;
