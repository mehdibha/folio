import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import VideoMask from "../../assets/images/VideoMask";

const VideoLogo = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper} {...props}>
            <VideoMask className={classes.mask} />
            <video autoPlay muted loop preload className={classes.video}>
                <source src="https://d33wubrfki0l68.cloudfront.net/ab4c4ea31f1543825102ebf15a35080cdc1397ce/b8c4f/static/images/frontpage/hero/gradient.mp4" />
            </video>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: "relative",
        width: "300px",
        height:"68px"
    },
    mask: {
        position: "absolute",
        top: 0,
        left: 0,
        zIndex:1,
        width: "100%",
    },
    video: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height:"100%",
        zIndex:0
    },
}));

export default VideoLogo;
