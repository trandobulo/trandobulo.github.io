import React, { useState } from 'react';
import './Menu.css';

function Menu() {
  const [activeItem, setActiveItem] = useState('');
  const menuItems = ['home', 'about', 'resume', 'testimonials', 'contacts'];

  const underlineClass = (item) => {
    return activeItem === item ? 'underline underlineAnimated' : 'underline';
  };

  return (
    <div className="menu">
      {menuItems.map((item) => {
        return (
          <div className="menuItemContainer" key={item}>
            <a
              className="menuItem"
              onClick={() => {
                setActiveItem(item);
              }}
              href={`#${item}`}
            >
              {item}
            </a>
            <div className={underlineClass(item)}></div>
          </div>
        );
      })}
    </div>
  );
}

export default Menu;
