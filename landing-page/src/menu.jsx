import MenuItem from './menu-item.jsx';
import React from 'react'; 

function Menu(){
   return(
      <div className='menu'>
          <MenuItem name='Home' />
          <MenuItem name='About' />
          <MenuItem name='Resume' />
          <MenuItem name='Gallery' />
          <MenuItem name='Contacts' />
        </div>
       )

}

export default Menu