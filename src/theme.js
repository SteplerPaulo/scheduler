import { unstable_createMuiStrictModeTheme  as createTheme   } from "@material-ui/core/styles";
import grey from '@material-ui/core/colors/grey';
//import Poppins from './assets/fonts/poppins-v15-latin-regular.woff2';

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: "dark",
    primary:{
      main:'#094e87'
    },
    secondary:{
      main:grey[900]
    },
    typography: {
      fontFamily: [
        'Google Sans',
      ].join(','),
   },
  },
});

export default theme;
