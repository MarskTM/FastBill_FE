import React from 'react'
import '../../assets/styles/dashboard.css'
import Header from '../../components/layout/Header'
import Navigate from '../../components/layout/Navigate'


import { Layout, Avatar, Space } from 'antd'
const { Sider } = Layout

export default function Profile() {
  
  return (
    <div className="Container grid grid-rows-6 grid-cols-6 grid-flow-col gap-2">
      <Sider className='bg-green-100 row-span-6 rm_max_width'>
        <Navigate />
      </Sider>
      <Header />
      <div className='row-span-5 col-span-5'>
        <div className='w-[90%] h-[90%] flex bg-white m-auto border-t-8 border-sky-200'>
          <div className='w-80 h-1/2 m-6 border-r-2 border-gray-200'>
            <Avatar size={200} className='ml-[20%]' icon={<img src='https://scontent.xx.fbcdn.net/v/t1.15752-9/335922011_884245539328409_8181192386167189152_n.png?stp=dst-png_s206x206&_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Hlaqo6g7s44AX9WnPAu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQkg2LpUL7hppE14bdtGZUeM4s0fwwIbGRL-MM0s-OaCQ&oe=643519D0'/>} />
              <h2 className='ml-16 mt-10 font-medium text-3xl'>Phạm Dức Hòa</h2>
          </div>
          <div className='w-3/4 h-1/2 mt-6 py-6 pl-4 bg-cyan-50'>
            {/* setup form by table */}
            <table className='w-full h-full'>
              <tr>
                <td className='w-36 font-medium'>Họ và tên</td>
                <td className=''>Phạm Dức Hòa</td>
              </tr>
              <tr>
                <td className='w-36 font-medium'>Ngày sinh</td>
                <td className=''>15/3/2002</td>
              </tr>
              <tr>
                <td className='w-36 font-medium'>Giới tính</td>
                <td className=''>Nam</td>
              </tr>
              <tr>
                <td className='w-36 font-medium'>CMND/CCCD</td>
                <td className=''>78495335022</td>
              </tr>
              <tr>
                <td className='w-36 font-medium'>Số điện thoại</td>
                <td className=''>0123456789</td>
              </tr>
              <tr>
                <td className='w-36 font-medium'>Email</td>
                <td className=''>Hoabaosdom@gmail.com</td>
              </tr>
            </table>
          </div>
        </div> 

        <div>
          
        </div>
      </div>
    </div>
  )
}
