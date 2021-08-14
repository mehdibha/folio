import React from "react";
import { Container, Typography, makeStyles, Divider, useTheme, Box } from "@material-ui/core";

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    return (
        <Container >
            <Divider style={{ backgroundColor: theme.palette.primary.main }} />
            <Box className={classes.footer}>
                <Typography variant="body2" color="initial">
                    © 2021 Mehdi BHA, Inc
                </Typography>
            </Box>
        </Container>
    );
};

const useStyles = makeStyles((theme) => ({
    footer: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(6),
    },
}));

export default Footer;
