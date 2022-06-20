import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {
  faGraduationCap,
  faBriefcaseBlank,
} from '@fortawesome/free-solid-svg-icons';

function MainIcon(props) {
  return (
    <div className="resumeIcon">
      <span>
        <FontAwesomeIcon icon={props.icon} />
      </span>
    </div>
  );
}

const educationInfo = {
  icon: faGraduationCap,
  content: [
    {
      period: '2007-2013',
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna cillum dolore eu fugiat aliqua.',
    },
    {
      period: '2020',
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna cillum dolore eu fugiat aliqua.',
    },
    {
      period: '2020',
      title: 'Lorem ipsum dolor sit amet',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna cillum dolore eu fugiat aliqua.',
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
