import React, { Component } from 'react';
import cx from 'classnames';
import styles from './homepage.scss'

import { Stage, Sprite, Container, TilingSprite, Text } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js';

import cat from './media/cat.png'
import puppy from './media/puppy.png'
import mouse from './media/mouse.png'

const bgImages = [cat, puppy, mouse];

let factory_1 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-1.gif";
let factory_2 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-2.gif";
let factory_3 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-3.gif";

const bgImagesFactories = [factory_1, factory_2, factory_3];

let bgVideo = 'https://res.cloudinary.com/dghff7rpa/video/upload/v1536614709/backgrounds/video/abstract_bw.mp4';


PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;


const textBanner = ['Degredation','Exploitation','Despair'];

class SpriteVideo extends Component {

  render() {
    return (
      <Sprite
        texture={PIXI.Texture.fromVideo(bgVideo)}
        width={window.innerWidth}
        height={window.innerHeight}
        autoPlay={true}
      />
    );
  }
}


class SpriteTest extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rotation: 0
    };
  }

  componentDidMount() {
    this.loop()
  }

  loop = (t) => {
    let rotation = this.state.rotation + (Math.cos(t/1000) || 0) * 0.1;
    this.setState({
      rotation: rotation,
    });
    //requestAnimationFrame(this.loop)
  }

  render() {
    return (
      <Sprite
        texture={PIXI.Texture.fromImage(bgImagesFactories[this.props.activeSceneId])}
        width={window.innerWidth}
        height={window.innerHeight}
        x={window.innerWidth/2}
        y={window.innerHeight/2}
        scale={[2 + Math.abs(2 * this.state.rotation), 2 + Math.abs(2 * this.state.rotation)]}
        rotation={this.state.rotation}
        anchor={[0.5,0.5]}
      />
    );
  }
}


class TilingSpriteTest extends Component {
  render() {
    return (
      <TilingSprite
        texture={PIXI.Texture.fromImage(bgImages[this.props.activeSceneId])}
        width={window.innerWidth}
        height={window.innerHeight}
        tilePosition={{ x: 10, y: 10 }}
        tileScale={{ x: 0.2, y: 0.2 }}
      />
    );
  }
}

class TextTest extends Component {
  render() {
    return (
      <Text
        text={textBanner[this.props.activeSceneId]}
        anchor={0.5}
        x={window.innerWidth/2}
        y={window.innerHeight/2}
        style={
          new PIXI.TextStyle({
            align: 'center',
            fontFamily: '"Source Sans Pro", Helvetica, sans-serif',
            fontSize: 50,
            fontWeight: 400,
            fill: ['#ffffff', '#00ff99'], // gradient
            stroke: '#01d27e',
            strokeThickness: 5,
            letterSpacing: 20,
            dropShadow: true,
            dropShadowColor: '#ccced2',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
            wordWrap: true,
            wordWrapWidth: 440,
          })
        }
      />
    );
  }
}




class CanvasTest extends Component {
  render() {
    return (
      <Stage width={window.innerWidth} height={window.innerHeight}  options={{ backgroundColor: 0x343434 }}>
        <SpriteVideo />
{/*        <SpriteTest activeSceneId={this.props.activeSceneId} />
        <TilingSpriteTest activeSceneId={this.props.activeSceneId} />
        <TextTest activeSceneId={this.props.activeSceneId} />*/}
      </Stage>
    );
  }
}

class HomeCanvas extends Component {
  render() {
    return (
      <div>
        <CanvasTest activeSceneId={this.props.activeSceneId}/>
      </div>
    )
  }
}

export default HomeCanvas;
