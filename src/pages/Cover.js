import { useNavigate } from "react-router-dom";
import FloatingText from "../components/FloatingTitle";

const Cover = () => {
  const navigate = useNavigate();

  const handleOnClick = () => navigate(`/students`);

  return (
    <div className="cover-container">
      <FloatingText onClick={handleOnClick} />
      <img
        alt="Hogwarts Crest"
        src={require("../assets/crest.png")}
        style={{ width: "300px", cursor: "pointer" }}
        onClick={handleOnClick}
      />
      <p
        style={{ fontFamily: "Lumos", fontSize: "2em", cursor: "pointer" }}
        onClick={handleOnClick}
      >
        Click to Enter
      </p>
    </div>
  );
};

export default Cover;
