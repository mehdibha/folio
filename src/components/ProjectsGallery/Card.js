import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MuiCard from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";

const Card = ({ id, title, backgroundImage, frontImage, overview, technologies, ...rest }) => {
    const classes = useStyles();

    return (
        <MuiCard className={classes.root} elevation={10} {...rest}>
            <CardActionArea>
                <CardMedia component={motion.div} layoutId={`img-${id}`} className={classes.media} image={backgroundImage} title={title}>
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
                        {technologies.join(' · ')}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </MuiCard>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: 245,
        overflow: "visible",
        borderRadius:"10px 10px 10px 10px",
    },
    media: {
        height: 200,
        width: "100%",
        borderRadius:"10px 10px 0 0",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    frontImage: {
        objectFit: "cover",
        width: "100%",
        transform: "scale(1.2)",
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

export default Card;
