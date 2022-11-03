/* eslint-disable react/prop-types */
import React from 'react';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutFoto from '../../content/aboutFoto.jpg';
import {
  faLinkedin,
  faInstagram,
  faGithub,
} from '@fortawesome/free-brands-svg-icons';
import {
  faAt,
  faGraduationCap,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

import './About.css';

const AboutItem = (props) => {
  return (
    <div className="aboutInfoDetailsItem">
      <FontAwesomeIcon
        className="aboutInfoDetailsIcon"
        icon={props.item.icon}
      />
      {props.item.link}
    </div>
  );
};

const AboutDetails = () => {
  const ABOUT_DETAILS_ITEMS = [
    {
      icon: faLinkedin,
      link: (
        <a
          className="capitalized"
          href="https://linkedin.com/in/trandobulo/"
          target="_blank"
          rel="noreferrer"
        >
          linkedin
        </a>
      ),
    },
    {
      icon: faAt,
      link: <a href="mailto: trandobulo@gmail.com">trandobulo@gmail.com</a>,
    },
    {
      icon: faGraduationCap,
      link: (
        <a
          className="uppercased"
          href="https://onmu.odessa.ua"
          target="_blank"
          rel="noreferrer"
        >
          onmu
        </a>
      ),
    },
    {
      icon: faInstagram,
      link: (
        <a
          className="capitalized"
          href="instagram.com//trand.oleksandr"
          target="_blank"
          rel="noreferrer"
        >
          instargam
        </a>
      ),
    },
    {
      icon: faPaperPlane,
      link: (
        <a href="https://t.me/trand_alexandr" target="_blank" rel="noreferrer">
          +380938190948
        </a>
      ),
    },
    {
      icon: faGithub,
      link: (
        <a
          className="capitalized"
          href="https://github.com/trandobulo"
          target="_blank"
          rel="noreferrer"
        >
          github
        </a>
      ),
    },
  ];

  return (
    <div className="aboutInfoDetails">
      {ABOUT_DETAILS_ITEMS.map((item, index) => (
        <AboutItem item={item} key={index} />
      ))}
    </div>
  );
};

const ABOUT_TEXT = `I am an enthusiastic and detail-oriented beginner Front-end Developer,
seeking an entry position in a company, to use and improve my skills
in commercial project development. While studying I&apos;m trying to
have a deep understanding of every new technology and am always highly
motivated to solve the unfamiliar complex tasks`;

function About() {
  return (
    <div className="about" id="about">
      <img className="aboutFoto" src={aboutFoto} alt="author foto" />
      <div className="aboutInfo">
        <h1 className="title">More Info About Me</h1>
        <p className="aboutInfoText">{ABOUT_TEXT}</p>
        <AboutDetails />
        <div className="aboutButtons">
          <Button
            label="Download C.V."
            link="https://drive.google.com/file/d/1m71Ha2z2gDrNQ7VPGYZdrhLPviKvfSlV/view?usp=sharing"
            newTab={true}
          />
          <Button label="Hire Me" type="primary" link="#contacts" />
        </div>
      </div>
    </div>
  );
}

export default About;
