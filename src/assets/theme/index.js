import { createTheme } from '@material-ui/core';
import typography from './typography';

const theme = createTheme({
  palette: {
    background: {
      default: 'rgb(20,20,20) ',
    },
    primary: {
      main:'#FF4C29',
      contrastText: '#fff',
    },
    secondary:{
      main:'#2C394B',
      contrastText: '#fff',
    },
    text: {
      primary: '#FFF',
      secondary: '#FFF'
    }
  },
  typography,
  overrides:{
    MuiButton:{
      root:{
        textTransform:"none",
        fontSize:"16px",
      },
      text:{
        letterSpacing:"2px",
        borderRadius: 0,
        "&:hover": {
          color:'rgb(230,230,230)',
          backgroundColor:"inherit"
        }
      }
    }
  }
});

export default theme;
