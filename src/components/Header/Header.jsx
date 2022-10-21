import Menu from './Menu/Menu';
import React, { useState, useEffect } from 'react';
import Typed from 'react-typed';

import './Header.css';

function Header() {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setPosition(window.scrollY);
    });
  });

  const headerClass = (scroll) => {
    return scroll > 100 ? 'navBarScrolled' : 'navBar';
  };

  const textLines = ['Junior Frontend Developer'];

  return (
    <>
      <div className={headerClass(position)}>
        <h2 className="logo">Trandobulo Aleksandr</h2>
        <Menu />
      </div>

      <div className="header" id="home">
        <div className="headerTitle">
          <h2 className="textOrange">Hello,</h2>
          <h1>I&apos;m Alex</h1>
          <h1 className="textTyping textOrange">
            <Typed
              strings={textLines}
              typeSpeed={60}
              backSpeed={30}
              loop={true}
            />
          </h1>
        </div>
      </div>
    </>
  );
}

export default Header;
