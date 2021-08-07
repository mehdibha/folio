import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const Background3d = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <iframe
        title="background-3d"
        src="https://my.spline.design/portfolio3d-e46fff518bcfbd179d63b9b992b5881e/"
        frameborder="0"
        width="100%"
        height="100%"
      ></iframe>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    position: "relative",
    height: "100vh",
    width: "100%",
  },
  iframe: {
    position: "absolute",
    top: 0,
    right: 0,
    width: "100%",
  },
}));

export default Background3d;
