import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header.jsx';
import Button from './Button.jsx';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <section className='about' id="about">
    <Button className="button" />
    <Button className="button secondButton" icon={faPaperPlane}/>
    </section>
  </React.StrictMode>
);