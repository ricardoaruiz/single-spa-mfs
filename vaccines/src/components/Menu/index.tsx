import React from 'react'
import { CustomLink } from '../CustomLink'

import './styles.css'

const Menu = () => {
  return (
    <nav className="menu-vaccines">
      <ul>
        <li>
          <CustomLink to="/vaccines/covid">Covid</CustomLink>
        </li>
        <li>
          <CustomLink to="/vaccines/influenza">Influenza</CustomLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu