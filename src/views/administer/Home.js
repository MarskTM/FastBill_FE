import React from 'react'
import '../../assets/styles/dashboard.css'
import Header from '../../components/layout/Header'
import Navigate from '../../components/layout/Navigate'
import RenderLineChart from '../../components/chart'
import TimeLine from '../../components/chart/TimeLine'
import { DollarOutlined, AliwangwangOutlined, DotChartOutlined } from '@ant-design/icons'


import { Layout } from 'antd'
const { Sider } = Layout

export default function Home() {
  return (
    <div className="Container grid grid-rows-6 grid-cols-6 grid-flow-col gap-2">
      <Sider className='bg-green-100 row-span-6 rm_max_width'>
        <Navigate />
      </Sider>
      <Header />
      <div className='row-span-5 col-span-5'>
        <div className='w-[96%] h-[33%] ml-5 mb-10 pt-4 flex justify-around bg-white shadow-lg shadow-gray-200'>
          <div className='w-72 h-24  bg-slate-200 rounded-md flex'>
            <DollarOutlined style={{ fontSize: '55px', color: '#6666FF' }} className=' m-5 bg-gray-300 rounded-full' />
            <div className='flex flex-col items-end mt-3'>
              <p className='font-semibold'>Giá tiền điện</p>
              <h1 className='text-4xl'>21.000 đ</h1>
            </div>
          </div>

          <div className='w-72 h-24  bg-slate-200 rounded-md flex'>
            <DotChartOutlined style={{ fontSize: '55px', color: '#6666FF' }} className='m-5 bg-gray-300 rounded-full' />
            <div className='flex flex-col items-end mt-3 ml-3'>
              <p className='font-semibold'>Số điện</p>
              <h1 className='text-4xl'>32</h1>
            </div>
          </div>

          <div className='w-72 h-24  bg-slate-200 rounded-md flex'>
            <AliwangwangOutlined style={{ fontSize: '55px', color: '#6666FF' }} className='m-5 bg-gray-300 rounded-full' />
            <div className='flex flex-col items-end mt-3 ml-4'>
              <p className='font-semibold'>Số điện cũ</p>
              <h1 className='text-4xl'>002.435</h1>
            </div>
          </div>

          <div className='w-72 h-24  bg-slate-200 rounded-md flex'>
            <AliwangwangOutlined style={{ fontSize: '55px', color: '#6666FF' }} className='m-5 bg-gray-300 rounded-full' />
            <div className='flex flex-col items-end mt-3 ml-4'>
              <p className='font-semibold'>Số điện mới</p>
              <h1 className='text-4xl'>002.436</h1>
            </div>
          </div>
        </div>
        <div className='w-full flex'>
          <RenderLineChart />
          <TimeLine />
        </div>

      </div>
    </div>
  )
}

