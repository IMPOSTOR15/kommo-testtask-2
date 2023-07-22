import React from 'react'
import cl from './About.module.css'
import characters from '../../../assets/About/Characters.svg'
import lineAccent from '../../../assets/About/lineAccent.svg'
import PreHeader from '../../../UI/MainPage/PreHeader/PreHeader'
export default function About() {
  return (
    <section className={cl.about}>
      <div className={cl.about__backgroundRectangle}></div>
      <div className={cl.about__socialLinks}>
          <a className={`${cl.about__socialLink} fontNormal fontUppercase`} href="#">facebook</a>
          <a className={`${cl.about__socialLink} fontNormal fontUppercase`} href="#">instagram</a>
          <a className={`${cl.about__socialLink} fontNormal fontUppercase`} href="#">twich</a>
        </div>
      <div className={`${cl.about__content} contentWrapper`}>
        <div className={cl.about__info}>
          <PreHeader />
          <h1 className={`${cl.about__header} fontNormal`}>
            Unleash the Next 
            <span>
              &nbsp;Generation 
              <img className={cl.about__accent} src={lineAccent} alt="Line accent" /> 
            </span>
            of Gaming
          </h1>
          
          <p className={`${cl.about__description} fontNormal`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis, nec donec in morbi pulvinar. Enim non pulvinar neque.</p>
          <div className={cl.about__buttons}>
            <button className={`${cl.about__buttonColored} fontNormal fontCapitalize`} type='button'>Explore More</button>
            <button className={`${cl.about__buttonTransparent} fontNormal`} type='button'>View our team</button>
          </div>
        </div>
        
        <img className={cl.about__image} src={characters} alt="Characters" />
      </div>
    </section>
  )
}
