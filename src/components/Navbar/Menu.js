import React, { useState, useEffect } from "react";
import { Tab, Tabs, Button, makeStyles, withStyles, Link as MuiLink } from "@material-ui/core";
import { motion } from "framer-motion";
import { Link, Events } from "react-scroll";

const container = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
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

const smoothScrollProps = {
    spy: true,
    smooth: true,
    offset: -70,
    duration: 500,
};

const AnimatedLink = (props) => {
    return (
        <motion.div variants={button}>
            <Link {...smoothScrollProps} {...props} />
        </motion.div>
    );
};

const Menu = () => {
    const classes = useStyles();
    const [value, setValue] = useState(null);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        Events.scrollEvent.register("begin", (to, element) => {
            setIsScrolling(true);
        });

        Events.scrollEvent.register("end", (to, element) => {
            setIsScrolling(false);
        });
    });

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const spyHandleChange = (index) => {
        if (!isScrolling) {
            setValue(index);
        }
    };

    return (
        <motion.div className={classes.wrapper} variants={container} initial="hidden" animate="visible">
            <StyledTabs
                className={classes.tabs}
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
            >
                <StyledTab
                    component={AnimatedLink}
                    to="about"
                    label="About"
                    onSetActive={() => spyHandleChange(0)}
                    onSetInactive={() => spyHandleChange(null)}
                />
                <StyledTab
                    component={AnimatedLink}
                    to="experience"
                    label="Experience"
                    onSetActive={() => spyHandleChange(1)}
                />
                <StyledTab
                    component={AnimatedLink}
                    to="projects"
                    label="Projects"
                    onSetActive={() => spyHandleChange(2)}
                />
                <StyledTab
                    component={AnimatedLink}
                    to="contact"
                    label="Contact"
                    onSetActive={() => spyHandleChange(3)}
                />
            </StyledTabs>
            <motion.div variants={button}>
                <Button
                    component={MuiLink}
                    href="/resume.pdf"
                    target="_blank"
                    variant="outlined"
                    color="primary"
                    underline="none"
                >
                    Resume
                </Button>
            </motion.div>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        alignItems: "center",
    },
    tabs: {
        marginRight: theme.spacing(4),
    },
    navMenuItem: {
        marginRight: theme.spacing(1),
    },
}));

const StyledTab = withStyles((theme) => ({
    root: {
        transition:".2s",
        minWidth:120,
        "&:hover": {
            color: theme.palette.text.primary,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const StyledTabs = withStyles({
    indicator: {
        "& > span": {
            maxWidth: 20,
        },
    },
})((props) => <Tabs {...props} variant="fullWidth" TabIndicatorProps={{ children: <span /> }} />);

export default Menu;
