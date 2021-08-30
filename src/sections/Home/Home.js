import React from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";
import VideoLogo from "../../components/VideoLogo";

const container = {
    hidden: {},
    visible: {
        transition: {
            delayChildren: 1.3,
            staggerChildren: 0.5,
        },
    },
};

const typo = {
    hidden: { opacity: 0, x: 0 },
    visible: {
        x: 0,
        opacity: 1,
    },
};

const AnimatedLink = (props) => (
    <motion.div variants={props.variants}>
        <Link spy smooth offset={0} duration={500} {...props} />
    </motion.div>
);

const Home = () => {
    const classes = useStyles();
    return (
        <HomeContainer id="home">
            <motion.div variants={container} initial="hidden" animate="visible">
                <Typography
                    component={motion.p}
                    variants={typo}
                    color="primary"
                    variant="h5"
                    style={{ marginBottom: "0px" }}
                >
                    Hi there
                    <motion.div
                        style={{ display: "inline-block" }}
                        animate={{ rotate: [50, 90, 50] }}
                        transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
                    >
                        👋
                    </motion.div>
                    , i'm
                </Typography>
                <motion.div variants={typo}>
                    <VideoLogo />
                </motion.div>
                <Typography
                    component={motion.p}
                    variants={typo}
                    variant="h2"
                    color="secondary"
                    className={classes.subTitle}
                >
                    I make awesome websites.
                </Typography>
                <Typography
                    component={motion.p}
                    variants={typo}
                    variant="body2"
                    color="initial"
                    style={{ marginBottom: "0" }}
                >
                    Full stack web developer, UI/UX designer, freelancer, Github addict.
                </Typography>
                <Typography
                    component={motion.p}
                    variants={typo}
                    variant="body1"
                    color="initial"
                    style={{ marginBottom: "30px" }}
                >
                    Based in sousse, Tunisia.
                </Typography>
                <Button
                    component={AnimatedLink}
                    to="contact"
                    variants={typo}
                    variant="outlined"
                    color="primary"
                    size="large"
                >
                    Get in touch
                </Button>
            </motion.div>
        </HomeContainer>
    );
};

const useStyles = makeStyles((theme) => ({
    subTitle: {
        marginBottom: "16px",
        fontSize: "75px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "45px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "35px",
        },
    },
}));

export default Home;
