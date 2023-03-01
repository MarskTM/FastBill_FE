import React, { useState } from 'react'
import { Menu } from 'antd'
import {
    UserOutlined,
    SettingOutlined,
    LinkOutlined,
} from '@ant-design/icons';

const getItem = (label, key, icon, children, type) => {
    return {
        key,
        icon,
        children,
        label,
        type,
    };
} 

const items = [
    getItem('Profile', '1', <UserOutlined />),
    getItem('Manager', 'sub4', <SettingOutlined />, [
        getItem('Option 9', '2'),
        getItem('Option 10', '3'),
        getItem('Option 11', '4'),
        getItem('Option 12', '5'),
    ]),
    getItem(
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Ant Design
        </a>,
        'link',
        <LinkOutlined />,
    ),
];

export default function Navigate() {
    return (
        <div className=''>
            <h1 className='bg-white w-full h-16 pt-3 text-center text-blue-700 text-3xl font-bold'>Dashboard</h1>
            <Menu
                theme="light"
                mode="inline"
                className="h-screen"
                defaultSelectedKeys={['1']}
                onSelect={(e) => console.log(e.key)}
                items={items}
            />
        </div>
    )
}
