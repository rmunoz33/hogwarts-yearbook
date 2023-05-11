import {
  CircularProgress,
  Grid,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import { fetchHouseMembers } from "../HPAPI";
import CharacterCardGrid from "../components/CharacterCardGrid";

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
  houseImage: {
    height: "200px",
    cursor: "pointer",
  },
}));

const Houses = () => {
  const [selectedHouse, setSelectedHouse] = useState("");
  const [houseMembers, setHouseMembers] = useState([]);
  const [loading, setLoading] = useState(false);

  const classes = useStyles();

  useEffect(() => {
    sessionStorage.setItem("page", "houses");
  }, []);

  const getHouseImageSource = (house) => {
    return selectedHouse === house
      ? require(`../assets/house_crests/${house}_color.png`)
      : require(`../assets/house_crests/${house}_bw.png`);
  };

  const handleHouseImageClick = (house) => {
    if (house === selectedHouse) {
      setSelectedHouse("");
      setHouseMembers([]);
    } else {
      setSelectedHouse(house);
      setLoading(true);

      const fetchData = async () => {
        try {
          const data = await fetchHouseMembers(house);
          setHouseMembers(data);
          setLoading(false);
        } catch (error) {
          setLoading(false);
        }
      };

      fetchData();
    }
  };

  return (
    <div>
      <Typography variant="h3" component="h1" className={classes.heading}>
        Houses
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <img
            alt="Gryffindor Crest"
            src={getHouseImageSource("gryffindor")}
            className={classes.houseImage}
            onClick={() => handleHouseImageClick("gryffindor")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <img
            alt="Hufflepuff Crest"
            src={getHouseImageSource("hufflepuff")}
            className={classes.houseImage}
            onClick={() => handleHouseImageClick("hufflepuff")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <img
            alt="Ravenclaw Crest"
            src={getHouseImageSource("ravenclaw")}
            className={classes.houseImage}
            onClick={() => handleHouseImageClick("ravenclaw")}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <img
            alt="Slytherin Crest"
            src={getHouseImageSource("slytherin")}
            className={classes.houseImage}
            onClick={() => handleHouseImageClick("slytherin")}
          />
        </Grid>
      </Grid>
      {loading ? (
        <CircularProgress
          size="4em"
          style={{ color: "black", marginTop: "40px" }}
        />
      ) : (
        <CharacterCardGrid characters={houseMembers} />
      )}
    </div>
  );
};

export default Houses;
