import React, { useState, useEffect } from "react";
import { Tab, Tabs, Button, makeStyles, withStyles, Hidden } from "@material-ui/core";
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

const AnimatedLink = (props) => (
    <motion.div variants={props.variants}>
        <Link {...props} />
    </motion.div>
);

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
                    variants={button}
                    to="about"
                    label="About"
                    {...smoothScrollProps}
                    onSetActive={() => spyHandleChange(0)}
                    onSetInactive={()=> spyHandleChange(null)}
                />
                <StyledTab
                    component={AnimatedLink}
                    variants={button}
                    to="experience"
                    label="Experience"
                    {...smoothScrollProps}
                    onSetActive={() => spyHandleChange(1)}
                />
                <StyledTab
                    component={AnimatedLink}
                    variants={button}
                    to="projects"
                    label="Projects"
                    {...smoothScrollProps}
                    onSetActive={() => spyHandleChange(2)}
                />
                <StyledTab
                    component={AnimatedLink}
                    variants={button}
                    to="contact"
                    label="Contact"
                    {...smoothScrollProps}
                    onSetActive={() => spyHandleChange(3)}
                />
            </StyledTabs>
            <motion.div variants={button}>
                <Button
                    component={motion.button}
                    variants={button}
                    variant="outlined"
                    color="primary"
                    exact
                    className={classes.navMenuItem}
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
        // minWidth: 100,
        // marginRight: theme.spacing(1),
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
