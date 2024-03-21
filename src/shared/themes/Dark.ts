import { createTheme } from "@mui/material";
import { blue, green } from "@mui/material/colors";

export const DarkTheme = createTheme({
    palette:{
        mode:"dark",
        primary:{
            main: blue[500],
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
            default: '#202124',
            paper: '#303134'
        }
    },
    typography:{
        allVariants:{
            color:"white"
        }
    }
});