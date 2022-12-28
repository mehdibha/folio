import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const VideoLogo = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper} {...props}>
      <Typography variant="h3" className={classes.name_typo}>
        <span className={classes.span_name}>Ihtisham</span> Khattak
      </Typography>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  wrapper: {
    overflow: "hidden",
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
  name_typo: {
    fontWeight: "bold",
    marginTop: 15,
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
  span_name: {
    color: "#F7F7F7",
    [theme.breakpoints.down("xs")]: {
      fontSize: 25,
    },
  },
}));

export default VideoLogo;
