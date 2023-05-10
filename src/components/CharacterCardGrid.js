import React from "react";
import { Grid } from "@material-ui/core";
import CharacterCard from "./CharacterCard";

const CharacterCardGrid = ({ characters }) => {
  return (
    <Grid container spacing={2}>
      {characters.map((character, index) => (
        <Grid item key={character.id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <CharacterCard newKey={index} data={character} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CharacterCardGrid;
