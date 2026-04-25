import { type SyntheticEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import type { Character } from "../types";
import missingPhoto from "../assets/missingphoto.png";
import "./CharacterCardModal.css";

interface InfoRowProps {
  label: string;
  value: string;
}

const InfoRow = ({ label, value }: InfoRowProps) => {
  if (!value || value === "") return null;
  return (
    <div className="modal-info-row">
      <span className="modal-info-label">{label}</span>
      <span className="modal-info-value">{value}</span>
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

interface CharacterCardModalProps {
  open: boolean;
  onClose: () => void;
  character: Character;
}

const CharacterCardModal = ({ open, onClose, character }: CharacterCardModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = missingPhoto;
  };

  const hasWand =
    character.wand?.wood && character.wand?.core && character.wand?.length;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h2>{character.name}</h2>
              <button
                className="modal-close"
                onClick={onClose}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="modal-image-container">
              <img
                src={character.image || missingPhoto}
                alt={character.name}
                className="modal-image"
                onError={handleImageError}
              />
            </div>

            <div className="modal-body">
              {character.alternate_names?.length > 0 && (
                <div className="modal-section">
                  <div className="modal-section-title">Also Known As</div>
                  <div className="modal-alt-names">
                    {character.alternate_names.map((name) => (
                      <span key={name} className="modal-alt-name-tag">{name}</span>
                    ))}
                  </div>
                </div>
              )}

              <InfoRow label="House" value={character.house} />
              <InfoRow label="Species" value={character.species} />
              <InfoRow label="Gender" value={character.gender} />
              <InfoRow label="Date of Birth" value={formatDate(character.dateOfBirth)} />
              <InfoRow label="Ancestry" value={character.ancestry} />
              <InfoRow label="Eye Colour" value={character.eyeColour} />
              <InfoRow label="Hair Colour" value={character.hairColour} />
              <InfoRow label="Patronus" value={character.patronus} />
              <InfoRow label="Wizard" value={character.wizard ? "Yes" : "No"} />
              <InfoRow label="Alive" value={character.alive ? "Yes" : "No"} />

              {hasWand && (
                <div className="modal-section">
                  <div className="modal-section-title">Wand</div>
                  <InfoRow label="Wood" value={character.wand.wood} />
                  <InfoRow label="Core" value={character.wand.core} />
                  <InfoRow label="Length" value={`${character.wand.length} inches`} />
                </div>
              )}

              <InfoRow label="Actor" value={character.actor} />
              {character.alternate_actors?.length > 0 && (
                <div className="modal-section">
                  <div className="modal-section-title">Alternate Actors</div>
                  {character.alternate_actors.map((actor) => (
                    <div key={actor} className="modal-info-value" style={{ padding: "2px 0" }}>
                      {actor}
                    </div>
                  ))}
                </div>
              )}

              <Link
                to={`/character/${character.id}`}
                className="modal-full-profile"
                onClick={onClose}
              >
                View Full Profile
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ width: 16, height: 16 }}>
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CharacterCardModal;
