import React, { Component } from 'react';
import cx from 'classnames';
import styles from './homepage.scss'

import { Stage, Sprite, Container } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js';

import cat from './media/cat.png'

class CanvasTest extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}  options={{ backgroundColor: 0xff00ea }}>
        <Sprite texture={PIXI.Texture.fromImage(cat)} />
        <Container></Container>
      </Stage>
    );
  }
}

class HomeCanvas extends Component {
  render() {
    return (
      <div>
        <CanvasTest />
      </div>
    )
  }
}


export default HomeCanvas;
