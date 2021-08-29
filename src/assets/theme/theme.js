import { createTheme } from "@material-ui/core";
import typography from "./typography";

const theme = createTheme({
    breakpoints: {
        values: {
            xs: 0,
            sm: 700,
            md: 960,
            lg: 1320,
            xl: 1920,
        },
    },
    palette: {
        background: {
            default: "#1A1A1A ",
        },
        primary: {
            main: "#FF4C29",
            contrastText: "#fff",
        },
        secondary: {
            main: "#2C394B",
            contrastText: "#fff",
        },
        text: {
            primary: "#FFF",
            secondary: "rgb(200,200,200)",
        },
        action: {
            disabled: "rgb(70,70,70)",
            disabledBackground: "rgb(150,150,150)",
        },
    },
    navbarHeight: "70px",
    mobileNavbarHeight: "55px",
    typography,
    overrides: {
        MuiButton: {
            root: {
                textTransform: "none",
                fontSize: "16px",
            },
            text: {
                letterSpacing: "2px",
                borderRadius: 0,
                "&:hover": {
                    color: "rgb(230,230,230)",
                    backgroundColor: "inherit",
                },
            },
        },
    },
});

export default theme;
