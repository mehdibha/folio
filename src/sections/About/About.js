import React from "react";
import { Grid, Typography, makeStyles, Box } from "@material-ui/core";
import SectionContainer from "../../containers/SectionContainer";
import Skills from "../../components/Skills";
import Avatar from "../../components/Avatar";
import { AboutDesc } from "../../data";

const About = () => {
    const classes = useStyles();
    return (
        <SectionContainer title="About" maxWidth="1000">
            <Grid container spacing={6} alignItems="center">
                <Grid
                    item
                    xs={12}
                    md={7}
                    className={classes.gridItemWrapper}
                    style={{ flexDirection: "column", alignItems: "space-around" }}
                >
                    <Box mb={4}>
                        <Typography variant="body1">{AboutDesc}</Typography>
                    </Box>
                    <Skills />
                </Grid>
                <Grid item xs={12} md={5} className={classes.gridItemWrapper}>
                    <Avatar />
                </Grid>
            </Grid>
        </SectionContainer>
    );
};

const useStyles = makeStyles((theme) => ({
    gridItemWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default About;
