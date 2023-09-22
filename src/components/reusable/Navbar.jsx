import style from './Navbar.module.css'
import { AiFillHome} from 'react-icons/ai'
import { BsFillCartFill, BsFillInboxesFill} from 'react-icons/bs'
import { CgProfile} from 'react-icons/cg'

import React from 'react'

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <ul>
        <li>
          <AiFillHome className={style.icon}/>
        </li>
        <li>
          <BsFillCartFill className={style.icon}/>
        </li>
        <li>
          <BsFillInboxesFill className={style.icon}/>
        </li>
        <li>
          <CgProfile className={style.icon}/>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
