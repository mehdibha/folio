import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const MainContainer = ({ away, children, ...rest }) => {
  const classes = useStyles({ away });
  return (
    <Container
      component="section"
      className={classes.container}
      maxWidth="lg"
      {...rest}
    >
      <div>{children}</div>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    overflow: "hidden",
    flexBasis:'auto',
  },
}));

export default MainContainer;
