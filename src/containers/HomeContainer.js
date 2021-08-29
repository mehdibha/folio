import React from "react";
import { makeStyles, Container } from "@material-ui/core";

const HomeContainer = ({ children, ...rest }) => {
    const classes = useStyles();
    return (
        <Container className={classes.container} {...rest}>
            {children}
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: "100vh",
        display:"flex",
        alignItems:"center",
        paddingTop: `calc( ${theme.spacing(4)}px + ${theme.navbarHeight} ) `,
        paddingBottom: theme.spacing(4),
        [theme.breakpoints.down('sm')]: {
            paddingTop: theme.navbarHeight,
          },
    },
}));

export default HomeContainer;
