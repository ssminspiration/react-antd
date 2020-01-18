import React, { Component } from 'react';
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                你好呀，{this.props.match.params.id}
            </div>
         );
    }
}
 
export default Person;