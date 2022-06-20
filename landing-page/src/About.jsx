/* eslint-disable react/prop-types */
import React from 'react';
import Button from './Button.jsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutFoto from './content/aboutFoto.jpg';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faGraduationCap,
  faLocationDot,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
    <div className="about">
      <img className="aboutFoto" src={aboutFoto} alt="author foto" />
      <div className="aboutInfo">
        <h2 className="thin">More Info About Me</h2>
        <p>
          I am an enthusiastic and detail-oriented beginner Front-end Developer,
          seeking an entry position in a company, to use and improve my skills
          in commercial project development. While studying I&apos;m trying to
          have a deep understanding of every new technology and am always highly
          motivated to solve the unfamiliar complex tasks
        </p>
        <div className="aboutDetails">
          <AboutDetails />
        </div>
        <div className="aboutButtons">
          <Button label="Download C.V." />
          <Button label="Hire Me" type="primary" />
        </div>
      </div>
    </div>
  );
}

const AboutDetails = () => {
  const items = [
    {
      icon: faLinkedin,
      link: 'https://linkedin.com/in/trandobulo/',
      text: 'Linkedin',
    },
    {
      icon: faAt,
      link: 'mailto: trandobulo@gmail.com',
      text: 'trandobulo@gmail.com',
    },
    { icon: faGraduationCap, link: 'https://onmu.odessa.ua', text: 'ONMU' },
    {
      icon: faInstagram,
      link: 'instagram.com//trand.oleksandr',
      text: 'Instagram',
    },
    {
      icon: faPaperPlane,
      link: 'https://t.me/trand_alexandr',
      text: '+380938190948',
    },
    { icon: faLocationDot, text: 'Odessa, Ukraine' },
  ];

  const AboutItem = (props) => (
    <p>
      <FontAwesomeIcon className="aboutDetailsIcon" icon={props.item.icon} />
      <a href={props.item.link}>{props.item.text}</a>
    </p>
  );

  let key = 0;
  return (
    <div>
      {items.map((x) => (
        <AboutItem item={x} key={key++} />
      ))}{' '}
    </div>
  );
};

export default About;
