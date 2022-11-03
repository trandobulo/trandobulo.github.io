import React, { useState, useEffect } from 'react';
import Lama from '../../content/testimonialsPhoto/Lama.jpg';
import Mask from '../../content/testimonialsPhoto/Mask.jpg';
import Mommy from '../../content/testimonialsPhoto/Mommy.jpg';
import {
  faChevronCircleRight,
  faChevronCircleLeft,
} from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Testimonials = () => {
  const [activeItem, setActiveItem] = useState(0);
  const items = [
    {
      photo: Lama,
      text: `"The best specialist - is a Junior Specialist! Because 
      every challenge he takes becomes life-valued for him like it 
      child does. Working with Oleksandr filled me full of peace and love. 
      I recommend"`,
      author: 'Dalai Lama',
    },
    {
      photo: Mask,
      text: `"Global war with AI always scared me a lot. After cooperating
       with Oleksandr I'm pretty sure, it will be soon. Great experience"`,
      author: 'Elon Mask',
    },

    {
      photo: Mommy,
      text: `"Oleksandr is a great specialist with excellent knowledge
      of his expertise. He is able to solve complicated problems really
      fast and always delivers clear and stable code. Have I said it all
      right, honey?"`,
      author: 'My Mom',
    },
  ];

  const itemTemplate = (photo, text, author, id) => {
    const testimonialsClass = () =>
      id === activeItem ? 'activeTestimonialsItem' : 'testimonialsItem';

    return (
      <div className={testimonialsClass()} key={id}>
        <div className="testimonialsPhotoContainer">
          <img className="testimonialsPhoto" src={photo} />
        </div>
        <div className="testimonialsTextContainer">
          <i className="testimonialsText">{text}</i>
          <i className="testimonialsAuthor">{`- ${author}`}</i>
        </div>
      </div>
    );
  };

  const navCircleClass = (id) => {
    return activeItem === id ? 'navCircle activeNavCircle' : 'navCircle';
  };

  const navigate = (direction) => {
    switch (direction) {
      case 'right':
        activeItem === items.length - 1
          ? setActiveItem(0)
          : setActiveItem(activeItem + 1);
        break;
      case 'left':
        activeItem === 0
          ? setActiveItem(items.length - 1)
          : setActiveItem(activeItem - 1);
        break;
      default:
    }
  };

  useEffect(() => {
    const navTimer = setInterval(() => {
      navigate('right');
    }, 8000);

    return () => {
      clearInterval(navTimer);
    };
  });

  return (
    <div className="testimonialsBlock" id="testimonials">
      <h1 className="title" style={{ position: 'absolute', top: '20px' }}>
        Testimonials
      </h1>
      <div className="testimonialsListContainer">
        <FontAwesomeIcon
          className="navChevrone"
          icon={faChevronCircleLeft}
          onClick={() => navigate('left')}
        />
        {items.map((item, index) => {
          return itemTemplate(item.photo, item.text, item.author, index);
        })}
        <FontAwesomeIcon
          className="navChevrone"
          icon={faChevronCircleRight}
          onClick={() => navigate('right')}
        />
      </div>
      <div className="navCirclesContainer">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              className={navCircleClass(index)}
              onClick={() => setActiveItem(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
