import { createMuiTheme } from '@material-ui/core';
import tinyColor from 'tinycolor2'
const colorprimery = "#5ea9dd";

const Theme = createMuiTheme({
    palette: {
        primary: {
            main: colorprimery,
            light: tinyColor(colorprimery).lighten()
        }
    },
    overrides: {
        MuiTypography: {
            root: {
                fontFamily: 'shabnam !important'
            }
        }
    }
});
export default Theme;