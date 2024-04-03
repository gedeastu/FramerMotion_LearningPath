import {NavLink} from 'react-router-dom';
import React,{useState} from 'react';
export default function Navbar() {
  const routeLink = [
    {
      id:1,
      label:"Home",
      link:"/"
    },
    {
      id:2,
      label:"Info",
      link:"/info"
    },
    {
      id:3,
      label:"About",
      link:"/about"
    }
  ]
  const [isVisited,setIsVisited] = useState(0)
  const renderNavItems = routeLink.map((item,index)=>{
    const isExpanded = index === isVisited
    return(
      <NavLink key={item.id} to={item.link} onClick={()=>setIsVisited(index)} className={isExpanded && `font-bold`}>
        {item.label}
      </NavLink>
    )
  })
  return (
    <>
    <nav className='flex flex-row gap-5'>
    {renderNavItems}
    </nav>
    </>
  )
}

