import React from 'react'
import cl from './Navbar.module.css'
export default function Navbar() {
  return (
    <nav className={cl.header__navLinks}>
        <a
            className={`${cl.header__navLink} ${cl.header__navLink_active}`}
            href="#"
        >
            Home
        </a>
        <a className={cl.header__navLink} href="#">About</a>
        <a className={cl.header__navLink} href="#">Team</a>
        <a className={cl.header__navLink} href="#">Shop</a>
        <a className={cl.header__navLink} href="#">Pages</a>
    </nav>
  )
}
