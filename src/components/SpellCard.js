import { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { ExpandMore, ExpandLess } from "@material-ui/icons";

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
}));

const CharacterCard = (props) => {
  const [expanded, setExpanded] = useState(false);

  const classes = useStyles();
  const spell = props.data;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card key={spell.id} className={classes.card} onClick={handleExpandClick}>
        <CardContent>
          <Typography
            variant="h5"
            component="h2"
            style={{ fontFamily: "Harry Potter" }}
          >
            {spell.name}
          </Typography>
        </CardContent>
        <CardActions>
          {!expanded ? (
            <ExpandMore
              expand={expanded}
              aria-expanded={expanded}
              aria-label="show more"
            />
          ) : (
            <ExpandLess
              expand={expanded}
              aria-expanded={expanded}
              aria-label="show more"
            />
          )}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent style={{ fontFamily: "Lumos" }}>
            {spell.description}
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
};

export default CharacterCard;
