import React from 'react'
import {Outlet,useLocation, useParams} from 'react-router-dom'
import Navbar from '../components/navbar'

export const HomeDetailsLoader = async ({params}) => {
  const {id} = params;
  // const res = await fetch(`http://localhost:2004/listItem/${id}`)
  const res = await fetch(`${import.meta.env.VITE_APP_API_CARD_LIST}/${id}` )
  return res.json()
}

export default function RootLayout({params}) {
  const location = useLocation();
  const {id} = useParams()
  return (
    <>
    <div className='root-layout'>
    {/* Header RootLayout */}
    <header className='w-screen flex justify-center p-5'>
    {location.pathname === `/${id}` ? null : <Navbar />}
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
