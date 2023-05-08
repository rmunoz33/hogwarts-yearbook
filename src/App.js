import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cover from "./pages/Cover";
import MissingPage from "./pages/MissingPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Cover />} />
          <Route path="/missing" element={<MissingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
