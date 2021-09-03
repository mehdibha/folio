import { useState, useEffect, Suspense } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme, lightTheme } from "./assets/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import ThemeContext from "./contexts/themeContext";
import LoaderContext from "./contexts/loaderContext";

function App() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDarkMode(true);
        } else {
            setIsDarkMode(false);
        }
    }, []);
    return (
        <Router>
            <Suspense fallback={<div></div>}>
                <ThemeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
                    <LoaderContext.Provider value={{ isLoading, setIsLoading }}>
                        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                            <CssBaseline />
                            <ScrollToTop />
                            <Routes />
                        </ThemeProvider>
                    </LoaderContext.Provider>
                </ThemeContext.Provider>
            </Suspense>
        </Router>
    );
}

export default App;
