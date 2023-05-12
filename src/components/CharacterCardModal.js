import React, { useEffect, useRef } from "react";
import {
  DialogTitle,
  DialogContent,
  Typography,
  IconButton,
  makeStyles,
  Grid,
  Dialog,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import parchment from "../assets/parchment.png";

const useStyles = makeStyles((theme) => ({
  image: {
    width: "200px",
    height: "auto",
    marginBottom: theme.spacing(2),
  },
  content: {
    backgroundColor: theme.palette.background.default,
    outline: "none",
    padding: theme.spacing(2),
    overflowX: "hidden", // Hide horizontal overflow
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
  subheading: {
    fontFamily: "Harry Potter",
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

  const formatDate = (oldDate) => {
    if (oldDate) {
      const [day, month, year] = oldDate.split("-");
      const date = new Date(`${month}-${day}-${year}`);
      return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      });
    }
    return "";
  };

  const characterHasWand =
    character.wand.wood !== "" &&
    character.wand.core !== "" &&
    character.wand.length;

  const formatInfo = (label, value) =>
    value !== "" ? (
      <Grid
        container
        spacing={2}
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item style={{ fontWeight: "bold" }}>
          {label}:{" "}
        </Grid>
        <Grid item>{value}</Grid>
      </Grid>
    ) : (
      <></>
    );

  return (
    <Dialog
      open={open}
      onClose={onClose}
      disablePortal
      maxWidth="sm"
      fullWidth
      ref={modalRef}
      style={{ zIndex: 2 }}
    >
      <div>
        <DialogTitle disableTypography className={classes.title}>
          <Grid
            container
            spacing={2}
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <Typography variant="h5" style={{ fontFamily: "Harry Potter" }}>
                {character.name}
              </Typography>
            </Grid>
            <Grid item>
              <IconButton
                edge="end"
                color="inherit"
                onClick={onClose}
                aria-label="close"
              >
                <Close />
              </IconButton>
            </Grid>
          </Grid>
        </DialogTitle>

        <DialogContent className={classes.content}>
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
          <div style={{ fontFamily: "Lumos", fontSize: "x-large" }}>
            {character.alternate_names.length ? (
              <>
                <div className={classes.subheading}>Alternate Names</div>
                {character.alternate_names.map((name) => (
                  <div key={name}>{name}</div>
                ))}
                <br />
              </>
            ) : (
              <></>
            )}
            {formatInfo("House", character.house)}
            {formatInfo("Species", character.species)}
            {formatInfo("Gender", character.gender)}
            {formatInfo("House", character.house)}
            {formatInfo("Date of Birth", formatDate(character.dateOfBirth))}
            {formatInfo("Wizard", character.wizard ? "Yes" : "No")}
            {formatInfo("Ancestry", character.ancestry)}
            {formatInfo("Eye Colour", character.eyeColour)}
            {formatInfo("Hair Colour", character.hairColour)}
            {characterHasWand ? (
              <>
                <br />
                <div className={classes.subheading}>Wand</div>
                <div>
                  <strong>Wood:</strong> {character.wand.wood}
                </div>
                <div>
                  <strong>Core:</strong> {character.wand.core}
                </div>
                <div>
                  <strong>Length:</strong> {character.wand.length} inches
                </div>
                <br />
              </>
            ) : (
              <></>
            )}
            {formatInfo("Patronus", character.patronus)}
            {formatInfo(
              "Hogwarts Student",
              character.hogwartsStudent ? "Yes" : "No"
            )}
            {formatInfo(
              "Hogwarts Staff",
              character.hogwartsStaff ? "Yes" : "No"
            )}
            {formatInfo("Alive", character.alive ? "Yes" : "No")}
            {formatInfo("Actor", character.actor)}
            {character.alternate_actors.length ? (
              <>
                <br />
                <div className={classes.subheading}>Alternate Actors</div>
                {character.alternate_actors.map((actor) => (
                  <div key={actor}>{actor}</div>
                ))}
              </>
            ) : (
              <></>
            )}
          </div>
        </DialogContent>
      </div>
    </Dialog>
  );
};

export default CharacterCardModal;
