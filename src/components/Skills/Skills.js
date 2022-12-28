import React from "react";
import { Typography, makeStyles,  Paper } from "@material-ui/core";
import { skillsList } from "../../data";
// import ProgressBar from "./ProgressBar";

// function LinearProgressWithLabel({ title, value }) {
//     const classes = useStyles();
//     return (
//         <div className={classes.skillWrapper}>

//             <Typography variant="body2" display="inline" component="span" className={classes.skillTitle}>
//                 {title}
//             </Typography>
            
//             <Box display="flex" alignItems="center" mb={2}>
//                 <Box width="100%" mr={1}>
//                     <ProgressBar value={value} />
//                 </Box>
//             </Box>
//         </div>
//     );
// }

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
