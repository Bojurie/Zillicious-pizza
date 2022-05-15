import React from 'react'
import './Header.css'

const Header = (props) => {
  return (
    <div className='header bgImage s'>
      <h2>{props.title}</h2>
    </div>
  )
}

export default Header
