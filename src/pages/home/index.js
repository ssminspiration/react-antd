import React, { Component } from 'react';

import './index.less';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            msg:"页面内容"
        }
    }
    render() { 
        return ( <div className="home-wrap">
            {this.state.msg}
        </div> );
    }
}
 
export default Home;