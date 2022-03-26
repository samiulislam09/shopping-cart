import React, { useEffect, useState } from 'react'
import Cart from '../Cart/Cart'
import Product from '../Product/Product'
import './Shop.css'

function Shop() {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [random, setRandom] = useState([])
    const [show, setShow] = useState(true)

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
        if (cart.length>0) {
            setRandom(cart[randomNumber])
        }
    }
    const resetCart = () => {
        setCart([])
        setRandom([])
    }
  return (
      <div className="container">
          <button className='open-btn' onClick={() => setShow(true)} >Show Cart</button>
          <button className='close-btn' onClick={() => setShow(false)} >Hide Cart</button>
          <h2 className='title'>Laptops for you</h2>
          <div className='shop'>
              <div className="product-container">
                  {
                      products.map(product => <Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
                  }
              </div>
              {
                  show ? <div className="cart-container">
                      <h3>Laptop for you</h3>
                      <hr />
                      {
                          cart.map(cartData => <Cart cartData={cartData} key={cartData.id}></Cart>)
                      }
                      <h4>Choose for me</h4>
                      <div className='cart-item'>
                          <img src={random.img} alt={random.name} />
                          <p>{random.name}</p>
                          <p>price: ${random.price}</p>
                      </div>
                      <button onClick={chooseHandler} className='choose-button'>Choose one for me</button>
                      <button onClick={resetCart} className='reset'>Choose again</button>
                  </div> : null
              }
          </div>
      </div>
  )
}

export default Shop