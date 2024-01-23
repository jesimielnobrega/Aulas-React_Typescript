import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export const LightTheme = createTheme({
    palette:{
        primary:{
            main: blue[500],
            dark: blue[900],
            light: blue[300],
            contrastText: '#ffffff'
        },
        secondary: {
            main: green[500],
            dark: blue[900],
            light: green[300],
            contrastText: 'orange'
        },
        background:{
            default: '#00008b',
            paper: '#808080'
        }
    }
});