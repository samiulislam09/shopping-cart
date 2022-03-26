import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import './Product.css'

function Product(props) {
  const { name, price, img, id } = props.product;
  const {handleAddToCart} = props;
  return (
      <div className='card'>
          <img className='image' src={img} alt={name} />
          <div className="product-details">
              <h4>{name}</h4>
              <p>price ${ price }</p>
          </div>
          <button onClick={()=>handleAddToCart(props.product)}><p>Add to cart <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></p></button>
    </div>
  )
}

export default Product