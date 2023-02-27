import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
// import { createTheme, ThemeProvider} from '@mui/material/styles';
import { ThemeProvider, CssBaseline, createTheme, Paper } from "@mui/material";
import ReactGA from "react-ga";

const TRACKING_ID = "G-XN6PVRG14Z"
ReactGA.initialize(TRACKING_ID);


const theme = createTheme({
    palette: {
      background: {
        default: "#fafafa"
      }
    }
  });

const client = new ApolloClient({
    uri: "https://api.thegraph.com/subgraphs/name/lazycoder1/aa-subgraphs-test",
    cache: new InMemoryCache(),
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
