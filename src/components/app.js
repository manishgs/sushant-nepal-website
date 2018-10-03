import React from 'react';
import { Helmet } from 'react-helmet';
import '../assets/styles/css/common.scss';
import { Header, Footer } from './layouts';

const App = ({ children }) => {
    return (
        <div>
            <Helmet
                defaultTitle="__YOUR_INPUT__"
                titleTemplate="%s - __YOUR_INPUT__"
            >
                <meta name="description" content="__YOUR_INPUT__" />
                <meta name="theme-color" content="#000000" />
            </Helmet>
            <Header />
              {children}
            <Footer />
        </div>
    );
};

export default App;