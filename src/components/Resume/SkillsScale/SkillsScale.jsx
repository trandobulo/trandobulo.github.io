import React from 'react';
import './SkillsScale.css';

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

export default SkillsScale;
