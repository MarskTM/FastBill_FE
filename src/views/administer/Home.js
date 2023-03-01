import React from 'react'
import '../../assets/styles/dashboard.css'
import Header from '../../components/layout/Header'
import Navigate from '../../components/layout/Navigate'
import Main from '../../components/layout/Main'
import Footer from '../../components/layout/Footer'

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Navigate />
      <Main />
      <Footer />
    </div>
  )
}
