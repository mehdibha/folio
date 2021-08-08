import React from "react";
import CenterContainer from "../../containers/CenterContainer";
import Mehdi from "../../assets/images/Mehdi";
import { motion } from "framer-motion";

const Loader = () => {
    return (
        <motion.div >
            <CenterContainer>
                <Mehdi width={250} />
            </CenterContainer>
        </motion.div>
    );
};

export default Loader;
