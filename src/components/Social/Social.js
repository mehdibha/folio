import React from "react";
import { Link, makeStyles } from "@material-ui/core";
import { motion } from "framer-motion"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";


const Social = () => {
    const classes = useStyles();
    return (
        <motion.div 
            initial={{ y: '100vh'}}
            animate={{ y: 0}}
            transition={{ delay:3}}
            className={classes.wrapper}>
            <Link href="https://github.com/Mehdi-BHA" target="_blank">
                <GitHubIcon className={classes.socialIcon} />
            </Link>
            <Link href="https://www.instagram.com/mehdibha/" target="_blank">
                <InstagramIcon className={classes.socialIcon} />
            </Link>
            <Link href="https://www.linkedin.com/in/mehdi-ben-hadj-ali-6a7435131/" target="_blank">
                <LinkedInIcon className={classes.socialIcon} />
            </Link>
            <Link href="mailto:mehdibenhadjali@gmail.com">
                <EmailIcon className={classes.socialIcon} />
            </Link>
        </motion.div>
    );
};

const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        bottom: 0,
        right: 0,
        padding: theme.spacing(2),
    },
    socialIcon: {
        margin: theme.spacing(1, 0),
        color: theme.palette.text.secondary,
        fontSize: "30px",
        "&:hover":{
            color:theme.palette.text.primary
        }
    },
}));

export default Social;
