import { makeStyles } from "@material-ui/core";
import React from "react";

const CenterContainer = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.content}>{children} </div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
    },
    content: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
    },
}));

export default CenterContainer;
