import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import {
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.tsx";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif", // Set the default font for the entire app
  },
  // Add other theme customizations here
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Typography variant="body1" style={{ fontFamily: "Roboto, sans-serif" }}>
        <RouterProvider router={router}/>
      </Typography>
    </ThemeProvider>
  </React.StrictMode>
);
