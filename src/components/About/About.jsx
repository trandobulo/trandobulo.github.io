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

const ABOUT_TEXT = (
  <>
    <p>
      I am a communicative, detail-oriented, and creative beginner Front-end
      Developer. And I am seeking a junior position in a company, to use and
      improve my skills, working hand-to-hand with experienced engineers in
      commercial project development. My current experience is represented by
      the following projects:
    </p>
    <ul>
      <li>
        SPA internet store with cart on React (class-based approach), using
        GraphQL (Apollo) & React-Router. Working with state a lot, using Refs,
        and lifecycle methods, I’ve sharped skills in reusing, refactoring, and
        structuring code, including CSS with BEM
      </li>
      <li>
        A notes app in three approaches: 1. Pure JS, 2. React + Redux on
        TypeScript 3. Serverside app on Express.js on TypeScript. While doing
        this app I’ve improved my understanding of DOM, and events, using the
        MVC pattern and OOP paradigm. Also, got experience with Tailwind.css,
        Storybook, and Postman.
      </li>
      <li>
        Personal landing page on React (functional approach) with a contact form
        connected to MailJS service and ReCaptcha. Simple animation, semantic
        usage of HTML, usage of ESlint. Deployment on gh-pages
      </li>
      <li>
        Job Board application on React (functional approach) using TypeScript,
        Tailwind.css, React-Router, and Google Map API. Creating a responsive
        design,
      </li>
    </ul>
    <p>
      Also I can read, understand and work with unfamiliar code. While studying
      trying to have a deep understanding of every new technology and am always
      highly motivated to solve the complex tasks
    </p>
  </>
);

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
