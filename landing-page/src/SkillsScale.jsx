import React from 'react';

const skills = [
  { name: 'JavaScript', value: '20%' },
  { name: 'React', value: '10%' },
  { name: 'HTML', value: '60%' },
  { name: 'CSS', value: '40%' },
  { name: 'Git', value: '30%' },
  { name: 'Bash Shell', value: '40%' },
];

const SkillsScale = () => {
  return skills.map((item, index) => (
    <div className="skillsScale" key={index}>
      <div className="skillItem">
        <h4>{item.name}</h4>
        <div className="progressBar">
          <span style={{ width: item.value }}></span>
        </div>
      </div>
    </div>
  ));
};

export default SkillsScale;
