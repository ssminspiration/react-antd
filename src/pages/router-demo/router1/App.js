import React, { Component } from 'react';
import { HashRouter, Route, Link} from 'react-router-dom';
import About from './About.js';
import Touch from './Touch.js'
class App extends Component {;
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <h1>App</h1>
                <ul>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/touch">Touch</Link>
                    </li>
                </ul>
                <hr/>
                {/* <HashRouter>
                    <Route path="/about" component={About}></Route>
                    <Route path="/touch" component={Touch}></Route>
                </HashRouter> */}
            </div>
         );
    }
}
 
export default App;