import React from "react";
import {
    makeStyles,
    Card as MuiCard,
    CardContent,
    CardMedia,
    Typography,
    IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { motion } from "framer-motion";

const ExtendedCard = ({ id, title, backgroundImage, frontImage, overview, technologies, handleClose, ...rest }) => {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <MuiCard className={classes.root} elevation={0} component={motion.div} layoutId={id}>
                <div style={{ position: "relative" }}>
                    <div>
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
                            <Typography
                                variant="h5"
                                className={classes.title}
                                component={motion.h5}
                                layoutId={`title-${id}`}
                            >
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
                    </div>
                    <IconButton className={classes.closeBtn} onClick={()=>handleClose()}>
                        <Close  />
                    </IconButton>
                </div>
            </MuiCard>
            <motion.div
                className={classes.container}
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                intial="hidden"
                animate="visible"
                exit="hidden"
                onClick={() => handleClose()}
            ></motion.div>
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: "10000",
    },
    container: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.1)",
        backdropFilter: "blur(1px)",
        opacity: 0,
    },
    root: {
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        margin: "0 auto",
        marginTop: `calc( ${theme.navbarHeight} + 20px )`,
        width: "600px",
        height: "600px",
        zIndex: "10000",
        boxShadow: theme.shadows[10],
    },
    media: {
        height: "300px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        overflow: "hidden",
    },
    frontImage: {
        objectFit: "cover",
        width: "90%",
        height: "100%",
        objectPosition: "center top",
        boxShadow: theme.shadows[8],
        marginTop: "10px",
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
    closeBtn: {
        position: "absolute",
        top: 0,
        right: 0,
        margin:"2px",
        color:"white"
    },
}));

export default ExtendedCard;
