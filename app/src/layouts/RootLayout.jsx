import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../components/navbar'
export default function RootLayout() {
  return (
    <>
    <div className='root-layout'>
    {/* Header RootLayout */}
    <header>
    <Navbar />
    </header>
    {/* Main RootLayout */}
    <main>
    <Outlet />
    </main>
    {/* Footer RootLayout */}
    <footer></footer>
    </div>
    </>
  )
}
