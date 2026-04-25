import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { fetchSpells } from "../api";
import { useApi } from "../hooks/useApi";
import SpellCardGrid from "../components/SpellCardGrid";
import ErrorMessage from "../components/ErrorMessage";

const Spells = () => {
  const { data: spells, loading, error, execute } = useApi(fetchSpells);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!spells) return [];
    if (!search.trim()) return spells;
    const q = search.toLowerCase();
    return spells.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.description?.toLowerCase().includes(q)
    );
  }, [spells, search]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <div className="loading-text">Conjuring Spells...</div>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message="Failed to conjure spells. Your wand may need servicing." onRetry={execute} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <h1 className="page-title">Spells</h1>
        <p className="page-subtitle">
          {spells?.length} spells and incantations
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
          placeholder="Search spells by name or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <SpellCardGrid spells={filtered} />
    </motion.div>
  );
};

export default Spells;
