import React from 'react'
import cl from './NewsItem.module.css'
export default function NewsItem({ ...props }) {
  return (
    <div className={props?.isFirst ? cl.item_first : ''}>
        <img 
          className={`${cl.item__image} ${props?.isFirst ? cl.item__image_first : ''}`}
          src={props.imageSrc} 
          alt={props.imageAlt} 
        />
        <span className={`${cl.item__dateText} fontNormal  ${props?.isFirst ? cl.item__dateText_first : ''}`}>
            {props.date}
        </span>
        <h3 className={`${cl.item__header} fontNormal fontCapitalize ${props?.isFirst ? cl.item__header_first : ''}`}>{props.header}</h3>
    </div>
  )
}
