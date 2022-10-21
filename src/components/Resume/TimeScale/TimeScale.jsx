import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons';

import './TimeScale.css';

function MainIcon(props) {
  return (
    <div className="resumeIcon">
      <span>
        <FontAwesomeIcon icon={props.icon} />
      </span>
    </div>
  );
}

MainIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

const educationInfo = {
  icon: faGraduationCap,
  content: [
    {
      period: '2019',
      title: 'Hillel IT School',
      text: 'Project Management IT',
    },
    {
      period: '2011-2013',
      title: 'Odesa National Maritime University',
      text: 'Information Control System and Technologies',
    },
    {
      period: '2007-2011',
      title: 'Odesa National Maritime University',
      text: 'Computer Science',
    },
  ],
};

function InfoBlock(props) {
  let classDirection;

  return props.content.map((item, index) => {
    index % 2
      ? (classDirection = 'contentBlock left')
      : (classDirection = 'contentBlock');

    return (
      <div className={classDirection} key={index}>
        <div className="period">
          <span>{item.period}</span>
        </div>
        <div className="branch">
          <div className="point"></div>
          {index !== props.content.length - 1 && <div className="line"></div>}
        </div>
        <div className="description">
          <h4>{item.title}</h4>
          <p>{item.text}</p>
        </div>
      </div>
    );
  });
}

function TimeScale() {
  return (
    <div className="content">
      <MainIcon icon={educationInfo.icon} />
      <div className="iconLine"></div>
      <InfoBlock content={educationInfo.content} />
    </div>
  );
}

export default TimeScale;
