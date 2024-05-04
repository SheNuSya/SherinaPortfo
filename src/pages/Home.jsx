import { useState } from 'react'
import NavBar from '../components/NavBar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className="bg-slate-900">
        <NavBar />
        <Banner />
        <Footer />
    </div>
  )
}

export default Home
