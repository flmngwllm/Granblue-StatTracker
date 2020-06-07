import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Breadcrumb, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Users from './Users'



const menu = (
  <Menu>
    <Menu.Item>
      <Users/>
    </Menu.Item>
  </Menu>
);



class Nav extends Component {
    render() {

        return (
            <div>
                
                {/* <Link to = "/characters">Characters</Link>
                <Link to = "/signup">Signup</Link> */}
      <Breadcrumb>
    <Breadcrumb.Item>Stat Tracker</Breadcrumb.Item>
    <Breadcrumb.Item>
      <Link to = "/">Home</Link>
    </Breadcrumb.Item>
     <Breadcrumb.Item>
      <Link to = "/characters">Characters</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
     <Link to = "/signup">Signup</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item overlay={menu}>
     <UserOutlined />
      <span>Users</span>
    </Breadcrumb.Item>
  </Breadcrumb>     
            </div>
            
        );
       
    }
}

export default Nav;