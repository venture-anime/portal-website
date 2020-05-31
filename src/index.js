import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

import ConnectedIntlProvider, { DEFAULT_LOCALE } from "./localisation";
import store from "./reducer";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <Provider store={store}>
        <ConnectedIntlProvider defaultLocale={DEFAULT_LOCALE}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <App />
            </BrowserRouter>
        </ConnectedIntlProvider>
    </Provider>,
    document.getElementById("root")
);

serviceWorker.unregister();
