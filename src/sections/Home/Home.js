import React from "react";
import HomeContainer from "../../containers/HomeContainer";
import { Typography, Button } from "@material-ui/core";
import { motion } from "framer-motion";
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
    hidden: { opacity: 0, x: -10 },
    visible: {
        x: 0,
        opacity: 1,
    },
};

const Home = () => {
    return (
        <HomeContainer>
            <motion.div variants={container} initial="hidden" animate="visible">
                <Typography
                    component={motion.p}
                    variants={typo}
                    color="primary"
                    variant="h5"
                    style={{ marginBottom: "6px" }}
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
                <motion.p variants={typo}>
                    <VideoLogo style={{ marginBottom: "0px" }} />
                </motion.p>
                <Typography
                    component={motion.p}
                    variants={typo}
                    variant="h2"
                    color="secondary"
                    style={{ marginBottom: "16px" }}
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
                <Button component={motion.p} variants={typo} variant="outlined" color="primary" size="large">
                    Get in touch
                </Button>
            </motion.div>
        </HomeContainer>
    );
};

export default Home;
