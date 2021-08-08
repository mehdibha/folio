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
        width: "100%",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    content: {
        margin: "0 auto",
    },
}));

export default CenterContainer;
