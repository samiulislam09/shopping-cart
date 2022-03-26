import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

function Shop() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState([])

    useEffect(() => {
        fetch('laptopsdata.json')
            .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    const handleAddToCart = (product) => {
        if (cart.length < 4) {
            setCart([...cart, product])
        }
    }
    const chooseHandler = () => {
        const randomNumber = Math.floor(Math.random(4) * 3);
        setRandom(cart[randomNumber])
        console.log(random);
    }
    const resetCart = () => {
        setCart([])
        setRandom([])
    }
  return (
      <div className='shop'>
          <div className="product-container">
              {
                  products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
              }
          </div>
          <div className="cart-container">
              <h3>Laptop for you</h3>
              <hr />
              {
                  cart.map(cartData=> <Cart cartData={cartData} key={cartData.id}></Cart>)
              }
                  <h4>Choose for me</h4>
              <div className='cart-item'>
                  <img src={random.img} alt={random.name} />
                  <p>{random.name}</p>
                  <p>price: ${random.price}</p>
              </div>
              <button onClick={chooseHandler} className='choose-button'>Choose one</button>
              <button onClick={resetCart} className='reset'>Reset</button>
          </div>
    </div>
  )
}

export default Shop