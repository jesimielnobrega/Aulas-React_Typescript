import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette:{
        primary:{
            main: blue[700],
            dark: blue[900],
            light: blue[300],
            contrastText: '#ffffff'
        },
        secondary: {
            main: green[500],
            dark: green[900],
            light: green[300],
            contrastText: 'black'
        },
        background:{
            default: '#f7f6f3',
            paper: '#fffff3'
        }
    }
});