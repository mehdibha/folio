import React from "react";
import SectionContainer from "../../containers/SectionContainer";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { motion } from "framer-motion";
import VideoLogo from "../../components/VideoLogo";
// import { makeStyles } from "@material-ui/core";

const Home = () => {
    return (
        <SectionContainer>
            <Typography component={motion.p} ini color="primary" variant="h5" style={{marginBottom:"6px"}}>
                Hi there
                <motion.div 
                    style={{ display:"inline-block"}}
                    animate={{rotate : [50,90,50] }}
                    transition={{ repeat: Infinity, duration: 1.4, repeatDelay:0.7,  }}
                >
                    👋
                </motion.div>
                , i'm
            </Typography>
            <VideoLogo style={{marginBottom:"0px"}} />
            <Typography variant="h2" color="secondary" style={{marginBottom:"16px"}}>
                I make awesome websites.
            </Typography>
            <Typography variant="body2" color="initial" style={{marginBottom:"0"}}>
                Full stack web developer, UI/UX designer, freelancer, Github addict.
            </Typography>
            <Typography variant="body1" color="initial" style={{marginBottom:"30px"}}>
                Based in sousse, Tunisia.
            </Typography>
            <Button variant="outlined" color="primary" size="large" >
                Get in touch
            </Button>
        </SectionContainer>
    );
};

// const useStyles = makeStyles((theme) => ({
//   typo: {
//       marginBottom:theme.spacing(2)
//   },
// }));

export default Home;
