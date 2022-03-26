import React from 'react'
import './Cart.css'

function Cart(props) {
    const { name, img } = props.cartData;
    console.log(name);
  return (
      <div className='cart-item'>
          <img src={img} alt="" />
          <p>{name}</p>
      </div>
  )
}

export default Cart