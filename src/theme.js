import { createTheme } from "@material-ui/core/styles";
import { blue, pink } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: {
      light: "#6573c3",
      main: "#3f51b5",
      dark: "#2c387e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ffee33",
      main: "#ffea00",
      dark: "#b2a300",
      contrastText: "#000",
    },
    openTitle: blue["400"],
    protectedTitle: pink["400"],
    type: "light",
  },
});

export default theme;
