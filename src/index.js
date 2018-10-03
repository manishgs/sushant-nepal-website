import React from 'react';
import ReactDOM from 'react-dom';
import Index from './screens/index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter>
        <Index />
    </BrowserRouter>
    ,
    document.getElementById('root')
);

serviceWorker.register();