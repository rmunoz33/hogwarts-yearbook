import React, { useState, useEffect } from "react";
import { fetchStudents } from "../HPAPI";
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

const Students = (props) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    sessionStorage.setItem("page", "students");
    props.handleDrawerClick();

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchStudents();
        setStudents(data);
        setLoading(false);
      } catch (error) {
        // Handle error if needed
        setLoading(false);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return loading ? (
    <div className={classes.loadingSpinner}>
      <CircularProgress size="4em" style={{ color: "black" }} />
    </div>
  ) : (
    <div>
      <Typography variant="h3" component="h1" className={classes.heading}>
        Students
      </Typography>
      <CharacterCardGrid characters={students} />
    </div>
  );
};

export default Students;
