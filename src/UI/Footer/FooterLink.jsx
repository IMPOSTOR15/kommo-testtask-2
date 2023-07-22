import React from 'react'
import cl from './FooterLink.module.css'
export default function FooterLink({...props}) {
  return (
    <a
        className={`${cl.footer__link} fontNormal fontCapitalize`}
        href={props.linkHref}
    >
        {props.linkText}
    </a>
  )
}
