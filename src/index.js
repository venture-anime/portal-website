/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import ConnectedIntlProvider, { DEFAULT_LOCALE } from 'Localisation';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import store from './reducer';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedIntlProvider defaultLocale={DEFAULT_LOCALE}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <App />
            </BrowserRouter>
        </ConnectedIntlProvider>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
