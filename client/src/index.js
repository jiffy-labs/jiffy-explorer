import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
// import { createTheme, ThemeProvider} from '@mui/material/styles';
import { ThemeProvider, CssBaseline, createTheme, Paper } from "@mui/material";
import ReactGA from "react-ga4";

const TRACKING_ID = "G-8HQ9S4Z1YF"
ReactGA.initialize(TRACKING_ID);


const theme = createTheme({
    palette: {
      background: {
        default: "#fafafa"
      }
    }
  });


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
                    <App />
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
