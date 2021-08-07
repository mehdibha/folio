import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const MainContainer = ({ away, children, ...rest }) => {
  const classes = useStyles({ away });
  return (
    <Box className={classes.container} {...rest}>
      {children}
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: (props) =>
      `calc( 100vh - ${props.away ? theme.paddingMainContainer : "0px"} )`,
    paddingTop: (props) => (props.away ? theme.paddingMainContainer : 0),
    backgroundColor: theme.palette.background,
  },
}));

export default MainContainer;
