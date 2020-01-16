import React, { Component } from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './Home.js';

class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <HashRouter>
                <div>
                    <Route path="/" component={Home}></Route>
                </div>
            </HashRouter>
         );
    }
}
 
export default Router;