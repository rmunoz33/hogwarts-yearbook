import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { fetchStudents } from "../api";
import { useApi } from "../hooks/useApi";
import CharacterCardGrid from "../components/CharacterCardGrid";
import ErrorMessage from "../components/ErrorMessage";

const Students = () => {
  const { data: students, loading, error, execute } = useApi(fetchStudents);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!students) return [];
    if (!search.trim()) return students;
    const q = search.toLowerCase();
    return students.filter(
      (s) =>
        s.name.toLowerCase().includes(q) ||
        s.house?.toLowerCase().includes(q) ||
        s.ancestry?.toLowerCase().includes(q)
    );
  }, [students, search]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner" />
        <div className="loading-text">Summoning Students...</div>
      </div>
    );
  }

  if (error) {
    return <ErrorMessage message="Failed to summon students. The owls may be delayed." onRetry={execute} />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="page-header">
        <h1 className="page-title">Students</h1>
        <p className="page-subtitle">
          {students?.length} witches and wizards enrolled
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
          placeholder="Search by name, house, or ancestry..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <CharacterCardGrid characters={filtered} />
    </motion.div>
  );
};

export default Students;
