import React from 'react'
import * as singleSpa from 'single-spa';

import './styles.css'

export const Header = () => {

  const [currentPathname, setCurrentPathname] = React.useState('')

  const handleItemMenuClick = (route) => {  
    setCurrentPathname(window.location.pathname)
    singleSpa.navigateToUrl(route);
  }

  const activeMenu = (path: string) => {
    return `${window.location.pathname === path 
      ? 'header__menu-item---active' 
      : ''}`
  }


  return (
    <header className="header">
      <nav className="header__menu">
        <ul>
          <li 
            className={activeMenu('/exams')}
            onClick={() => handleItemMenuClick('/exams')} 
          >
            Exams
          </li>
          <li 
            className={activeMenu('/vaccines')}
            onClick={() => handleItemMenuClick('/vaccines')} 
          >
            Vaccines
          </li>
        </ul>
      </nav>
    </header>
  )
}

