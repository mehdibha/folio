import React from "react";
import { Typography, makeStyles,  Paper } from "@material-ui/core";
import { skillsList } from "../../data";
const Skills = () => {
    const classes = useStyles();
    // const theme = useTheme();
    return (
        <div className={classes.container}>
            {skillsList.map((elem, k) => (
                <Paper elevation={5} variant="outlined" key={k} className={classes.paper} square>
                    <Typography align="center" variant="subtitle1">{elem.title}</Typography>
                </Paper>
            ))}
        </div>
    );
};

const useStyles = makeStyles((theme) => ({
    container: {
        maxWidth: "600px",
        display: "flex",
        flexWrap:"wrap",
        position: "relative",
        right: "4rem"
    },
    skillWrapper: {
        width: "100%",
    },
    skillTitle: {
        whiteSpace: "nowrap",
        marginRight: theme.spacing(1),
    },
    paper:{
        marginRight:"10px",
        marginBottom:"10px",
        minWidth:"50px",
        padding:"10px"
    }
}));

export default Skills;
