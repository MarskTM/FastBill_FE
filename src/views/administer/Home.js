import React, { useState } from 'react'
import '../../assets/styles/dashboard.css'
import Header from '../../components/layout/Header'
import Navigate from '../../components/layout/Navigate'
import Main from '../../components/layout/Main'
import Footer from '../../components/layout/Footer'

import { Layout } from 'antd'
const { Sider } = Layout

export default function Home() {
  return (
    <Layout className="Container grid grid-rows-6 grid-cols-6 grid-flow-col gap-2">
      <Sider className='bg-green-100 row-span-6 rm_max_width'>
        <Navigate />
      </Sider>
      
      <Header />
      <Main />
      <Footer />
    </Layout>
  )
}

