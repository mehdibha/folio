import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "./Menu";

const Navbar = () => {
  const classes = useStyles();
  const [scroll, setScroll] = useState(false);
  const handleNav = () => setScroll(window.scrollY > 0);
  window.addEventListener("scroll", handleNav);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      className={classes.navbar}
      component="nav"
    >
      <Toolbar>
        <Logo />
        <Menu />
      </Toolbar>
    </AppBar>
  );
};

const useStyles = makeStyles((theme) => ({
  navbar: (props) => ({
    padding: theme.spacing(0, 3),
    backgroundColor: "rgb(20,20,20)",
    transition: ".4s",
  }),
}));

export default Navbar;
