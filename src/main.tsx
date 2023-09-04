import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import {
  CssBaseline,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif", // Set the default font for the entire app
  },
  // Add other theme customizations here
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* //     <CssBaseline /> */}
      <Typography variant="body1" style={{ fontFamily: "Roboto, sans-serif" }}>
        <App />
      </Typography>
    </ThemeProvider>
    {/* <App/> */}
  </React.StrictMode>
);
