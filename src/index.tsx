import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import "normalize.css";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.js";

const rootNode = document.getElementById("root");

function render() {
    if (!rootNode) return;

    return ReactDOM.createRoot(rootNode).render(
        <Provider store={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </Provider>,
    );
}

render();
