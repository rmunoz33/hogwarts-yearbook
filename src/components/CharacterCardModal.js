import React, { useEffect, useRef } from "react";
import {
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  makeStyles,
  Grid,
  Modal,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import parchment from "../assets/parchment.png";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "100%",
    height: "auto",
    marginBottom: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    top: theme.spacing(10),
    right: theme.spacing(55),
    color: "white",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& > div": {
      overflow: "hidden",
    },
  },
  content: {
    backgroundColor: theme.palette.background.default,
    outline: "none",
    padding: theme.spacing(2),
    maxHeight: "80vh",
    overflowY: "auto",
  },
  title: {
    backgroundImage: `url(${parchment})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    borderBottom: "5px solid black",
    padding: theme.spacing(2),
  },
}));

const CharacterCardModal = ({ open, onClose, character }) => {
  const classes = useStyles();
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      const modalElement = modalRef.current;
      if (modalElement) {
        modalElement.setAttribute("tabIndex", "0");
        modalElement.focus();
      }
    }
  }, [open]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      disablePortal
      className={classes.modal}
      ref={modalRef}
    >
      <div className={classes.content}>
        <DialogTitle disableTypography className={classes.title}>
          <Typography variant="h6" style={{ fontFamily: "Harry Potter" }}>
            {character.name}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
            className={classes.closeButton}
          >
            <Close />
          </IconButton>
        </DialogTitle>

        <DialogContent className={classes.content}>
          {/* Render the detailed character information */}
          <Grid container justifyContent="center">
            <Grid item xs={12} sm={6}>
              <img
                alt={character.name}
                src={
                  character.image !== ""
                    ? character.image
                    : require("../assets/missingphoto.png")
                }
                className={classes.image}
              />
            </Grid>
          </Grid>
          <Typography variant="subtitle1" style={{ fontFamily: "Lumos" }}>
            House: {character.house}
            <br />
            name: {character.name}
            <br />
            {/* "alternate_names": [
            "Professor Dumbledore"
        ], */}
            species: {character.species}
            <br />
            gender: {character.gender}
            <br />
            house: {character.house}
            <br />
            date of birth: {character.dateOfBirth}
            <br />
            yearOfBirth: {character.yearOfBirth}
            <br />
            wizard: {character.wizard} <br />
            ancestry:
            {character.ancestry}
            <br />
            eyeColour: {character.eyeColour}
            <br />
            hairColour: {character.hairColour}
            <br />
            {/* "wand": {
            wood: {character.wood}
            core: {character.core}
            "length": null
        }, */}
            patronus: {character.patronus}
            <br />
            hogwartsStudent: {character.hogwartsStudent}
            <br />
            hogwartsStaff: {character.hogwartsStaff}
            <br />
            actor:
            {character.actor}
            <br />
            {/* "alternate_actors": [
            "Michael Gambon"
        ], */}
            alive: {character.alive}
          </Typography>
        </DialogContent>
      </div>
    </Modal>
  );
};

export default CharacterCardModal;
