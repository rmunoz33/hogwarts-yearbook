import React from "react";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Home, School, Work, Security, FlashOn } from "@material-ui/icons";
import { Link } from "react-router-dom";
import parchment from "../assets/parchment.png";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    borderRight: "5px solid black", // Add a black border
    backgroundImage: `url(${parchment})`, // Add the URL of your image
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  toolbar: theme.mixins.toolbar,
  listItemIcon: {
    display: "flex",
    justifyContent: "center",
    color: "black",
  },
  listItemText: {
    fontFamily: "Harry Potter",
    fontSize: "2em",
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <Drawer
      className={classes.drawer}
      variant="permanent"
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon className={classes.listItemIcon}>
            <Home />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem button component={Link} to="/missing">
          <ListItemIcon className={classes.listItemIcon}>
            <School />
          </ListItemIcon>
          <ListItemText
            primary="Students"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem button component={Link} to="/staff">
          <ListItemIcon className={classes.listItemIcon}>
            <Work />
          </ListItemIcon>
          <ListItemText
            primary="Staff"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem button component={Link} to="/houses">
          <ListItemIcon className={classes.listItemIcon}>
            <Security />
          </ListItemIcon>
          <ListItemText
            primary="Houses"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem button component={Link} to="/spells">
          <ListItemIcon className={classes.listItemIcon}>
            <FlashOn />
          </ListItemIcon>
          <ListItemText
            primary="Spells"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
