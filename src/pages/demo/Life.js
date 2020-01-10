import React,{Component} from 'react';
import Child from './Child';
import '../../index.css'

class Life extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            count:0,
        }
    }
    handleClick(){
        this.setState({
            count:this.state.count + 1
        })
    }

    render() { 
        return ( <div className='content'>
            <p>React生命周期</p>
            <button onClick={this.handleClick.bind(this)}>点击</button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div> );
    }
}
 
export default Life;