import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
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
        getItem('Home', '2'),
        getItem('Payments', '3'),
        getItem('Charts', '4'),
    ]),
    getItem(
        <a href="https://www.evn.com.vn/" target="_blank" rel="noopener noreferrer">
            Pages
        </a>,
        'link',
        <LinkOutlined />,
    ),
];

export default function Navigate() {
    const navigate = useNavigate();
    const [key, setKey] = useState('2')
    useEffect(() => {
        if (key === '1') {
            navigate('/profile')
        }
        if (key === '2') {
            navigate('/admin')
        }
        if (key === '3') {
            navigate('/payment')
        }
    }, [key])


    return (
        <div className=''>
            <h1 className='bg-white w-full h-16 pt-3 text-center text-blue-700 text-3xl font-bold'>Dashboard</h1>
            <Menu
                theme="light"
                mode="inline"
                className="h-screen"
                defaultSelectedKeys={['2']}
                onSelect={(e) => setKey(e.key)}
                items={items}
            />
        </div>
    )
}
