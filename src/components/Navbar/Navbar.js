import React, { useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Logo from "./Logo";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "./Menu";
import { motion } from "framer-motion";

const Navbar = () => {
    const theme = useTheme();
    const [scroll, setScroll] = useState(false);
    const classes = useStyles({ scroll });
    const handleNav = () => setScroll(window.scrollY > 30);
    window.addEventListener("scroll", handleNav);

    const appbarVariants = {
        initial: { height: 100, boxShadow: theme.shadows[0] },
        scrolled: { height: 70, boxShadow: theme.shadows[10] },
    };

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
                <Toolbar
                    className={classes.toolbar}
                    component={motion.div}
                    variants={appbarVariants}
                    animate={scroll ? "scrolled" : "initial"}
                    transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                    }}
                >
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
        backgroundColor: theme.palette.background.default,
    },
    toolbar: {
        justifyContent: "space-between",

    },
}));

export default Navbar;
