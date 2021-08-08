import React from "react";
import { Switch, Route } from "react-router-dom";
import MainHome from "./pages/MainHome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Routes = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={MainHome} />
            </Switch>
            <Footer />
        </>
    );
};

export default Routes;
