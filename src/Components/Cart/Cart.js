import React from 'react'
import './Cart.css'

function Cart(props) {
    const { name, price, img } = props.cartData;
  return (
      <div className='cart-item'>
          <img src={img} alt="" />
          <p>{name}</p>
          <p>price: ${ price }</p>
      </div>
  )
}

export default Cart