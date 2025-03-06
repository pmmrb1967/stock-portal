import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    /*<div>Header</div>*/
    /*<div className='text-light'>Header</div>*/
    /*<div className='text-dark'>Header</div>*/
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-dark' to="/">Stock Prediction Portal</Link>

        <div>
          <Button text='Login' class="btn-outline-info" url="/login" />
          &nbsp;
          <Button text='Register' class="btn-info" url="/register" /> 
        </div>

      </nav>
    </>   
  )
}

export default Header