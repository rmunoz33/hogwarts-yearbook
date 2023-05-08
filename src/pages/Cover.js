import { useNavigate } from "react-router-dom";

const Cover = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <p
        style={{
          fontFamily: "Harry Potter",
          fontSize: "3em",
          cursor: "pointer",
        }}
        onClick={() => {
          navigate("/missing");
        }}
      >
        Hogwarts Yearbook
      </p>
      <img
        alt="Hogwarts Crest"
        src={require("../assets/crest.png")}
        style={{ width: "300px", cursor: "pointer" }}
        onClick={() => {
          navigate("/missing");
        }}
      />
      <p
        style={{ fontFamily: "Lumos", fontSize: "2em", cursor: "pointer" }}
        onClick={() => {
          navigate("/missing");
        }}
      >
        Click to Enter
      </p>
    </div>
  );
};

export default Cover;
