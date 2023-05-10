import React, { useState, useEffect } from "react";
import { fetchStaff } from "../HPAPI";
import CharacterCardGrid from "../components/CharacterCardGrid";
import { Typography, makeStyles, CircularProgress } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(2),
    fontFamily: "Harry Potter",
  },
  loadingSpinner: {
    position: "fixed",
    top: 0,
    left: 200,
    right: 0,
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const Staff = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchStaff();
        console.log(data);
        setStaff(data);
        setLoading(false);
      } catch (error) {
        // Handle error if needed
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <div className={classes.loadingSpinner}>
      <CircularProgress size="4em" style={{ color: "black" }} />
    </div>
  ) : (
    <div>
      <Typography variant="h3" component="h1" className={classes.heading}>
        Staff
      </Typography>
      <CharacterCardGrid characters={staff} />
    </div>
  );
};

export default Staff;
