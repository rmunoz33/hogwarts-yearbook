import React, { useState, useEffect } from "react";
import { fetchStaff } from "../HPAPI";
import CharacterCardGrid from "../components/CharacterCardGrid";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    fontFamily: "Harry Potter",
  },
}));

const Staff = () => {
  const [staff, setStaff] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStaff();
        console.log(data);
        setStaff(data);
      } catch (error) {
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Typography variant="h3" component="h1" className={classes.heading}>
        Staff
      </Typography>
      <CharacterCardGrid characters={staff} />
    </div>
  );
};

export default Staff;
