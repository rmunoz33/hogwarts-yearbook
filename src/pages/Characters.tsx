import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { fetchAllCharacters } from "../api";
import { useApi } from "../hooks/useApi";
import CharacterCardGrid from "../components/CharacterCardGrid";
import ErrorMessage from "../components/ErrorMessage";

const Characters = () => {
  const { data: characters, loading, error, execute } = useApi(fetchAllCharacters);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!characters) return [];
    if (!search.trim()) return characters;
    const q = search.toLowerCase();
    return characters.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.house?.toLowerCase().includes(q) ||
        c.species?.toLowerCase().includes(q) ||
        c.ancestry?.toLowerCase().includes(q)
    );
  }, [characters, search]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <div className="loading-text">Summoning All Characters...</div>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message="Failed to summon characters. The Ministry may be interfering." onRetry={execute} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <h1 className="page-title">All Characters</h1>
        <p className="page-subtitle">
          {characters?.length} characters from the wizarding world
        </p>
      </div>

      <div className="search-container">
        <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
        <input
          type="text"
          className="search-input"
          placeholder="Search by name, house, species, or ancestry..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <CharacterCardGrid characters={filtered} />
    </motion.div>
  );
};

export default Characters;
