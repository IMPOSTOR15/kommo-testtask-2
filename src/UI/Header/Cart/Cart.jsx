import React from 'react'
import cart from '../../../assets/Header/cart.svg'
import cl from './cart.module.css'
export default function Cart({...props}) {
  return (
    <figure className={cl.header__cart}>
        <img className={cl.header__cartIcon} src={cart} alt="cart" />
        <figcaption className={cl.header__cartCounter}>{props.count}</figcaption>
    </figure>
  )
}
