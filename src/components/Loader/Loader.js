import React from "react";
import CenterContainer from "../../containers/CenterContainer";
import Mehdi from "../../assets/images/Mehdi";
import { motion } from "framer-motion";

const Loader = () => {
    return (
        <CenterContainer>
            <Mehdi width={250} />
        </CenterContainer>
    );
};

export default Loader;
