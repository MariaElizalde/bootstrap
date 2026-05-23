import React from 'react';
import Card from './Card'; 
import image1 from "../assets/c#.png"
import image2 from "../assets/java_logo.png"
import image3 from "../assets/Python-300x300.png"

const cards=[
  {
    id:1,
    title: 'Curso de C#',
    image: image1,
    instructor: 'María Elizalde',
    price:'$200 mxn',
    url:'https://www.google.com'
  },
  {
    id:2,
    title: 'Curso de Java',
    image: image2,
    instructor: 'B. Samuel Lopez Razo',
    price:'$300 mxn',
    url:'https://www.google.com'
  },
  {
    id:3,
    title: 'Curso de Python',
    image: image3,
    instructor: 'María Elizalde',
    price:'$500 mxn',
    url:'https://www.google.com'
  }
]

export default function Cards() {
    console.log(cards)
  return (
<div className="container d-flex justify-content-center align-items-center h-100">
  <div className="row"> {/* <--- ESTA LÍNEA ES VITAL */}
{
    cards.map(c => (
        <div className='col-md-4' key={cards.id}>
            <Card
            key={c.id}
            id={c.id}
            title={c.title}
            image={c.image}
            instructor={c.instructor} 
            price={c.price}
            url={c.url}
            />

        </div>
    ))
}
    </div>
  </div>
  )
}