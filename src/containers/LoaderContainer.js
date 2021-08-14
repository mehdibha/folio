import React from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const LoaderContainer = ({ children }) => {
    const classes = useStyles();
    return (
        <motion.div
            initial={{
                // opacity: 1
                y:0
            }}
            animate={{
                // opacity:0
                y:"-100vh"
            }}
            transition={{
                delay:5.2,
                duration:0.3
            }}
            className={classes.container}
            >
            <div className={classes.content}>{children} </div>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
    },
    content: {
        margin: "0 auto",
    },
}));

export default LoaderContainer;
