import type { Spell } from "../types";
import SpellCard from "./SpellCard";
import "./SpellCard.css";

interface SpellCardGridProps {
  spells: Spell[];
}

const SpellCardGrid = ({ spells }: SpellCardGridProps) => {
  return (
    <div className="spell-grid">
      {spells.map((spell, index) => (
        <SpellCard key={spell.id} spell={spell} index={index} />
      ))}
    </div>
  );
};

export default SpellCardGrid;
