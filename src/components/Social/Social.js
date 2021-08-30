import React from "react";
import { Link, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion";
import { LinkedIn, Instagram, GitHub, Email } from "@material-ui/icons";
import IconBtn from "../IconBtn";

const Social = ({ mobile }) => {
    const classes = useStyles();
    if (mobile) {
        return (
            <div className={classes.mobileWrapper}>
                <IconBtn icon={GitHub} m={1} href="https://github.com/Mehdi-BHA" />
                <IconBtn icon={Instagram} m={1} href="https://www.instagram.com/mehdibha/" />
                <IconBtn icon={LinkedIn} m={1} href="https://www.linkedin.com/in/mehdi-ben-hadj-ali-6a7435131/" />
                <IconBtn icon={Email} m={1} href="mailto:mehdibenhadjali@gmail.com" />
            </div>
        );
    } else {
        return (
            <motion.div
                initial={{ y: "100vh" }}
                animate={{ y: 0 }}
                transition={{ delay: 4 }}
                className={classes.wrapper}
            >
                <IconBtn icon={GitHub} m={1} href="https://github.com/Mehdi-BHA" />
                <IconBtn icon={Instagram} m={1} href="https://www.instagram.com/mehdibha/" />
                <IconBtn icon={LinkedIn} m={1} href="https://www.linkedin.com/in/mehdi-ben-hadj-ali-6a7435131/" />
                <IconBtn icon={Email} m={1} href="mailto:mehdibenhadjali@gmail.com" />
            </motion.div>
        );
    }
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        bottom: 0,
        right: 0,
        padding: theme.spacing(2),
        zIndex: 100
    },
    mobileWrapper: {
        display: "flex",
    },
}));

export default Social;
