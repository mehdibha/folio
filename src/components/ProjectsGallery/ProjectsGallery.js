import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Grid, makeStyles } from "@material-ui/core";
import Card from "./Card";
import ExtendedCard from "./ExtendedCard";
import { projectList } from "../../data";

const ProjectsGallery = () => {
    const classes = useStyles();
    const [selectedId, setSelectedId] = useState(null);

    const getSelected = (id) => projectList.find((elem) => elem.id === id);
    return (
        <AnimateSharedLayout type="crossfade">
            <Grid container  spacing={4} className={classes.galleryContainer}>
                {projectList.map((item, k) => (
                    <Grid
                        item
                        xs={12}
                        sm={6}
                        md={4}
                        key={item.id}
                        classes={{ item: classes.item }}
                        >
                        <Card
                            id={item.id}
                            title={item.title}
                            overview={item.overview}
                            backgroundImage={item.backgroundImage}
                            frontImage={item.frontImage}
                            technologies={item.technologies}
                            onClick={() => setSelectedId(item.id)}
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                        />
                    </Grid>
                ))}
            </Grid>
            <AnimatePresence>
                {selectedId && (
                    <ExtendedCard
                        key={selectedId}
                        id={getSelected(selectedId).id}
                        title={getSelected(selectedId).title}
                        overview={getSelected(selectedId).overview}
                        backgroundImage={getSelected(selectedId).backgroundImage}
                        frontImage={getSelected(selectedId).frontImage}
                        technologies={getSelected(selectedId).technologies}
                        handleClose={() => setSelectedId(null)}
                    />
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

const useStyles = makeStyles((theme) => ({
    galleryContainer: {
        overflow: "visible",
        width:"100%",
        margin:"0 auto"
    },
    item: {
        overflow: "visible",
    },
}));

export default ProjectsGallery;
