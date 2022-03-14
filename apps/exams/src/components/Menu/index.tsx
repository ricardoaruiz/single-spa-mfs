import React from 'react'
import { CustomLink } from '../CustomLink'

import './styles.css'

const Menu = () => {
  return (
    <nav className="menu-exams">
      <ul>
        <li>
          <CustomLink to="/exams/labs">Labs</CustomLink>
        </li>
        <li>
          <CustomLink to="/exams/patients">Patients</CustomLink>
        </li>
      </ul>
    </nav>
  )
}

export default Menu