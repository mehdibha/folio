import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Divider from "../components/Divider";

const MainContainer = ({ children, full, title, ...rest }) => {
    const classes = useStyles({ full });
    return (
        <Container component="section" className={classes.container} maxWidth="lg" {...rest}>
            {title && (
                <div className={classes.titleContainer}>
                    <Divider className={classes.divider} width="40px" />
                    <Typography variant="h2" color="initial" className={classes.title}>
                        {title}
                    </Typography>
                    <Divider className={classes.divider} fullWidth />
                </div>
            )}
            <div>{children}</div>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        minHeight: (props) => (props.full ? "100vh" : `calc( 100vh - ${theme.navbarHeight} )`),
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        overflow: "hidden",
        flexBasis: "auto",
    },
    titleContainer: {
        display: "flex",
        justifyContent:'center',
        alignItems:'center',
        marginBottom:theme.spacing(4)
    },
    divider:{
        backgroundColor:theme.palette.primary.main
    },
    title:{
        margin:theme.spacing(0,4)
    }
}));

export default MainContainer;
