import {NavLink} from 'react-router-dom';
export default function Navbar() {
  return (
    <>
    <nav className='flex flex-row gap-5'>
    <NavLink to={`/`}>Home</NavLink>
    <NavLink to={`/info`} >Info</NavLink>
    <NavLink to={`/about`} >About</NavLink>
    </nav>
    </>
  )
}

