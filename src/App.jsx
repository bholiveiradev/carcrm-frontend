import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./common.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Routes from "./Routes";

import { Loading, Notify, Alert } from "./view/components";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: blue[500],
    },
  },
  props: {
    MuiTextField: {
      variant: "outlined",
      fullWidth: true,
      margin: "dense"
    },
    MuiSelect: {
      variant: "outlined",
      fullWidth: true,
      margin: "dense"
    },
  },
});

const App = () => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Alert />
      <Notify />
      <Loading />
      <Routes />
    </ThemeProvider>
  </Provider>
);

export default App;
