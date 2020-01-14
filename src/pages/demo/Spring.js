import React, { Component } from 'react';
import Home from '../home';
import About from './About';
import Inbox from './Inbox';

class Spring extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            route:window.location.hash.substr(1)
         }
    }
    // getInitialState(){
    //     console.log('%cgetInitialState','font-size:34px;color:red')
    //     return {
    //         route:window.location.hash.substr(1)
    //     }
    // }

    componentWillMount(){
        window.addEventListener('hashchange',()=>{
            this.setState({
                route:window.location.hash.substr(1)
            })
        })
    }


    render() { 
        console.log('render')
        let Child;
        switch(this.state.route){
            case '/about':
                Child = About;
            break;
            case '/inbox':
                Child = Inbox;
            break;
            default:
                Child = Home;
            break;
        }
        return ( 
            <div>
                <h1>App</h1>
                <ul>
                    <li>
                        <a href="#/about">About</a>
                    </li>
                    <li>
                        <a href="#/inbox">Inbox</a>
                    </li>
                </ul>
                <Child/>
            </div>
         );
    }
}
 
export default Spring;