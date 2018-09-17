import React, { Component } from 'react';
import cx from 'classnames';
import styles from './homepage.scss'

import { Stage, Sprite, Container, TilingSprite, Text, Graphics } from '@inlet/react-pixi'
import * as PIXI from 'pixi.js';

import cat from './media/cat.png'
import puppy from './media/puppy.png'
import mouse from './media/mouse.png'

const bgImages = [cat, puppy, mouse];

// let bg_1 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-1.gif";
// let bg_2 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-2.gif";
// let bg_3 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536613725/backgrounds/images/factory-3.gif";

let bg_1 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939919/backgrounds/images/brutalist_1.gif";
let bg_2 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_2.gif";
let bg_3 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_3.gif";
let bg_4 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_4.gif";
let bg_5 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_5.gif";
let bg_6 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_6.gif";
let bg_7 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_7.gif";
let bg_8 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_8.gif";
let bg_9 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_9.gif";
let bg_10 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_10.gif";
let bg_11= "https://res.cloudinary.com/dghff7rpa/image/upload/v1536939226/backgrounds/images/brutalist_11.gif";

let bgImagesFactories = [bg_4, bg_10, bg_3];

let wallpaper_1 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536944627/backgrounds/images/wallpaper-1.jpg";
let wallpaper_2 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536944627/backgrounds/images/wallpaper-2.jpg";
let wallpaper_3 = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536944627/backgrounds/images/wallpaper-3.jpg";

let cellsPng = "https://res.cloudinary.com/dghff7rpa/image/upload/v1536954496/backgrounds/images/cells.png";


let bgImagesWallpaper = [wallpaper_1, wallpaper_2, wallpaper_3];

//let bgVideo = 'http://res.cloudinary.com/dghff7rpa/video/upload/ac_none/v1536614709/backgrounds/video/abstract_bw.mp4';
let bgVideo = 'http://res.cloudinary.com/dghff7rpa/video/upload/v1536614709/backgrounds/video/abstract_bw.mp4';

PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;

let textBanner = ['Power','Exploitation','Corruption','Despair', 'Fake News','Exploitation','Shaming','Trolls'];


class SpriteVideo extends Component {

  render() {
    return (
      <Sprite
        texture={PIXI.Texture.fromVideo(bgVideo)}
        width={window.innerWidth}
        height={window.innerHeight}
        loop={true}
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
/*        scale={[2 + Math.abs(2 * this.state.rotation), 2 + Math.abs(2 * this.state.rotation)]}
        rotation={this.state.rotation}*/
        anchor={[0.5,0.5]}
      />
    );
  }
}



class Wallpaper extends Component {


  constructor() {
    super(...arguments);
    this.myRef = React.createRef();
  }

  render() {
    return (

      <TilingSprite
        ref={this.myRef}
        texture={PIXI.Texture.fromImage(bgImagesWallpaper[this.props.activeSceneId])}
        width={window.innerWidth}
        height={window.innerHeight}
        tilePosition={{ x: 10, y: 10 }}
        tileScale={{ x: 0.2, y: 0.2 }}
       blendMode={PIXI.BLEND_MODES.HARD_LIGHT}
        alpha={0.7}
      />

/*
     <Sprite
        texture={PIXI.Texture.fromImage(bgImagesWallpaper[this.props.activeSceneId])}
        width={window.innerWidth/2}
        height={window.innerWidth/2}
        x={window.innerWidth/2}
        y={window.innerHeight/2}
        anchor={[0.5,0.5]}
        blendMode={PIXI.BLEND_MODES.HARD_LIGHT}
        alpha={0.4}
      />*/
    );
  }
}


class SpriteMaskTest extends Component {
  render() {
    return (
      <Graphics
        draw={g => {
          // clear the graphics
          g.clear()
          // start drawing
          g.lineStyle(0)
          g.beginFill(0x000000, 1)
          g.drawCircle(window.innerWidth/2, window.innerHeight/2, window.innerHeight/3)
          g.endFill()
        }}
      />
    );
  }

}

class GraphicsTest extends Component {


  constructor() {
    super(...arguments);
    this.myRef = React.createRef();
  }

  render() {
    return (
      <Graphics
        ref={this.myRef}
     /*   visible={false}*/
        draw={g => {
          // clear the graphics
          g.clear()
          // start drawing
          g.lineStyle(0)
          g.beginFill(0xff00ea, 0.1)
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
        blendMode={PIXI.BLEND_MODES.LIGHTEN}
        alpha={0.4}
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


class TextTestB extends Component {
  render() {
    return (
      <Text
        text={textBanner[this.props.activeSceneId].toUpperCase()}
        anchor={0.5}
        x={window.innerWidth/2}
        y={window.innerHeight/2}
        blendMode={PIXI.BLEND_MODES.LIGHTEN}
        alpha={0.4}
        style={
          new PIXI.TextStyle({
            align: 'center',
            fontFamily: 'Helvetica, sans-serif',
            fontSize: 180,
            fontWeight: 700,
            fill: ['#35363a'],
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
    this.onMount.bind(this);
  }

  onMousemove = (event) =>{
    let mouseposition = event.data.global;
    this.setState({mouseposition})
  }

  componentDidMount() {
    this.createMask()
  }

  componentDidUpdate() {
    this.updateMask();
  }

  createMask(){
    this.mask = new PIXI.Graphics();
    this.updateMask();
  }
  updateMask(){
    this.mask.lineStyle(0);
    this.mask.clear();
    this.mask.beginFill(0x000000,0.1);
    this.mask.drawCircle(window.innerWidth/2, window.innerHeight/2, window.innerHeight/3)
    this.mask.endFill()
  }

  onMount(app){
    console.log('App', app);
    console.log('Ticker', app.ticker);

    let children =  app.stage.children[0].children

    console.log('Children', app.stage.children[0].children);

    let wallpaper =  app.stage.children[0].children[1].children[0]


    console.log('wallpaper', wallpaper);
    // children[1].mask = children[2];
    // children[2].visible = false;

    // app.ticker.stop();
    // app.ticker.add((deltaTime) => {
    //   // do something every frame
    //    console.log(deltaTime);
    //
    //  });
    // app.ticker.start();

  }


  render() {

    let canvasOptions = {
      width: window.innerWidth,
      height: window.innerHeight,
      autoResize: true,
      backgroundColor: 0x343434,
      /*      transparent: true,*/
    };

    return (
      <Stage
        width={window.innerWidth}
        height={window.innerHeight}
        options={canvasOptions}
        onMount={this.onMount}
      >
        <Container
          mousemove={this.onMousemove}
          interactive={true}
        >

          {/* <SpriteVideo />*/}
          <SpriteTest activeSceneId={this.props.activeSceneId}  />

          <Container mask={this.mask}>
            <Wallpaper  activeSceneId={this.props.activeSceneId}/>
          </Container>

        {/*  <GraphicsTest />*/}
          <TextTest activeSceneId={this.props.activeSceneId} />
          <TextTestB activeSceneId={this.props.activeSceneId} />



     {/*     <SmallSpriteTest activeSceneId={this.props.activeSceneId} mouseposition={this.state.mouseposition}   />*/}
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
