import React from 'react'
import Button from './Button'

const Header = () => {
  return (
    /*<div>Header</div>*/
    /*<div className='text-light'>Header</div>*/
    /*<div className='text-dark'>Header</div>*/
    <>
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a className='navbar-brand text-dark' href="">Stock Portal</a>

        <div>
          <Button text='Login' class="btn-outline-info" />
          &nbsp;
          <Button text='Register' class="btn-info" /> 
        </div>

      </nav>
    </>   
  )
}

export default Header