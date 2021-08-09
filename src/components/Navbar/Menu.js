import React, { useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
import { Tab, Tabs } from "@material-ui/core";

const container = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0,
            staggerChildren: 1,
        },
    },
};

const button = {
    hidden: { opacity: 0, y: -5 },
    visible: {
        y: 0,
        opacity: 1,
    },
};

const Menu = () => {
    const classes = useStyles();
    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <motion.div className={classes.wrapper} variants={container} initial="hidden" animate="visible">
        <StyledTabs
            value={value}
            indicatorColor="primary"
            textColor="primary"
            onChange={handleChange}
            aria-label="disabled tabs example"
        >
            <StyledTab component={motion.div} variants={button} label="About" />
            <StyledTab component={motion.div} variants={button} label="Experience" />
            <StyledTab component={motion.div} variants={button} label="Projects" />
            <StyledTab component={motion.div} variants={button} label="Contact" />
            <Button
                component={motion.button}
                variant="outlined"
                color="primary"
                exact
                className={classes.navMenuItem}
                activeClassName={classes.active}
            >
                Resume
            </Button>
        </StyledTabs>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
    },
    navMenuItem: {
        marginRight: theme.spacing(1),
    },
}));

const StyledTab = withStyles((theme) => ({
    root: {
      minWidth: 100,
      marginRight:theme.spacing(1)
    },
  }))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
    indicator: {
      '& > span': {
        maxWidth: 20,
      },
    },
  })((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export default Menu;
