import React from "react";
import { makeStyles } from "@material-ui/core";

const Divider = ({ fullWidth,width, ...rest }) => {
    const classes = useStyles({ fullWidth, width });
    return (
        <div className={classes.root} {...rest}>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: "inline",
        width: (props) => (props.fullWidth ? "100%" : props.width),
        height: "1px",
        backgroundColor: "red"
    },
}));

export default Divider;
