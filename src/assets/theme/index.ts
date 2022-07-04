import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Proxima Nova",
  },
  palette: {
    primary: {
      main: "#4D7CFE",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 960,
      md: 1280,
      lg: 1600,
      xl: 1920,
    },
  },
});
export default theme;
