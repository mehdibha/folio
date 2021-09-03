import React from "react";
import { Typography, makeStyles, Box } from "@material-ui/core";
import ProgressBar from "./ProgressBar";
import {skillsList} from "../../data"


function LinearProgressWithLabel({title,value}) {
    const classes = useStyles();
    return (
        <div className={classes.skillWrapper}>
            <Typography variant="body2" display="inline" component="span" className={classes.skillTitle}>
                {title}
            </Typography>
            <Box display="flex" alignItems="center" mb={2}>
                <Box width="100%" mr={1}>
                    <ProgressBar value={value}/>
                </Box>
            </Box>
        </div>
    );
}

const Skills = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {skillsList.map((elem,k) => (
                <LinearProgressWithLabel title={elem.title} value={elem.value} key={k} />
            ))}
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        width: "100%",
    },
    skillWrapper: {
        width: "100%",
    },
    skillTitle: {
        whiteSpace: "nowrap",
        marginRight: theme.spacing(1),
    },
}));

export default Skills;
