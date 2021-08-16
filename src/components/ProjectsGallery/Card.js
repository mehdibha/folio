import React from "react";
import {
    makeStyles,
    Card as MuiCard,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Icon,
    Box,
} from "@material-ui/core";
import { ArrowDownward } from "@material-ui/icons";
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
        y: 0,
        opacity: 1,
    },
    initial: {
        opacity: 0,
        y: 50,
    },
};

const Card = ({ id, title, backgroundImage, frontImage, overview, technologies, onClick,...rest }) => {
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
            layoutId={id}
            onMouseEnter={handleMouseEnterControls}
            onMouseLeave={handleMouseLeaveControls}
            onClick={() => onClick()}
            transition={{type:"spring",stiffness:80,damping:20,delay:0.45*id}}
            {...rest}
        >
            <CardActionArea
                // component={motion.div}
                // animate={controls}
                // transition={{ delay: 0.05, type: "spring", stiffness: 180, damping: 20 }}
                // variants={{ hover: { scale: 1.1 }, initial: { scale: 1 } }}
            >
                <CardMedia
                    component={motion.div}
                    layoutId={`img-container-${id}`}
                    className={classes.media}
                    image={backgroundImage}
                    title={title}
                >
                    <motion.img
                        layoutId={`front-img-${id}`}
                        className={classes.frontImage}
                        src={frontImage}
                        alt={title}
                    />
                </CardMedia>
                <CardContent>
                    <Typography variant="h5" className={classes.title} component={motion.h5} layoutId={`title-${id}`}>
                        {title}
                    </Typography>
                    <Typography
                        variant="body2"
                        className={classes.overview}
                        component={motion.h5}
                        layoutId={`overview-${id}`}
                    >
                        {overview}
                    </Typography>
                    <Typography
                        variant="body2"
                        className={classes.technologies}
                        component={motion.h5}
                        layoutId={`technologies-${id}`}
                    >
                        {technologies.join(" · ")}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <motion.div
                transition={{ delay: 0.15 }}
                variants={hoverVariants}
                animate={controls}
                className={classes.hover}
            >
                <Box
                    display="flex"
                    alignItems="center"
                    justofyContent="center"
                    transition={{ delay: 0.3 }}
                    component={motion.div}
                    variants={titleVariants}
                    animate={controls}
                >
                    <Box mr={1}>
                        <Typography variant="h4">View project </Typography>
                    </Box>
                    <Icon
                        component={motion.div}
                        transition={{ delay: 0.3, repeat: Infinity, duration: 1, repeatType: "reverse" }}
                        variants={{ hover: { y: 7 }, intial: { y: -2 } }}
                        animate="hover"
                    >
                        <ArrowDownward />
                    </Icon>
                </Box>
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
        backgroundColor: "rgba(0,0,0,0.97)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
}));

export default Card;
