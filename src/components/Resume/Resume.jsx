/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import TimeScale from './TimeScale/TimeScale';
import SkillsScale from './SkillsScale/SkillsScale';

import './Resume.css';

function Resume() {
  const Tab = (props) => (
    <div
      id={'tab-' + props.tab.dataid}
      className={props.tab.active ? 'tab active' : 'tab'}
      onClick={props.click}
      data-id={props.tab.dataid}
    >
      {props.tab.value}
    </div>
  );

  const [state, setState] = useState({ activeTab: '0' });

  function Switcher(props) {
    const tabs = [{ value: 'Education' }, { value: 'Skills' }]; // {name: .. , component: ..} review all component

    return (
      <div className="switcher">
        {tabs.map((item, index) => {
          props.state.activeTab == index
            ? (item.active = true)
            : (item.active = false);

          item.dataid = index;

          return (
            <Tab
              tab={item}
              key={index}
              click={(e) => {
                setState({ activeTab: e.currentTarget.dataset.id });
              }}
            />
          );
        })}
      </div>
    );
  }

  const SKILLS = [
    { name: 'JavaScript', value: '50%' },
    { name: 'TypeScript', value: '20%' },
    { name: 'React', value: '40%' },
    { name: 'Redux', value: '40%' },
    { name: 'GraphQL', value: '10%' },
    { name: 'HTML', value: '60%' },
    { name: 'CSS', value: '60%' },
    { name: 'Git', value: '40%' },
    { name: 'Webpack', value: '20%' },
    { name: 'Tailwind.css', value: '30%' },
    { name: 'Express', value: '20%' },
  ];

  return (
    <div className="resume" id="resume">
      <h1 className="title">My Resume</h1>
      <Switcher state={state} />
      {state.activeTab === '0' && <TimeScale />}
      {state.activeTab === '1' && <SkillsScale skills={SKILLS} />}
    </div>
  );
}

export default Resume;
