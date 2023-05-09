import React from "react";
import {
  makeStyles,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { Home, School, Work, HomeWork, FlashOn } from "@material-ui/icons";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
  },
  toolbar: theme.mixins.toolbar,
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
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Cover" />
        </ListItem>
        <ListItem button component={Link} to="/students">
          <ListItemIcon>
            <School />
          </ListItemIcon>
          <ListItemText primary="Students" />
        </ListItem>
        <ListItem button component={Link} to="/staff">
          <ListItemIcon>
            <Work />
          </ListItemIcon>
          <ListItemText primary="Staff" />
        </ListItem>
        <ListItem button component={Link} to="/houses">
          <ListItemIcon>
            <HomeWork />
          </ListItemIcon>
          <ListItemText primary="Houses" />
        </ListItem>
        <ListItem button component={Link} to="/spells">
          <ListItemIcon>
            <FlashOn />
          </ListItemIcon>
          <ListItemText primary="Spells" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
