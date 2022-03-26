import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

function Shop() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('laptopsdata.json')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        setCart([...cart, product])
        console.log(cart);
    }
  return (
      <div className='shop'>
          <div className="product-container">
              {
                  products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
              }
          </div>
          <div className="cart-container">
              {
                  cart.map(cartData=> <Cart cartData={cartData}></Cart>)
              }
          </div>
    </div>
  )
}

export default Shop