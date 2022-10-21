import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

import './Button.css';

function Button(props) {
  let btnClass = 'button ';

  if (props.type === 'primary') {
    btnClass += 'primaryButton';
  }

  return (
    <button className={btnClass}>
      {props.label}
      {props.icon && <FontAwesomeIcon className="btnIcon" icon={props.icon} />}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default Button;
