import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";

const HamburgerIcon = ({isOpen,...rest}) => {
    const controls = useAnimation()
    const classes = useStyles();
    useEffect(() => {
        if (isOpen) {
            controls.start("animate")
        } else {
            controls.start("initial")
        }
    }, [isOpen,controls]);
    return (
        <motion.div className={classes.container} {...rest}>
            <motion.div className={`${classes.line} ${classes.line1}`} variants={{initial:{rotate:0,y:0}, animate:{rotate:45,y:9}}} animate={controls}></motion.div>
            <motion.div className={`${classes.line} ${classes.line2}`} variants={{initial:{x:0,opacity:1}, animate:{x:250,opacity:0}}} animate={controls}></motion.div>
            <motion.div className={`${classes.line} ${classes.line3}`} variants={{initial:{rotate:0,y:0}, animate:{rotate:-45,y:-9}}} animate={controls}></motion.div>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        overflow:'hidden',
        display:"flex",
        flexDirection:"column",
        alignItems:"flex-end",
        cursor:"pointer",
        padding:"2px"
    },
    line: {
        height: "3px",
        backgroundColor: theme.palette.text.secondary,
    },
    line1: {
        width: "35px",
        marginBottom: "7px",
    },
    line2: {
        width: "25px",
        marginBottom: "7px",
    },
    line3: {
        width: "35px",
    },
}));

export default HamburgerIcon;
