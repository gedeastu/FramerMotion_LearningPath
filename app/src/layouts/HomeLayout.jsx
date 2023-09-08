import React from 'react'
import {Outlet} from 'react-router-dom'
import {Link} from 'react-router-dom'
export default function HomeLayout() {
  return (
    <>
    <Link hrefLang='/'>Back</Link>
    <main>
    <Outlet/>
    </main>
    </>
  )
}
