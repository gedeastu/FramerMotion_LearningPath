import React from 'react'
import {NavLink,Outlet} from 'react-router-dom'
export default function AboutLayout() {
  return (
    <>
    <div className='about-layout'>
    <h1>About</h1>
    <nav className='flex flex-row gap-5'>
    <NavLink to={`faq`}>View the FAQ</NavLink>
    <NavLink to={`contact`}>View the Contact</NavLink>
    </nav>
    <Outlet/>
    </div>
    </>
  )
}
