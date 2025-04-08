import { useState } from 'react'
import weblogo from '../assets/logo.jpg'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {

  return (
    <>
    <section className="header">
        <img src={weblogo} alt="logo" />
        <Link to={'/'}><div> Home</div></Link>
        <div>Categories</div>
        <div>About Us</div>
    </section>
    </>
  )
}

export default Header
