import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Cover from "./pages/Cover";
import MissingPage from "./pages/MissingPage";
import Sidebar from "./components/Sidebar";
import Staff from "./pages/Staff";
import Students from "./pages/Students";
import Spells from "./pages/Spells";

const App = () => {
  const location = useLocation();
  const shouldShowSidebar = location.pathname !== "/";

  return (
    <div className="App">
      <div
        className="page-container"
        style={{ display: shouldShowSidebar && "flex" }}
      >
        <div className="sidebar">{shouldShowSidebar && <Sidebar />}</div>
        <div className={shouldShowSidebar ? "page-content" : "cover-content"}>
          <Routes>
            <Route path="/" element={<Cover />} />
            <Route path="/missing" element={<MissingPage />} />
            <Route path="/students" element={<Students />} />
            <Route path="/staff" element={<Staff />} />
            <Route path="/houses" element={<MissingPage />} />
            <Route path="/spells" element={<Spells />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
