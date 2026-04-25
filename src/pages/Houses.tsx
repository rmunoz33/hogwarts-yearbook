import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fetchHouseMembers } from "../api";
import { useApi } from "../hooks/useApi";
import type { Character } from "../types";
import CharacterCardGrid from "../components/CharacterCardGrid";
import ErrorMessage from "../components/ErrorMessage";
import "./Houses.css";

import gryffindorColor from "../assets/house_crests/gryffindor_color.png";
import gryffindorBw from "../assets/house_crests/gryffindor_bw.png";
import hufflepuffColor from "../assets/house_crests/hufflepuff_color.png";
import hufflepuffBw from "../assets/house_crests/hufflepuff_bw.png";
import ravenclawColor from "../assets/house_crests/ravenclaw_color.png";
import ravenclawBw from "../assets/house_crests/ravenclaw_bw.png";
import slytherinColor from "../assets/house_crests/slytherin_color.png";
import slytherinBw from "../assets/house_crests/slytherin_bw.png";

interface HouseInfo {
  name: string;
  key: string;
  colorImg: string;
  bwImg: string;
  motto: string;
  color: string;
  accent: string;
}

const HOUSES: HouseInfo[] = [
  {
    name: "Gryffindor",
    key: "gryffindor",
    colorImg: gryffindorColor,
    bwImg: gryffindorBw,
    motto: "Where dwell the brave at heart",
    color: "var(--color-gryffindor)",
    accent: "var(--color-gryffindor-accent)",
  },
  {
    name: "Hufflepuff",
    key: "hufflepuff",
    colorImg: hufflepuffColor,
    bwImg: hufflepuffBw,
    motto: "Where they are just and loyal",
    color: "var(--color-hufflepuff)",
    accent: "var(--color-hufflepuff-accent)",
  },
  {
    name: "Ravenclaw",
    key: "ravenclaw",
    colorImg: ravenclawColor,
    bwImg: ravenclawBw,
    motto: "Where those of wit and learning",
    color: "var(--color-ravenclaw)",
    accent: "var(--color-ravenclaw-accent)",
  },
  {
    name: "Slytherin",
    key: "slytherin",
    colorImg: slytherinColor,
    bwImg: slytherinBw,
    motto: "Where cunning folk use any means",
    color: "var(--color-slytherin)",
    accent: "var(--color-slytherin-accent)",
  },
];

const Houses = () => {
  const [selectedHouse, setSelectedHouse] = useState<HouseInfo | null>(null);
  const { data: members, loading, error, execute } = useApi<Character[]>(fetchHouseMembers, { immediate: false });

  const handleHouseClick = useCallback(
    (house: HouseInfo) => {
      if (selectedHouse?.key === house.key) {
        setSelectedHouse(null);
      } else {
        setSelectedHouse(house);
        execute(house.key);
      }
    },
    [selectedHouse, execute]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <h1 className="page-title">Houses</h1>
        <p className="page-subtitle">Select a house to view its members</p>
      </div>

      <div className="houses-grid">
        {HOUSES.map((house) => {
          const isSelected = selectedHouse?.key === house.key;
          return (
            <motion.button
              key={house.key}
              className={`house-card ${isSelected ? "selected" : ""}`}
              onClick={() => handleHouseClick(house)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                "--house-color": house.color,
                "--house-accent": house.accent,
              } as React.CSSProperties}
            >
              <div className="house-card-glow" />
              <img
                src={isSelected ? house.colorImg : house.bwImg}
                alt={`${house.name} Crest`}
                className="house-card-crest"
              />
              <div className="house-card-name">{house.name}</div>
              <div className="house-card-motto">{house.motto}</div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selectedHouse && (
          <motion.div
            key={selectedHouse.key}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35 }}
            style={{ marginTop: "var(--space-xl)" }}
          >
            <div className="house-members-header">
              <h2 style={{ color: selectedHouse.accent }}>
                {selectedHouse.name} Members
              </h2>
              {members && (
                <span className="page-subtitle">
                  {members.length} members
                </span>
              )}
            </div>

            {error ? (
              <ErrorMessage
                message={`Failed to summon ${selectedHouse.name} members.`}
                onRetry={() => execute(selectedHouse.key)}
              />
            ) : loading ? (
              <div className="loading-container" style={{ minHeight: "30vh" }}>
                <div className="loading-spinner" />
                <div className="loading-text">
                  Summoning {selectedHouse.name}...
                </div>
              </div>
            ) : (
              members && <CharacterCardGrid characters={members} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Houses;
