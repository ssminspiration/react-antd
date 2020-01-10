import React,{Component} from 'react';

class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <p>{this.props.name}</p>
            </div>
         );
    }

    componentWillMount(){
        console.log('child componentWillMount')
    }
    componentDidMount(){
        console.log('child componentDidMount')
    }

    componentWillReceiveProps(){
        console.log('child componentWillReceiveProps')
    }

    // shouldComponentUpdate(){
    //     console.log('child shouldComponentUpdate')
    //     return true;
    // }

    componentWillUpdate(){
        console.log('child componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('child componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('child componentWillUnmount')
    }
}
 
export default Child;