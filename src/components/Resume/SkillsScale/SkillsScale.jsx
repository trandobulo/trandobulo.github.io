import React from 'react';
import './SkillsScale.css';
import PropTypes from 'prop-types';

const SkillsScale = (props) => {
  return (
    <div className="content">
      {props.skills.map((item) => (
        <div key={item.name}>
          <h4>{item.name}</h4>
          <div className="progressBar">
            <span style={{ width: item.value }}></span>
          </div>
        </div>
      ))}
    </div>
  );
};

SkillsScale.propTypes = {
  skills: PropTypes.array.isRequired,
};

export default SkillsScale;
