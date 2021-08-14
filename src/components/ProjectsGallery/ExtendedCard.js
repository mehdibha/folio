import React from "react";
import { makeStyles, Card as MuiCard, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { motion } from "framer-motion";

const ExtendedCard = ({ id, title, backgroundImage, frontImage, overview, technologies, ...rest }) => {
    const classes = useStyles();

    return (
        <MuiCard className={classes.root} elevation={10} {...rest}>
            <CardActionArea>
                <CardMedia
                    component={motion.div}
                    layoutId={`img-${id}`}
                    className={classes.media}
                    image={backgroundImage}
                    title={title}
                >
                    <img className={classes.frontImage} src={frontImage} alt={title} />
                </CardMedia>
                <CardContent>
                    <Typography variant="h5" className={classes.title}>
                        {title}
                    </Typography>
                    <Typography variant="body2" className={classes.overview}>
                        {overview}
                    </Typography>
                    <Typography variant="body2" className={classes.technologies}>
                        {/* {technologies.join(" · ")} */}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </MuiCard>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        margin: "0 auto",
        marginTop: "50px",
        maxWidth: "600px",
        height: "600px",
        boxShadow: theme.shadows[5],
        borderRadius: "11px",
        overflow: "visible",
        zIndex: "10000",
    },
    media: {
        height: "100%",
        width: "100%",
        borderRadius: "10px 10px 0 0",
    },
    frontImage: {
        objectFit: "cover",
        width: "100%",
        height: "100%",
        transform: "scale(1.3)",
    },
    title: {
        color: "rgb(30,30,30)",
        fontSize: "20px",
        fontWeight: 700,
        marginBottom: theme.spacing(1),
    },
    overview: {
        color: "rgb(30,30,30)",
        fontSize: "14px",
        marginBottom: theme.spacing(1),
    },
    technologies: {
        color: "rgb(120,120,120)",
        fontSize: "14px",
    },
}));

export default ExtendedCard;
