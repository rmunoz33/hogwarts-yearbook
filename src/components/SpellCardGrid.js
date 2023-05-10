import React from "react";
import { Grid } from "@material-ui/core";
import SpellCard from "./SpellCard";

const SpellCardGrid = ({ spells }) => {
  return (
    <Grid container spacing={2}>
      {spells.map((spell, index) => (
        <Grid item key={spell.id} xs={12} sm={6} md={4} lg={3} xl={2}>
          <SpellCard newKey={index} data={spell} />
        </Grid>
      ))}
    </Grid>
  );
};

export default SpellCardGrid;
