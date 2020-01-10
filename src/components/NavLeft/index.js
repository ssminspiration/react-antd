import React, { Component } from 'react';
import MenuConfig from '../../config/menuConfig.js';
import { Menu, Icon} from 'antd';

// const {SubMenu} = Menu;

class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <div>
           <div className="logo">
               <img src="/logo192.png"/>
               <h1>System</h1>
           </div>
        </div> );
    }
}
 
export default NavLeft;