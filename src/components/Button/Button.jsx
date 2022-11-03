import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Button.css';

function Button(props) {
  const btnClass = props.type === 'primary' ? 'button primaryButton' : 'button';

  const button = (
    <button className={btnClass}>
      {props.label}
      {props.icon && <FontAwesomeIcon className="btnIcon" icon={props.icon} />}
    </button>
  );

  const linkedButton = props.newTab ? (
    <a href={props.link} rel="noreferrer" target="_blank">
      {button}
    </a>
  ) : (
    <a href={props.link}>{button}</a>
  );

  return linkedButton;
}

export default Button;
