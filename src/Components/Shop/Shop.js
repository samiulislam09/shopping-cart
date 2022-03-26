import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
import './Shop.css'

function Shop() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('laptopsdata.json')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAddToCart = () => {
        console.log('clicked');
    }
  return (
      <div className='shop'>
          <div className="product-container">
              {
                  products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
              }
          </div>
          <div className="cart-container">
              this is cart
          </div>
    </div>
  )
}

export default Shop