import { Card, CardContent, Typography, makeStyles } from "@material-ui/core";
import { useState } from "react";
import CharacterCardModal from "./CharacterCardModal";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    padding: theme.spacing(2),
    background: "transparent",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(2),
    transition: "opacity 0.3s ease-in-out",
    opacity: 1,
    "&:hover": {
      opacity: 0.7,
    },
  },
}));

const CharacterCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  const classes = useStyles();
  const character = props.data;

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Card
        key={character.id}
        className={classes.card}
        onClick={handleOpenModal}
      >
        <CardContent>
          <img
            alt={character.name}
            src={
              character.image !== ""
                ? character.image
                : require("../assets/missingphoto.png")
            }
            className={classes.image}
          />
          <Typography
            variant="h5"
            component="h2"
            style={{ fontFamily: "Lumos" }}
          >
            {character.name}
          </Typography>
        </CardContent>
      </Card>
      <CharacterCardModal
        key={props.newKey}
        open={modalOpen}
        onClose={handleCloseModal}
        character={character}
      />
    </>
  );
};

export default CharacterCard;
