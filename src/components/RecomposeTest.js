import React from 'react';

import { compose, withState, withHandlers } from 'recompose'


const withToggle = compose(
  withState('toggledOn', 'toggle', false),
  withHandlers({
    show: ({ toggle }) => (e) => {
      toggle (true)
/*      console.log('show', toggle)*/
    },
    hide: ({ toggle }) => (e) => {
      toggle (false)
/*      console.log('hide', toggle)*/
    },
    toggle: ({ toggle }) => (e) => toggle((current) => !current)
  })
)

const StatusList = () =>
  <div className="StatusList">
    <div>pending</div>
    <div>inactive</div>
    <div>active</div>
  </div>;

const Status = withToggle(({ status, toggledOn, toggle }) => {

  console.log(toggledOn);

  return (
    <span onClick={ toggle }>
      { status }
      { toggledOn && <StatusList /> }
    </span>
  );

});


const Tooltip = withToggle(({ text, children, toggledOn, show, hide }) => {

  console.log(toggledOn);

  return (<span>
        { toggledOn && <div className="Tooltip">{ text }</div> }
        <span onMouseEnter={ show } onMouseLeave={ hide }>{ children }</span>
      </span>
    );

});


const User = ({ name, status }) =>
  <div className="User">
    <Tooltip text="Cool Dude!">{ name }</Tooltip>—
    <Status status={ status } />
  </div>;

const App = () =>
  <div>
    <User name="Tim" status="active" />
  </div>;



export default App;