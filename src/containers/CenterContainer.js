import React from "react";
import { makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";

const CenterContainer = ({ children }) => {
    const classes = useStyles();
    return (
        <motion.div
            initial={{
                opacity: 1
            }}
            animate={{
                opacity:0
            }}
            transition={{
                delay:4.8,
                duration:0.5
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

export default CenterContainer;
