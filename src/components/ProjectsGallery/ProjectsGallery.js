import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImageList, ImageListItem, makeStyles } from "@material-ui/core";
import Card from "./Card";
import ExtendedCard from "./ExtendedCard";
import { projectList } from "../../data";

const ProjectsGallery = () => {
    const classes = useStyles();
    const [selectedId, setSelectedId] = useState(null);
    
    const galleryControls = useAnimation();
    const [galleryRef, galleryInView] = useInView();

    useEffect(() => {
        if (galleryInView) {
            galleryControls.start("visible");
        }
    }, [galleryControls, galleryInView]);
    const getSelected = (id) => projectList.find((elem) => elem.id === id);
    return (
        <AnimateSharedLayout type="crossfade">
            <ImageList
                rowHeight={400}
                cols={3}
                gap={20}
                className={classes.galleryContainer}
            >
                {projectList.map((item, k) => (
                    <ImageListItem
                        key={item.id}
                        layoutId={item.id}
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
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <AnimatePresence>
                {selectedId && (
                    <ExtendedCard
                        component={motion.div}
                        key={selectedId}
                        layoutId={selectedId}
                        id={getSelected(selectedId).id}
                        title={getSelected(selectedId).title}
                        overview={getSelected(selectedId).overview}
                        backgroundImage={getSelected(selectedId).backgroundImage}
                        frontImage={getSelected(selectedId).frontImage}
                        technologies={getSelected(selectedId).technologies}
                    />
                )}
            </AnimatePresence>
        </AnimateSharedLayout>
    );
};

const useStyles = makeStyles((theme) => ({
    galleryContainer: {
        overflow: "visible",
    },
    item: {
        overflow: "visible",
    },
}));

export default ProjectsGallery;
