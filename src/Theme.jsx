import { createTheme } from "@mui/material/styles";
import PoppinsBold from "./assets/fonts/poppins/Poppins-Bold.ttf";
import PoppinsMedium from "./assets/fonts/poppins/Poppins-Medium.ttf";
import PoppinsRegular from "./assets/fonts/poppins/Poppins-Regular.ttf";

const Theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },
    primary: {
      main: "#e41b23",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#000000",
      secondary: "#000000",
    },
  },
  typography: {
    fontFamily: "'PoppinsRegular', sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'PoppinsMedium';
          src: local('Poppins Medium'), url(${PoppinsMedium}) format('woff2');
        }

        @font-face {
          font-family: 'PoppinsBold';
          src: local('Poppins Bold'), url(${PoppinsBold}) format('woff2');
        }

        @font-face {
          font-family: 'PoppinsRegular';
          src: local('Poppins Regular'), url(${PoppinsRegular}) format('woff2');
        }
      `,
    },
  },
});

export default Theme;