import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';




const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
          1st menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
          3rd menu item
        </a>
      </Menu.Item>
      <Menu.Item danger>a danger item</Menu.Item>
    </Menu>
  );

class Nav extends Component {
    render() {

        return (
            <div>
                <Link to = "/">Home</Link>
                <Link to = "/characters">Characters</Link>
                <Link to = "/signup">Signup</Link>

                <Dropdown overlay={menu}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                Hover me <DownOutlined />
                </a>
                </Dropdown>,
                mountNode,
            </div>
            
        );
    }
}

export default Nav;