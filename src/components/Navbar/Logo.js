import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";
// import Mehdibha from "../../assets/images/Mehdibha";
import Ihtisham from "../../assets/images/Ihtisham.png"
const Logo = ({ setHomeIsActive, ...rest }) => {
    const classes = useStyles();
    return (
        <Link
            spy
            smooth
            duration={500}
            offset={-70}
            to="home"
            onSetActive={() => setHomeIsActive(true)}
            onSetInactive={() => setHomeIsActive(false)}
            className={classes.root}
        >
            {/* <Mehdibha {...rest} /> */}
            <img src={Ihtisham} alt="ihtisham" className={classes.logo} />
        </Link>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: "pointer",
    },
    logo:{
        width: "10rem",
    }
}));

export default Logo;
