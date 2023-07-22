
import React, { useState } from 'react'
import cl from './Footer.module.css'
import logo from '../../assets/Header/headerLogo.svg'
import FooterLinks from '../../UI/Footer/FooterLinks'
export default function Footer() {
    const [firstLinkRow, setFirstLinkRow] = useState([
        {
            linkText: 'About',
            linkHref: '#'
        },
        {
            linkText: 'Blog',
            linkHref: '#'
        },
        {
            linkText: 'Shop',
            linkHref: '#'
        },
        {
            linkText: 'Contact us',
            linkHref: '#'
        },
    ])
    const [secondLinkRow, setSecondLinkRow] = useState([
        {
            linkText: 'Styleguide',
            linkHref: '#'
        },
        {
            linkText: 'Changelog',
            linkHref: '#'
        },
        {
            linkText: 'licenses',
            linkHref: '#'
        },
        {
            linkText: 'Team',
            linkHref: '#'
        },
    ])
    return (
        <footer className={`${cl.footer} contentWrapper`}>
            <div className={cl.footer__infoColumn}>
                <img className={cl.footer__logo} src={logo} alt="Лого" />
                <p className={cl.footer__infoText}>Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .</p>
            </div>
            <FooterLinks LinksArr={firstLinkRow} headerText={"Menu Items"}/>
            <FooterLinks LinksArr={secondLinkRow} headerText={"Other Pages"}/>
        </footer>
    )
}
