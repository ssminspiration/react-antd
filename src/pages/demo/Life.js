import React,{Component} from 'react';
import Child from './Child';
import {Button} from 'antd';

// 安装配置了babel-plugin-import之后就不需要引入antd.css了，程序会按需加载。例如导入Button组件之后也会将它的样式导入
// import 'antd/dist/antd.css'
import '../../index.less';

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
            <Button>antd点击</Button>
            <p>{this.state.count}</p>
            <Child name={this.state.count}></Child>
        </div> );
    }
}
 
export default Life;