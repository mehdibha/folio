import React, { useEffect } from "react";
import { makeStyles, Container, Typography } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Divider from "../components/Divider";

const SectionContainer = ({ children, maxWidth, full, reverse, title, ...rest }) => {
    const titleControls = useAnimation();
    const contentControls = useAnimation();
    const [titleRef, titleInView] = useInView();
    const [contentRef, contentInView] = useInView();

    useEffect(() => {
        if (titleInView) {
            titleControls.start("visible");
        }
    }, [titleControls, titleInView]);

    useEffect(() => {
        if (contentInView) {
            contentControls.start("visible");
        }
    }, [contentControls, contentInView]);

    const classes = useStyles({ full, maxWidth });
    return (
        <Container component="section" className={classes.container} {...rest}>
            {title && (
                <motion.div
                    ref={titleRef}
                    animate={titleControls}
                    initial="hidden"
                    transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 100,
                        damping: 20,
                    }}
                    variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: reverse ? 50 : -50 },
                    }}
                    className={classes.titleContainer}
                >
                    <Divider width="40px" />
                    <Typography variant="h4" color="initial" className={classes.title}>
                        {title}
                    </Typography>
                    <Divider fullWidth />
                </motion.div>
            )}
            <motion.div
                ref={contentRef}
                animate={contentControls}
                initial="hidden"
                transition={{
                    delay: 0.5,
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    when: "beforeChildren",
                    duration: 0.5,
                    staggerChildren: 0.3,
                }}
                variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -50 },
                }}
            >
                {children}
            </motion.div>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: (props) => (props.maxWidth ? `${props.maxWidth}px` : theme.breakpoints.values["lg"]),
        padding: "80px 0",
    },
    titleContainer: {
        paddingBottom: theme.spacing(8),
        display: "flex",
        alignItems: "center",
    },
    title: {
        margin: theme.spacing(0, 4),
    },
    childrenContainer: {
        minHeight: "100%",
    },
}));

export default SectionContainer;
