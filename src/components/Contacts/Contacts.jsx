import React from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faLocationDot,
  faPaperPlane,
  faCheck,
} from '@fortawesome/free-solid-svg-icons';
import ReCAPTCHA from 'react-google-recaptcha';
import './Contacts.css';

const ContactBox = () => {
  return (
    <div className="contactBox">
      {[
        {
          icon: faPaperPlane,
          title: 'Phone',
          text: (
            <a
              href="https://t.me/trand_olexandr"
              target="_blank"
              rel="noreferrer"
            >
              +380938190948
            </a>
          ),
        },
        {
          icon: faLinkedin,
          title: 'LinkedIn',
          text: (
            <a
              href="https://linkedin.com/in/trandobulo"
              target="_blank"
              rel="noreferrer"
            >
              Oleksandr Trandobulo
            </a>
          ),
        },
        {
          icon: faInstagram,
          title: 'Instagramm',
          text: (
            <a
              href="https://instagram.com/trand.oleksandr"
              target="_blank"
              rel="noreferrer"
            >
              @trand.oleksandr
            </a>
          ),
        },
        {
          icon: faLocationDot,
          title: 'Ukraine',
          text: (
            <a
              href="https://goo.gl/maps/FWAbYhQYYGN8Epnm7"
              target="_blank"
              rel="noreferrer"
            >
              Odessa
            </a>
          ),
        },
      ].map((item) => {
        return (
          <div key={item.title} className="contactItem">
            <FontAwesomeIcon
              className="contactIcon"
              icon={item.icon}
              key={item.title}
            />
            <h4>{item.title}</h4>
            <p>{item.text}</p>
          </div>
        );
      })}
    </div>
  );
};

const ContactForm = () => {
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [isSend, setIsSend] = useState(false);
  const [recapchaVisibility, setRecapchaVisibility] = useState(false);

  const form = useRef();

  const submitButtonClass = submitDisabled
    ? 'formButton buttonDisabled'
    : 'formButton';

  const formTemplate = () => (
    <form
      className="contactForm"
      ref={form}
      onSubmit={sendData}
      onChange={() => {
        setRecapchaVisibility(true);
      }}
    >
      <h1>Contact me</h1>
      <input
        className="formInput"
        placeholder="Name*:"
        type="text"
        name="name"
        required
      />
      <input
        className="formInput"
        placeholder="E-mail*:"
        type="email"
        name="email"
        required
      />
      <input
        className="formInput"
        placeholder="Phone number: +3801234567890"
        pattern="((\+38)?\(?\d{3}\)?[\s\.-]?(\d{7}|\d{3}[\s\.-]\d{2}[\s\.-]\d{2}|\d{3}-\d{4}))"
        type="tel"
        name="tel"
      />
      <textarea
        className="formInput formMessage"
        placeholder="Your message*:"
        name="message"
        required
      />
      <button
        className={submitButtonClass}
        type="submit"
        disabled={submitDisabled}
      >
        Send
      </button>
      {recapchaVisibility && (
        <ReCAPTCHA
          sitekey="6Le3f5giAAAAAJ2xQD-6R6z8aQS14IL760VtdYFD"
          theme="dark"
          onChange={() => {
            setSubmitDisabled(!submitDisabled);
          }}
        />
      )}
    </form>
  );

  const sendData = () => {
    setIsSend('loading');

    emailjs
      .sendForm(
        'service_it9lsv4',
        'feedbackform',
        form.current,
        '8-9J1lUVt13oYhM-q'
      )
      .then(
        () => {
          setIsSend(true);
        },
        (error) => {
          alert(`Error: "${error}" while sending info`);
        }
      );
  };

  const loader = (
    <div className="messageSent">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );

  const formSendMessage = (
    <div className="messageSent">
      <FontAwesomeIcon className="messageSentIcon" icon={faCheck} />
      Your info was successfully sent
    </div>
  );

  return (
    <>
      {!isSend && formTemplate()}
      {isSend === 'loading' && loader}
      {isSend === true && formSendMessage}
    </>
  );
};

const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <ContactForm />
      <ContactBox />
    </div>
  );
};

export default Contacts;
