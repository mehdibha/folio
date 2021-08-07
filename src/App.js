import { ThemeProvider } from "@material-ui/styles";
import theme from "./assets/theme";
import CssBaseline from "@material-ui/core/CssBaseline";
import ScrollToTop from "./components/ScrollToTop";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import MainHome from "./pages/MainHome";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <CssBaseline />
        <ScrollToTop />
        <Route exact path="/" component={MainHome} />
        <Footer />
      </ThemeProvider>
    </Router>
  );
}

export default App;
