import { useEffect, useState } from "react";
import { fetchSpells } from "../HPAPI";
import { Typography, makeStyles, CircularProgress } from "@material-ui/core";
import SpellCardGrid from "../components/SpellCardGrid";

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

const Spells = (props) => {
  const [loading, setLoading] = useState(false);
  const [spells, setSpells] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    sessionStorage.setItem("page", "spells");
    props.handleDrawerClick();

    const fetchData = async () => {
      setLoading(true);
      try {
        const data = await fetchSpells();
        setSpells(data);
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
        Spells
      </Typography>
      <SpellCardGrid spells={spells} />
    </div>
  );
};

export default Spells;
