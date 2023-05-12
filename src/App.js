import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Cover from "./pages/Cover";
import MissingPage from "./pages/MissingPage";
import Sidebar from "./components/Sidebar";
import Staff from "./pages/Staff";
import Students from "./pages/Students";
import Spells from "./pages/Spells";
import Houses from "./pages/Houses";
import AudioButton from "./components/AudioButton";
import { useState } from "react";
import MenuToggleButton from "./components/MenuToggleButton";

const App = () => {
  const location = useLocation();
  const shouldShowSidebar = location.pathname !== "/";

  const [drawerIsOpen, setDrawerIsOpen] = useState(true);

  const handleDrawerClick = () => setDrawerIsOpen(!drawerIsOpen);

  return (
    <div className="App">
      {shouldShowSidebar && (
        <MenuToggleButton handleDrawerClick={handleDrawerClick} />
      )}
      <AudioButton />
      <div
        className="page-container"
        style={{ display: shouldShowSidebar && "flex" }}
      >
        <div style={{ width: drawerIsOpen ? "200px" : "" }}>
          {shouldShowSidebar && (
            <Sidebar isOpen={drawerIsOpen} setIsOpen={setDrawerIsOpen} />
          )}
        </div>
        <div className={shouldShowSidebar ? "page-content" : "cover-content"}>
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/missing" element={<MissingPage />} />
            <Route
              path="/students"
              element={<Students handleDrawerClick={handleDrawerClick} />}
            />
            <Route
              path="/staff"
              element={<Staff handleDrawerClick={handleDrawerClick} />}
            />
            <Route
              path="/houses"
              element={<Houses handleDrawerClick={handleDrawerClick} />}
            />
            <Route
              path="/spells"
              element={<Spells handleDrawerClick={handleDrawerClick} />}
            />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
