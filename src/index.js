import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from "./containers/App";
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

const root = document.getElementById('root');

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), root);

if (module.hot) {
    module.hot.accept('./containers/App', () => {
        const NextApp = require('./containers/App').default;
        ReactDOM.render((
                <BrowserRouter>
                    <NextApp />
                </BrowserRouter>
            ), root
        )
    })
}
registerServiceWorker();
