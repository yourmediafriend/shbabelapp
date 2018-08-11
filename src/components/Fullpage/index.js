import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import cx from 'classnames';
import styles from './fullpage.scss';

const FullpageWrapper = props => {

  const fullPageOptions = {
    sectionsColor: [ '#4BBFC3', '#7BAABE', '#000'],
  };

  return (
    <ReactFullpage {...fullPageOptions}  render={({ state, fullpageApi }) => {
      return (
        <div>

          <div className="section">
            <p>Section 1 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
          </div>

          <div className="section">
            <p>Section 2</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>Click me to move down</button>
          </div>

          <div className="section">
            <p>Section 3</p>
          </div>

        </div>
      );

  }}/>);

}

export default FullpageWrapper;

