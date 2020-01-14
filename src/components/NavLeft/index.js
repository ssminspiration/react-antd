import React, { Component } from 'react';
import MenuConfig from '../../config/menuConfig.js';
import { Menu, Icon, Button} from 'antd';

import './index.less'

const { SubMenu, Item } = Menu;
class NavLeft extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          
        }
    }

    // 生命周期函数，组件挂载之前
    componentWillMount(){
        const menuTreeNode = this.renderMenu(MenuConfig);

        // 将menuTreeNode存入state中
        this.setState({
            menuTreeNode
        })
    }

    // 菜单渲染
    renderMenu = (data)=> {
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Item title={item.title} key={item.key}>{item.title}</Item>
        })
    }
    render() { 
        return ( <div>
            <div className="logo">
                <img src="/logo192.png"/>
                <h1>System</h1>
            </div>
            <Menu 
                theme="dark"
            >
               {this.state.menuTreeNode}
            </Menu>
        </div> );
    }
}
 
export default NavLeft;