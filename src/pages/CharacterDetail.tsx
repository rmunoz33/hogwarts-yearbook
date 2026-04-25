import { type SyntheticEvent, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fetchCharacterById } from "../api";
import { useApi } from "../hooks/useApi";
import type { Character } from "../types";
import ErrorMessage from "../components/ErrorMessage";
import missingPhoto from "../assets/missingphoto.png";
import "./CharacterDetail.css";

const InfoRow = ({ label, value }: { label: string; value: string }) => {
  if (!value || value === "") return null;
  return (
    <div className="detail-info-row">
      <span className="detail-info-label">{label}</span>
      <span className="detail-info-value">{value}</span>
    </div>
  );
};

const formatDate = (dateStr: string | null): string => {
  if (!dateStr) return "";
  const [day, month, year] = dateStr.split("-");
  const date = new Date(`${month}-${day}-${year}`);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const CharacterDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const fetchFn = useCallback(() => {
    if (!id) return Promise.resolve([]);
    return fetchCharacterById(id);
  }, [id]);

  const { data, loading, error, execute } = useApi<Character[]>(fetchFn);

  const character = data?.[0];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <div className="loading-text">Revealing Character...</div>
      </div>
    );
  }

  if (error || !character) {
    return (
      <ErrorMessage
        message="Could not find this character. They may be using a Disillusionment Charm."
        onRetry={execute}
      />
    );
  }

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = missingPhoto;
  };

  const hasWand = character.wand?.wood && character.wand?.core && character.wand?.length;
  const houseClass = character.house ? character.house.toLowerCase() : "";

  return (
    <motion.div
      className="character-detail"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <button className="detail-back" onClick={() => navigate(-1)}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back
      </button>

      <div className="detail-layout">
        <div className="detail-portrait">
          <img
            src={character.image || missingPhoto}
            alt={character.name}
            className="detail-image"
            onError={handleImageError}
          />
          {character.house && (
            <span className={`detail-house-badge ${houseClass}`}>
              {character.house}
            </span>
          )}
        </div>

        <div className="detail-content">
          <h1 className="detail-name">{character.name}</h1>

          {character.alternate_names?.length > 0 && (
            <div className="detail-section">
              <div className="detail-alt-names">
                {character.alternate_names.map((name) => (
                  <span key={name} className="detail-alt-tag">{name}</span>
                ))}
              </div>
            </div>
          )}

          <div className="detail-section">
            <h3 className="detail-section-title">Details</h3>
            <InfoRow label="Species" value={character.species} />
            <InfoRow label="Gender" value={character.gender} />
            <InfoRow label="Date of Birth" value={formatDate(character.dateOfBirth)} />
            <InfoRow label="Ancestry" value={character.ancestry} />
            <InfoRow label="Eye Colour" value={character.eyeColour} />
            <InfoRow label="Hair Colour" value={character.hairColour} />
            <InfoRow label="Patronus" value={character.patronus} />
            <InfoRow label="Wizard" value={character.wizard ? "Yes" : "No"} />
            <InfoRow label="Alive" value={character.alive ? "Yes" : "No"} />
          </div>

          {hasWand && (
            <div className="detail-section">
              <h3 className="detail-section-title">Wand</h3>
              <InfoRow label="Wood" value={character.wand.wood} />
              <InfoRow label="Core" value={character.wand.core} />
              <InfoRow label="Length" value={`${character.wand.length} inches`} />
            </div>
          )}

          <div className="detail-section">
            <h3 className="detail-section-title">Portrayed By</h3>
            <InfoRow label="Actor" value={character.actor} />
            {character.alternate_actors?.length > 0 &&
              character.alternate_actors.map((actor) => (
                <InfoRow key={actor} label="Also" value={actor} />
              ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CharacterDetail;
