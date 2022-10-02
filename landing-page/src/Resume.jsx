/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import TimeScale from './TimeScale';
import SkillsScale from './SkillsScale';

function Resume() {
  const Tab = (props) => (
    <div
      id={'tab-' + props.tab.dataid}
      className={props.tab.active ? 'tab active' : 'tab'}
      onClick={props.click}
      data-id={props.tab.dataid}
    >
      <label>{props.tab.value}</label>
    </div>
  );

  const [state, setState] = useState({ activeTab: 0 });

  function Switcher(props) {
    const tabs = [{ value: 'Education' }, { value: 'Skills' }];

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

  return (
    <div className="resume">
      <h2 className="thin">My Resume</h2>
      <Switcher state={state} />
      {state.activeTab == 0 && <TimeScale />}
      {state.activeTab == 1 && <SkillsScale />}
    </div>
  );
}

export default Resume;
