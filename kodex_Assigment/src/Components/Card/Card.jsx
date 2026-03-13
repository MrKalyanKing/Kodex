import React from 'react'
import './Card.css'
const Card = ({name,price,category,image,rating,desc}) => {
  return (
    
    <div className='card-container '>
        <div className="con">
            <div className="prod-img">
                <img src={image} alt="Image not available" />
            </div>
            <div className="prod-name">
                <h3>{name}</h3>
            </div>
            <div className="prod-cat">
                <h3>{category}</h3>
            </div>
            <div className="desc">
                <span>{desc}</span>
            </div>
            <div className="rate-price">
                <div className="rate">
                    {Array.from({length:rating}).map((i)=>(
                        <i key={i} class="fa-solid fa-star" style={{color: "rgb(255, 212, 59)"}}></i>
                    ))}
                    
                    </div>
                <div className="price">
                    <span>&#8377; {price}</span>
                </div>
            </div>
            <div className="btn">
                <button>Add to Cart</button>
            </div>
        </div>
        
    </div>
  )
}

export default Card