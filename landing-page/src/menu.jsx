import MenuItem from './MenuItem.jsx';
import React from 'react'; 

function Menu(){
   return(
      <div className='menu'>
          <MenuItem name='Home' href='#home'/>
          <MenuItem name='About' href='#about'/>
          <MenuItem name='Resume' />
          <MenuItem name='Gallery' />
          <MenuItem name='Contacts' />
        </div>
       )

}

export default Menu