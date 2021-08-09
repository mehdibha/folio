import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "./Menu";
import { motion } from "framer-motion";

const Navbar = () => {
    const [scroll, setScroll] = useState(false);
    const classes = useStyles({ scroll });
    const handleNav = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleNav);

    return (
        <motion.div
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 260,
                damping: 20,
            }}
        >
            <AppBar position="fixed" elevation={0} className={classes.navbar} component="nav">
                <Toolbar className={classes.toolbar}>
                    <Logo className={classes.logo} />
                    <Menu />
                </Toolbar>
            </AppBar>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    logo: {
        width: "150px",
    },
    navbar: {
        padding: theme.spacing(0, 3),
        backgroundColor: theme.palette.background.default,
        transition: ".4s",
        boxShadow: props => props.scroll ? theme.shadows[10] : theme.shadows[0],
    },
    toolbar: {
        height: (props) => (props.scroll ? "70px" : "100px"),
        justifyContent: "space-between",
        transition: ".4s",
    },
}));

export default Navbar;
