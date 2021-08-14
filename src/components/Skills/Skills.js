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
            <Box display="flex" alignItems="center">
                <Box width="100%" mr={1}>
                    <ProgressBar value={value}/>
                </Box>
                <Box minWidth={35}>
                    <Typography variant="body2" color="textSecondary">{`${Math.round(value)}%`}</Typography>
                </Box>
            </Box>
        </div>
    );
}

const Skills = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {skillsList.map((elem) => (
                <LinearProgressWithLabel title={elem.title} value={elem.value} />
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
