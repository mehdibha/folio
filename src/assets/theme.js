import { createTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const theme = createTheme({
  // breakpoints: {
  //     values: {
  //         xs: 0,
  //         sm: 600,
  //         md: 960,
  //         lg: 1320,
  //         xl: 1920,
  //     },
  // },
  palette: {
    // type: "dark" ,
    // primary: {
    //     main: "blue",
    // },
    // secondary: grey,
    // background: {
    //     default: "#191919",
    // },
    // error: { main: "#e87c03" },
    // text: { primary: "#e5e5e5", secondary: "rgb(150,150,150)", disabled: "rgb(150,150,150)" },
  },
  // typography: {
  //     fontFamily: ["Tunflix Sans", "Helvetica Neue", "sans-serif"].join(","),
  // },
  // overrides: {
  //     MuiTypography: {
  //         root: {
  //             textShadow: "1px 1px 1px rgb(0 0 0)",
  //         },
  //     },
  //     MuiSkeleton: {
  //         root: {
  //             backgroundColor: "#1a1a1a",
  //         },
  //     },
  // },
  // paddingMainContainer: "80px",
  // fadePage:300
});

export default theme;
