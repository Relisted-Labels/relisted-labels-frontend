import style from './Navbar.module.css'

import React from 'react'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <ul>
        <li>icon1</li>
        <li>icon2</li>
        <li>icon3</li>
        <li>icon4</li>
      </ul>
    </div>
  )
}

export default Navbar
