import React from 'react'
import './Product.css'
import Card from '../Card/Card'
const Product = ({products}) => {
    console.log(products)
  return (
    <div className='prod-dis'>
        <div className="prod-name"><h1>Product Page</h1></div>
        <div className='prod-display'>
            {products.map((item,idx)=>(
                <Card key={idx} category={item.category}  desc={item.description} rating={item.rating} name={item.name} price={item.price} image={item.image}  />
            ))}
             
        </div>
       
    </div>
  )
}

export default Product