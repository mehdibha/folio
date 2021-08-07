import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.footer}>
      <Typography variant="body2" color="initial">
        © 2021 Mehdi BHA, Inc
      </Typography>
    </Container>
  );
};

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
  },
}));

export default Footer;
