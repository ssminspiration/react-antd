import React, { Component } from 'react';
import {HashRouter , Route, Link} from 'react-router-dom';
import Person from './Person.js';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <HashRouter>
                <div>
                    <h1>This is About Component</h1>
                    <Link to="/about/you">about you</Link>
                    <br/>
                    <Link to="/about/me">about me</Link>
                    
                    <h2>{this.props.match.params.id}</h2>
                    <hr/>

                    <Route path="/about/:id" component={Person}></Route>
                </div>
            </HashRouter>
            
         );
    }
}
 
export default About;