import React, { Component } from 'react';
import cx from 'classnames';
import styles from './homepage.scss'

import { Stage, Sprite, Container, TilingSprite, Text, Graphics } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js';

import cat from './media/cat.png'
import puppy from './media/puppy.png'
import mouse from './media/mouse.png'

const bgImages = [cat, puppy, mouse];

let factory_1 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-1.gif";
let factory_2 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-2.gif";
let factory_3 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-3.gif";

const bgImagesFactories = [factory_1, factory_2, factory_3];

let bgVideo = 'http://res.cloudinary.com/dghff7rpa/video/upload/ac_none/v1536614709/backgrounds/video/abstract_bw.mp4';


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
        muted={'muted'}
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

class SpriteMaskTest extends Component {


}

class GraphicsTest extends Component {
  render() {
    return (
      <Graphics
        draw={g => {
          // clear the graphics
          g.clear()
          // start drawing
          g.lineStyle(0)
          g.beginFill(0xffff0b, 0.5)
          g.drawCircle(window.innerWidth/2, window.innerHeight/2, window.innerHeight/3)
          g.endFill()
        }}
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


class SmallSpriteTest extends Component {

  onClick = (event) => {
    console.log('onClick', event);
  }

  render() {
    return (
      <Sprite
        interactive={true}
        buttonMode={true}
        pointerdown={this.onClick}
        cursor={'none'}
        texture={PIXI.Texture.fromImage(bgImages[this.props.activeSceneId])}
        width={450}
        height={450}
        x={this.props.mouseposition.x}
        y={this.props.mouseposition.y}
        anchor={[0.5,0.5]}
      />
    );
  }
}


class TextTest extends Component {
  render() {
    return (
      <Text
        text={textBanner[this.props.activeSceneId].toUpperCase()}
        anchor={0.5}
        x={window.innerWidth/2}
        y={window.innerHeight/2}
        style={
          new PIXI.TextStyle({
            align: 'center',
            fontFamily: 'Helvetica, sans-serif',
            fontSize: 160,
            fontWeight: 700,
            fill: ['#ffffff'],
            letterSpacing: 25,
            dropShadow: false,
            wordWrap: false,
            wordWrapWidth: window.innerWidth + 200,
            padding: 50,
          })
        }
      />
    );
  }
}

class CanvasTest extends Component {

  constructor(props) {
    super(props);
    this.state={mouseposition:{x:0,y:0}}
    this.onMousemove.bind(this);
  }

  onMousemove = (event) =>{
    let mouseposition = event.data.global;
    this.setState({mouseposition})
  }

  render() {

      // const ticker = new PIXI.ticker.Ticker();
      // ticker.stop();
      // ticker.add((deltaTime) => {
      //   // do something every frame
      //
      // });
      // ticker.start();


    let canvasOptions = {
      width: window.innerWidth,
      height: window.innerHeight,
      autoResize: true,
      backgroundColor: 0x343434,
      /*      transparent: true,*/
    };

    let thing = new PIXI.Graphics();

    thing.x = window.innerWidth / 2;
    thing.y = window.innerHeight / 2;
    thing.lineStyle(0);

    console.log(thing);

    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        options={canvasOptions}
      >
        <Container
          mousemove={this.onMousemove}
          interactive={true}
          mask={thing}
        >
          {/* <SpriteVideo />*/}
          <SpriteTest activeSceneId={this.props.activeSceneId}  />
          <TilingSpriteTest activeSceneId={this.props.activeSceneId} />
          <TextTest activeSceneId={this.props.activeSceneId} />
          <SmallSpriteTest activeSceneId={this.props.activeSceneId} mouseposition={this.state.mouseposition}   />
        </Container>
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
