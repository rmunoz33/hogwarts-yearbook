import { Routes, Route, useLocation } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import "./App.css";
import Cover from "./pages/Cover";
import MissingPage from "./pages/MissingPage";
import Sidebar from "./components/Sidebar";
import Staff from "./pages/Staff";
import Students from "./pages/Students";
import Spells from "./pages/Spells";
import Houses from "./pages/Houses";
import Characters from "./pages/Characters";
import CharacterDetail from "./pages/CharacterDetail";
import AudioButton from "./components/AudioButton";
import MenuToggleButton from "./components/MenuToggleButton";

const App = () => {
  const location = useLocation();
  const isCover = location.pathname === "/";
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app">
      <div className="fab-container">
        <AudioButton />
      </div>

      {!isCover && (
        <>
          <MenuToggleButton onClick={() => setSidebarOpen(true)} />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </>
      )}

      <div className={isCover ? "cover-layout" : "main-content"}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Cover />} />
            <Route path="/students" element={<Students />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/houses" element={<Houses />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/character/:id" element={<CharacterDetail />} />
            <Route path="/spells" element={<Spells />} />
            <Route path="*" element={<MissingPage />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default App;
