import React from "react";
import { makeStyles, Card as MuiCard, CardActionArea, CardContent, CardMedia, Typography } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";

const hoverVariants = {
    hover: {
        opacity: 1,
    },
    initial: {
        opacity: 0,
    },
};

const titleVariants = {
    hover: {
        y:0,
        opacity:1
    },
    initial: {
        opacity:0,
        y: 50,
    },
};

const Card = ({ id, title, backgroundImage, frontImage, overview, technologies, ...rest }) => {
    const classes = useStyles();
    const controls = useAnimation();
    const handleMouseEnterControls = () => {
        controls.start("hover");
    };
    const handleMouseLeaveControls = () => {
        controls.start("initial");
    };
    controls.start("initial");
    return (
        <MuiCard
            className={classes.root}
            elevation={10}
            component={motion.div}
            onMouseEnter={handleMouseEnterControls}
            onMouseLeave={handleMouseLeaveControls}
            {...rest}
        >
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
                        {technologies.join(" · ")}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <motion.div
                // transition={{ delay: 0.1 * k }}
                variants={hoverVariants}
                animate={controls}
                className={classes.hover}
            >
                <Typography
                    variant="h4"
                    transition={{delay:0.2}}
                    component={motion.h4}
                    variants={titleVariants}
                    animate={controls}
                >
                    View project
                </Typography>
            </motion.div>
        </MuiCard>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        position: "relative",
        height: 400,
        overflow: "hidden",
        cursor: "pointer",
    },
    media: {
        height: 200,
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    frontImage: {
        objectFit: "cover",
        width: "100%",
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
    hover: {
        position: "absolute",
        top: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default Card;
