import type { Character } from "../types";
import CharacterCard from "./CharacterCard";
import "./CharacterCard.css";

interface CharacterCardGridProps {
  characters: Character[];
}

const CharacterCardGrid = ({ characters }: CharacterCardGridProps) => {
  return (
    <div className="character-grid">
      {characters.map((character, index) => (
        <CharacterCard
          key={character.id}
          character={character}
          index={index}
        />
      ))}
    </div>
  );
};

export default CharacterCardGrid;
