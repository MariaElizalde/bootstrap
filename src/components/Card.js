import React from 'react'


export default function Card({id,title,image,instructor,price,url}) {
  return (
    <div className='card text-center bg-dark'>
        <div className='card-body text-light'>
        <img src={image} alt=''className='imgStyle'/>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
            {instructor}
        </p>
         <p> Precio: {price}</p>

        <a href={url} className='btn btn-outline-secondary rounded-0'>Más información</a>
        </div>
    </div>
  )
}
