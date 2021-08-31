import { useState, useEffect } from "react";
import { ThemeProvider } from "@material-ui/styles";
import { darkTheme, lightTheme } from "./assets/theme";
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Loader from "./components/Loader";
import themeContext from "./contexts/themeContext";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [isDarkMode, setIsDarkMode] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 5800);
    }, []);
    return (
        <Router>
            <themeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
                <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
                    <CssBaseline />
                    <ScrollToTop />
                    {/* <Loader /> */}
                    <Routes />
                </ThemeProvider>
            </themeContext.Provider>
        </Router>
    );
}

export default App;
