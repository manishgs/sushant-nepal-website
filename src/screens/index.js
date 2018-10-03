import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Contact from './contact';
import Project from './project';
import NoMatch from './nomatch';
import App from '../components/app';

class Index extends Component {
    render() {
        return (
            <App>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/project" component={Project} />
                    <Route component={NoMatch} />
                </Switch>
            </App>
        );
    }
}

export default Index;
