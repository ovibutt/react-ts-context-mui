import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#282c34',
    },
    secondary: {
      main: '#fff',
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
})
export default theme
