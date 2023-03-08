import React from 'react'
import '../../assets/styles/index.css'
import qr_code from '../../assets/images/qr_code.jpg'
import mb from '../../assets/images/logo-mbbank.jpg'
import bidv from '../../assets/images/logo-bidv.jpg'
import tp from '../../assets/images/logo-tpbank.jpg'
import { Avatar } from 'antd';

export default function Banking() {
  return (
    <div className='App'>
      <div className='w-96 h-[45%] bg-indigo-100 rounded-sm'>
        <h1 className='text-center text-5xl font-medium'>Thanh toán online</h1>
        <img src={qr_code} alt="Stk: 8939495969999 - Ngân hàng MB Bank"
          className='w-72 h-72 mt-5 m-auto' />
      </div>
      <div className='w-96 mt-5 flex justify-around'> 
        <Avatar className='border-4 border-gray-200' size={70} icon={<img src={mb} alt="MB Bank" />} />
        <Avatar className='border-4 border-gray-200' size={70} icon={<img src={bidv} alt="BIDV Bank" />} />
        <Avatar className='border-4 border-gray-200' size={70} icon={<img src={tp} alt="PT Bank" />} />
      </div>
    </div>
  )
}
