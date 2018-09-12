import React, { Component } from 'react';
import cx from 'classnames';
import styles from './homepage.scss'

import createjs from 'easeljs-react';

import {
  StageComponent, BitmapComponent, ContainerComponent, ShapeComponent, TextComponent
} from "easeljs-react";

const Shape = createjs.Shape;
const Stage = createjs.Stage;



// class CanvasComponent extends React.Component {
//   stage;
//   shape;
//   setStageRef = n => this.stage = n.stage;
//   setShapeRef = n => this.shape = n;
//   render() {
//     return (
//       <StageComponent width={640} height={480} ref={this.setStageRef}>
//         <ShapeComponent ref={this.setShapeRef} />
//       </StageComponent>
//     );
//   }
// }

class HomeCanvas extends Component {
  render() {
    return (
      <div>

      </div>
    )
  }
}

export default HomeCanvas;
