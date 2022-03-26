import React from 'react'
import './Header.css'

function Header() {
  return (
      <div>
          <nav className='navbar'>
              <div className="logo">hello</div>
              <div className="menu">
                  <ul>
                      <li><a href="/shop">Shop</a></li>
                      <li><a href="/orders">Orders</a></li>
                      <li><a href="/about">About</a></li>
                  </ul>
              </div>
          </nav>
    </div>
  )
}

export default Header