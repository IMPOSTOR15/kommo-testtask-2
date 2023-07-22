import React from 'react'
import fire from '../../../assets/MainPage/fire.svg'
import cl from './PreHeader.module.css'
export default function PreHeader() {
  return (
    <figure className={cl.preheader}>
        <img
            className={cl.preheader__image}
            src={fire}
            alt="Fire" 
        />
        <figcaption
            className={`${cl.preheader__text} fontNormal fontUppercase`}
        >
            future of esports
        </figcaption>
    </figure>
  )
}
