import React, { useState } from 'react'
import { Avatar, Space, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import logo_header from '../../assets/images/logo_slice_2.png';



export default function Header() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className='col-span-5'>
      <div className='h-20 w-full bg-white shadow-sm shadow-neutral-300'>
        {/* <div className='pl-10 w-[65%]'>
          
        </div> */}
        <img className='slice_header_img' src={logo_header}></img>
      </div>
      <div className='h-full pt-2'>
        <Marquee className='' gradient={false} speed={10}>
          <p> Giá điện có xu hướng tăng trong năm này </p>
        </Marquee>
      </div>

      <Space className='absolute top-3 right-4' direction="col" size={16}>
        {!isLogin ?
          <Space wrap>
            <Button className='mt-3 h-10' size={16} onClick={() => {
              navigate('/')
            }}>
              Sign In
            </Button>
            <Button className='mt-3 h-10' type="dashed" size={16} onClick={() => {
              navigate('/signup')
            }}>
              Sign Up
            </Button>
          </Space>
          :
          <Space wrap className='bg-slate-100 px-4 rounded-md '>
            <Avatar size={60} src="https://noithatbinhminh.com.vn/wp-content/uploads/2022/08/anh-dep-50.jpg" />
            <h1 className='text-lg font-medium'>Hello there!</h1>
          </Space>
        }
      </Space>

    </div>
  )
}
