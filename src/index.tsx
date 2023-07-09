import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// replace console.* for disable log on production
if (process.env.REACT_APP_ENV === "prod") {
    console.log = () => {};
    console.error = () => {};
    console.debug = () => {};
}
const container = document.getElementById("root") as HTMLElement;

const root = createRoot(container);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
