import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../../context/MainProvider'
import './Nav.scss'

function Nav() {
    const {basket} = useContext(MainContext)
  return (
 <>
 <header>
 <nav className='nav'>
    <div className="nav_name">
        <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
        <h3>COURSE</h3>
    </div>
    <div className="nav_list">
        <ul>
            <Link to={'/'}>Home</Link>
        <Link to={'/basket'}>Basket {basket.length}</Link>
            <Link to={'/admin'}>AdminPanel</Link>
            <Link to={'/add'}>Add</Link>
        </ul>
    </div>
    <div className="nav_contact">
    <i className="fa-solid fa-phone"></i>
    <p>+994 51 578 13 13</p>
    </div>
 </nav>
 </header>
 </>
  )
}

export default Nav
