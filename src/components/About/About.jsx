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
    <p>
      <FontAwesomeIcon className="aboutDetailsIcon" icon={props.item.icon} />
      {props.item.link}
    </p>
  );
};

const AboutDetails = () => {
  const items = [
    {
      icon: faLinkedin,
      link: (
        <a
          href="https://linkedin.com/in/trandobulo/"
          target="_blank"
          rel="noreferrer"
        >
          Linkedin
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
        <a href="https://onmu.odessa.ua" target="_blank" rel="noreferrer">
          ONMU
        </a>
      ),
    },
    {
      icon: faInstagram,
      link: (
        <a
          href="instagram.com//trand.oleksandr"
          target="_blank"
          rel="noreferrer"
        >
          Instargam
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
          href="https://github.com/trandobulo"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      ),
    },
  ];

  let key = 0;
  return (
    <div>
      {items.map((x) => (
        <AboutItem item={x} key={key++} />
      ))}{' '}
    </div>
  );
};

function About() {
  return (
    <div className="about" id="about">
      <img className="aboutFoto" src={aboutFoto} alt="author foto" />
      <div className="aboutInfo">
        <h1 className="title">More Info About Me</h1>
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
          <a
            href="https://drive.google.com/file/d/1m71Ha2z2gDrNQ7VPGYZdrhLPviKvfSlV/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <Button label="Download C.V." />
          </a>
          <a href="#contacts">
            <Button label="Hire Me" type="primary" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
