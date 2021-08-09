import { useState, useEffect } from 'react'
import { ThemeProvider } from "@material-ui/styles";
import theme from "./assets/theme";
import './App.css'
import CssBaseline from "@material-ui/core/CssBaseline";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import Loader from "./components/Loader";

function App() {
  const [isLoading,setIsLoading]=useState(true)
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 4500);
  }, []);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        {isLoading ? <Loader /> :<Routes />}
      </ThemeProvider>
    </Router>
  );
}

export default App;
