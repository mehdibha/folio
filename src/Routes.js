import React from "react";
import { Switch, Route } from "react-router-dom";
import MainHome from "./pages/MainHome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Social from "./components/Social";

const Routes = () => {
    return (
        <>
            <Navbar />
            <Social />
            <Switch>
                <Route exact path="/" component={MainHome} />
            </Switch>
            <Footer />
        </>
    );
};

export default Routes;
