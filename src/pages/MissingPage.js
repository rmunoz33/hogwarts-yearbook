import { useNavigate } from "react-router-dom";

const MissingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div style={{ fontFamily: "Harry Potter", fontSize: "3em" }}>
        Restricted Section!
      </div>
      <div
        style={{ fontFamily: "Harry Potter", fontSize: "2em", margin: "10%" }}
      >
        This page is out of bounds to everyone who does not wish to die a very
        painful death.
      </div>
      <div
        style={{ fontFamily: "Lumos", fontSize: "2em", cursor: "pointer" }}
        onClick={() => {
          navigate("/");
        }}
      >
        Return to Cover
      </div>
    </div>
  );
};

export default MissingPage;
