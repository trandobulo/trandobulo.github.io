import Menu from './menu.jsx';
import React from 'react';
import Logo from './logo.jsx';

function Header(){
    return(
    <div className='header'>
      <Logo />
      <Menu />
    </div>
    )
}

export default Header