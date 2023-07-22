import React from 'react'
import cl from './Character.module.css'
import PreHeader from '../../../UI/MainPage/PreHeader/PreHeader'
import mainCharacter from '../../../assets/Characters/character_main.png'
import card1 from '../../../assets/Characters/card_1.png'
import card2 from '../../../assets/Characters/card_2.png'
import card3 from '../../../assets/Characters/card_3.png'
export default function Character() {
  return (
    <section className={`${cl.character}`}>
        <img
            className={cl.character__img}
            src={mainCharacter}
            alt="character" 
        />
        <div className={`${cl.character__content}`}>
            <PreHeader />
            <h2 className={`${cl.character__header} fontNormal`}>
                Customize your Own Character
            </h2>
            <p className={`${cl.character__description} fontNormal`}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae.</p>
            <div className={`${cl.character__card} ${cl.character__card_active}`}>
                <img
                    className={cl.character__cardImg}
                    src={card1}
                    alt="character 1" 
                />
            </div>
            <div className={cl.character__card}>
                <img
                    className={cl.character__cardImg}
                    src={card2}
                    alt="character 2"
                />
            </div>
            <div className={cl.character__card}>
                <img
                    className={cl.character__cardImg}
                    src={card3}
                    alt="character 3"
                />
            </div>
        </div>
    </section>
  )
}
