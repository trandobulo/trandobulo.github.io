import Menu from './Menu.jsx';
import React from 'react';
import Logo from './Logo.jsx';
import HeaderMid from './HeaderMid.jsx';

function Header(){

    return(
    <>
      <div className='navBar'>
        <Logo />
        <Menu />
      </div>
      
      <div className='header'>
        <HeaderMid />
      </div>
    </>
    )
}



export default Header