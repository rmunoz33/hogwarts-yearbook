import { type SyntheticEvent, useState } from "react";
import { motion } from "framer-motion";
import type { Character } from "../types";
import CharacterCardModal from "./CharacterCardModal";
import missingPhoto from "../assets/missingphoto.png";
import "./CharacterCard.css";

interface CharacterCardProps {
  character: Character;
  index: number;
}

const CharacterCard = ({ character, index }: CharacterCardProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const houseClass = character.house ? character.house.toLowerCase() : "";

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = missingPhoto;
  };

  return (
    <>
      <motion.article
        className="character-card"
        onClick={() => setModalOpen(true)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: Math.min(index * 0.03, 0.6), duration: 0.4 }}
      >
        <div className="character-card-image-container">
          <img
            src={character.image || missingPhoto}
            alt={character.name}
            className="character-card-image"
            loading="lazy"
            onError={handleImageError}
          />
          {character.house && (
            <span className={`character-card-house-badge ${houseClass}`}>
              {character.house}
            </span>
          )}
        </div>
        <div className="character-card-info">
          <div className="character-card-name">{character.name}</div>
          {character.ancestry && (
            <div className="character-card-detail">{character.ancestry}</div>
          )}
        </div>
      </motion.article>

      <CharacterCardModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        character={character}
      />
    </>
  );
};

export default CharacterCard;
