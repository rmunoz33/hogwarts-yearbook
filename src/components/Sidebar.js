import React, { useEffect, useState } from "react";
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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: "5px solid black",
    backgroundImage: `url(${parchment})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
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

const Sidebar = (props) => {
  const classes = useStyles();

  const [selectedPage, setSelectedPage] = useState("students");

  useEffect(() => {
    const previouslySelectedPage = sessionStorage.getItem("page");
    if (previouslySelectedPage) setSelectedPage(previouslySelectedPage);
  }, []);

  const handleOnClick = (page) => setSelectedPage(page);

  return (
    <Drawer
      className={classes.drawer}
      variant="temporary"
      anchor="left"
      classes={{ paper: classes.drawerPaper }}
      open={props.isOpen}
      onClose={() => props.setIsOpen(false)}
      ModalProps={{
        slotProps: { backdrop: { invisible: true } },
      }}
    >
      <List>
        <ListItem
          button
          component={Link}
          to="/"
          onClick={() => handleOnClick("")}
          selected={selectedPage === ""}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Home />
          </ListItemIcon>
          <ListItemText
            primary="Home"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/students"
          onClick={() => handleOnClick("students")}
          selected={selectedPage === "students"}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <School />
          </ListItemIcon>
          <ListItemText
            primary="Students"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/staff"
          onClick={() => handleOnClick("staff")}
          selected={selectedPage === "staff"}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Work />
          </ListItemIcon>
          <ListItemText
            primary="Staff"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/houses"
          onClick={() => handleOnClick("houses")}
          selected={selectedPage === "houses"}
        >
          <ListItemIcon className={classes.listItemIcon}>
            <Security />
          </ListItemIcon>
          <ListItemText
            primary="Houses"
            classes={{ primary: classes.listItemText }}
          />
        </ListItem>
        <ListItem
          button
          component={Link}
          to="/spells"
          onClick={() => handleOnClick("spells")}
          selected={selectedPage === "spells"}
        >
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
