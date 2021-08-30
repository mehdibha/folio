import React from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Switch, Route } from "react-router-dom";
import MainHome from "./pages/MainHome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Social from "./components/Social";

const Routes = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <>
            <Navbar />
            {!isMobile && <Social />}
            <Switch>
                <Route exact path="/" component={MainHome} />
            </Switch>
            <Footer />
        </>
    );
};

export default Routes;
