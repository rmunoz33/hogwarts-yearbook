import { useNavigate } from "react-router-dom";
import FloatingText from "../components/FloatingTitle";

const Cover = () => {
  const navigate = useNavigate();

  return (
    <div className="cover-container">
      <FloatingText />
      <img
        alt="Hogwarts Crest"
        src={require("../assets/crest.png")}
        style={{ width: "300px", cursor: "pointer" }}
        onClick={() => {
          navigate("/students");
        }}
      />
      <p
        style={{ fontFamily: "Lumos", fontSize: "2em", cursor: "pointer" }}
        onClick={() => {
          navigate("/students");
        }}
      >
        Click to Enter
      </p>
    </div>
  );
};

export default Cover;
