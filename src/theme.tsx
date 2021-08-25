import { createTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors/purple";
import green from "@material-ui/core/colors/green";
import { blue } from "@material-ui/core/colors";

const theme = createTheme({
  palette: {
    primary: purple,
    secondary: blue
  },
  // status: {
  //   danger: "orange"
  // }
});

export default theme;