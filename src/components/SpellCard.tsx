import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Spell } from "../types";
import "./SpellCard.css";

interface SpellCardProps {
  spell: Spell;
  index: number;
}

const SpellCard = ({ spell, index }: SpellCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      className={`spell-card ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: Math.min(index * 0.02, 0.5), duration: 0.35 }}
    >
      <div className="spell-card-header">
        <h3 className="spell-card-name">{spell.name}</h3>
        <span className={`spell-card-chevron ${expanded ? "open" : ""}`}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div
            className="spell-card-body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="spell-card-description">{spell.description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  );
};

export default SpellCard;
