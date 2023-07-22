import React from 'react'
import headerLogo from '../../../assets/Header/headerLogo.svg'
import cl from './logo.module.css'
export default function Logo() {
  return (
    <img 
        height='48px' 
        width='170px'
        className={cl.header__logo} 
        src={headerLogo} 
        alt="Logo" 
    />
  )
}
