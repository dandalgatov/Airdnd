import React from 'react'
import 'antd/dist/antd.css';
import { Input, Avatar, Menu, message, Dropdown } from 'antd';

import { UserOutlined, PoweroffOutlined, HomeOutlined } from '@ant-design/icons';



const { Search } = Input;

function handleMenuClick(e) {
    message.info('Click on menu item.');
    console.log('click', e);
}

const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="" icon={<UserOutlined />}>
            Profile
      </Menu.Item>
        <Menu.Item key="2" icon={<PoweroffOutlined />}>
            Sign out
      </Menu.Item>
    </Menu>
);

export default function Header() {
    return (
        <div style={{ height: "40px", backgroundColor: "purple", display: "flex",
        flexFlow: "row nowrap", justifyContent: "space-between"}}>
            
            <HomeOutlined style={{ fontSize: "32px", color: "white", backgroundColor: "purple", padding: "4px" }} />
            
            
            <Search
                placeholder="address/neighborhood"
                onSearch={value => console.log(value)}
                enterButton
                style={{ height: "5vh", width: "70vw", maxWidth: "300px", padding: "4px" }} />


            <Dropdown overlay={menu} trigger={['click']} style={{padding: "4px"}}>
                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    <Avatar style={{fontSize: "32px", color: "purple", backgroundColor: "white"}}icon={<UserOutlined />} />
                </a>
            </Dropdown>

        </div>
    )
}

