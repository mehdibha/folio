import React, { useEffect, useState } from "react";
import { AnimatePresence, AnimateSharedLayout, motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ImageList, ImageListItem, makeStyles } from "@material-ui/core";
import Card from "./Card";
import ExtendedCard from "./ExtendedCard";

const ProjectsGallery = () => {
    const classes = useStyles();
    const [selectedId, setSelectedId] = useState(null);
    const projects = [
        {
            id: 1,
            title: "Tunflix",
            overview:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita incidunt ab recusandae minus sequi. Nostrum debitis aliquam et recusandae ducimus.",
            technologies: ["React JS", "Node JS", "MongoDB"],
            backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg",
            frontImage: "https://ltheme.com/wp-content/uploads/2018/05/et-fashion-free-responsive-joomla-template.png",
        },
        {
            id: 2,
            title: "Code Hub",
            overview:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita incidunt ab recusandae minus sequi. Nostrum debitis aliquam et recusandae ducimus.",
            technologies: ["React JS", "Node JS", "MongoDB"],
            backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg",
            frontImage: "https://ltheme.com/wp-content/uploads/2018/05/et-fashion-free-responsive-joomla-template.png",
        },
        {
            id: 3,
            title: "Burpees.io",
            overview:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita incidunt ab recusandae minus sequi. Nostrum debitis aliquam et recusandae ducimus.",
            technologies: ["React JS", "Node JS", "MongoDB"],
            backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg",
            frontImage: "https://ltheme.com/wp-content/uploads/2018/05/et-fashion-free-responsive-joomla-template.png",
        },
        {
            id: 4,
            title: "Burpees.io",
            overview:
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita incidunt ab recusandae minus sequi. Nostrum debitis aliquam et recusandae ducimus.",
            technologies: ["React JS", "Node JS", "MongoDB"],
            backgroundImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/wizard-bg.jpg",
            frontImage: "https://ltheme.com/wp-content/uploads/2018/05/et-fashion-free-responsive-joomla-template.png",
        },
    ];
    const galleryControls = useAnimation();
    const [galleryRef, galleryInView] = useInView();

    useEffect(() => {
        if (galleryInView) {
            galleryControls.start("visible");
        }
    }, [galleryControls, galleryInView]);
    const getSelected = (id) => projects.find((elem) => elem.id === id);
    return (
        <AnimateSharedLayout type="crossfade">
            <ImageList
                rowHeight={400}
                cols={3}
                gap={20}
                className={classes.galleryContainer}
            >
                {projects.map((item, k) => (
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
