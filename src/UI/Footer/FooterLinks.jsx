import React from 'react'
import cl from './FooterLinks.module.css'
import FooterLink from './FooterLink'
export default function FooterLinks({...props}) {
  return (
    <div className={cl.footer__links}>
        <h4 className={`${cl.footer__linksHeader} fontNormal fontCapitalize`}>
            {props.headerText}
        </h4>
        {props.LinksArr.map((link) =>
            <FooterLink
                linkText={link.linkText}
                linkHref={link.linkHref}
            />
        )}
    </div>
  )
}
