import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VideoMask from "../../assets/images/VideoMask";

const VideoLogo = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper} {...props}>
            <VideoMask className={classes.mask} />
            <video autoPlay muted loop preload="auto" className={classes.video}>
                <source src="https://d33wubrfki0l68.cloudfront.net/ab4c4ea31f1543825102ebf15a35080cdc1397ce/b8c4f/static/images/frontpage/hero/gradient.mp4" />
            </video>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        overflow:"hidden",
        position: "relative",
        width: "300px",
        height: "68px",
        [theme.breakpoints.down("xs")]: {
            width: "230px",
            height: "53px",
        },
    },
    mask: {
        zIndex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        width: "300px",
        [theme.breakpoints.down("xs")]: {
            width: "230px",
            height: "52px",
        },
    },
    video: {
        zIndex: 0,
        position: "absolute",
        top: 0,
        left: "1px",
        right: "1px",
        width: "298px",
        height: "68px",
        [theme.breakpoints.down("xs")]: {
            width: "228px",
            height: "52px",
        },
    },
}));

export default VideoLogo;
