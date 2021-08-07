import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Menu = () => {
  const classes = useStyles();

  return (
    <ButtonGroup
      aria-label="outlined primary button group"
      className={classes.navMenu}
    >
      <Button
        component={NavLink}
        to="/"
        variant="text"
        exact
        className={classes.navMenuItem}
        activeClassName={classes.active}
      >
        About
      </Button>
      <Button
        component={NavLink}
        to="/"
        variant="text"
        exact
        className={classes.navMenuItem}
        activeClassName={classes.active}
      >
        Experience
      </Button>
      <Button
        component={NavLink}
        to="/"
        variant="text"
        exact
        className={classes.navMenuItem}
        activeClassName={classes.active}
      >
        Projects
      </Button>
      <Button
        component={NavLink}
        to="/"
        variant="text"
        exact
        className={classes.navMenuItem}
        activeClassName={classes.active}
      >
        Contact
      </Button>
      <Button
        component={NavLink}
        to="/"
        variant="text"
        exact
        className={classes.navMenuItem}
        activeClassName={classes.active}
      >
        Resume
      </Button>
    </ButtonGroup>
  );
};

const useStyles = makeStyles((theme) => ({
  navMenuItem: {
    "&:hover": {
      color: "white",
    },
  },
  active: {
    fontWeight: 700,
    color: "white",
    "&:hover": {
      color: "#fff",
    },
  },
}));

export default Menu;
